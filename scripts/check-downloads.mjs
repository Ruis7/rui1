import { readFile, writeFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';

const source = await readFile(new URL('../data.js', import.meta.url), 'utf8');
const databases = runInNewContext(source + '\n[firmwareDatabase, manualDatabase, faqDatabase]', {}, { timeout: 1000 });
const urls = new Map();
const today = new Date().toLocaleDateString('sv-SE', { timeZone: 'Europe/Moscow' });
databases.forEach((database, index) => {
    for (const [model, entries] of Object.entries(database)) {
        for (const entry of entries) {
            if (!entry.url || entry.verified === false || (index === 0 && !entry.availableNow && entry.date > today)) continue;
            const label = model + ' · ' + (entry.version || entry.title || '');
            urls.set(entry.url, [...new Set([...(urls.get(entry.url) || []), label])]);
        }
    }
});

async function probe(url) {
    try {
        const response = await fetch(url, {
            redirect: 'follow', headers: { Range: 'bytes=0-0' }, signal: AbortSignal.timeout(15000)
        });
        await response.body?.cancel();
        if ([404, 410].includes(response.status)) return 'missing';
        if ([401, 403].includes(response.status)) return 'access';
        return response.ok ? 'reachable' : 'temporary';
    } catch {
        return 'temporary';
    }
}

const confirmed = [];
const uncertain = [];
const pending = [...urls];
async function checkLinks() {
    for (;;) {
        const entry = pending.shift();
        if (!entry) return;
        const [url, labels] = entry;
        const first = await probe(url);
        if (first === 'reachable') continue;
        await new Promise(resolve => setTimeout(resolve, 2000));
        const second = await probe(url);
        const line = '- ' + labels.join(', ') + ' — ' + url;
        if (first === 'missing' && second === 'missing') confirmed.push(line);
        else if (second !== 'reachable') uncertain.push(line + (second === 'access' ? ' (access denied)' : ' (temporary or inconsistent response)'));
    }
}
const output = process.argv[2];
if (!output) throw new Error('Usage: node scripts/check-downloads.mjs <report.md>');
await Promise.all(Array.from({ length: 3 }, checkLinks));
const report = [
    '# Download link check',
    'Checked ' + urls.size + ' distinct links. A reachable share page does not guarantee the file can be downloaded.',
    '## Repeated HTTP 404 or 410', ...confirmed.sort(),
    '## Access or temporary responses', ...uncertain.sort()
].join('\n\n') + '\n';
await writeFile(output, report);
if (process.env.GITHUB_OUTPUT) {
    const { appendFile } = await import('node:fs/promises');
    await appendFile(process.env.GITHUB_OUTPUT, 'confirmed=' + confirmed.length + '\n');
}
console.log(report);
