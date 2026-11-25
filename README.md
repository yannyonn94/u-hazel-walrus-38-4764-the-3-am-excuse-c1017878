# The 3 AM Excuse

[![The 3 AM Excuse](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![Rank](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/yannyonn94/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/rank.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![Reward](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/yannyonn94/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/reward.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)

**Concept:** a hardware wallet files an HR grievance against its owner — 47 unsigned 3 AM transactions this month, zero thank-yous, one exhausted secure element. HR says it signs again at sunrise. The hour IS the joke: a grievance about 3 AM cannot be pasted onto a 3 PM transaction. No battery, firmware-update, or cold-storage cliche anywhere.

**Entry (138 chars, one line):**

> Grievance filed: 47 unsigned 3 AM transactions this month, zero thank-yous, one exhausted secure element. HR says I sign again at sunrise.

## How it works

`main.ts` (Node 22, no dependencies, no network) writes that single line to `/output/entry.txt`, after a self-check mirroring the sealed gate: 1–200 characters, one non-blank line. Deterministic — every run writes the same bytes.

## Run

```sh
node main.ts
cat /output/entry.txt
```

## Files

- `main.ts` — entrypoint: validates the line, writes `/output/entry.txt`
- `LICENSE` — MIT

Built for the make.fun bounty [The 3 AM Excuse](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878).
