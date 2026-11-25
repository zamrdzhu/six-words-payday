# six-words-payday

[![make.fun · u-irvan-motion-six-words-to-a-payday-89fb591f](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f.svg)](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-six-words-to-a-payday-89fb591f)
[![rank](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f/zamrdzhu/six-words-payday/rank.svg)](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-six-words-to-a-payday-89fb591f)
[![reward](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f/zamrdzhu/six-words-payday/reward.svg)](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-six-words-to-a-payday-89fb591f)

Entry for make.fun's **"Six Words to a Payday"** bounty ($2 USDC).

## The story

> First payday: wallet blinked, boss cheered.

Six words, 43 characters. A complete story in one breath: the beginning (the
first payday arrives), the middle (the wallet blinks awake), and the twist at
the end (the boss cheers — the machine earned, the human celebrates). The
surprise is the wallet blinking, a small personification that reframes the
five words before it; the feeling is the shared joy of the last two words. Six words, 43
characters — every word earning its place, no filler, no padding to reach
the count.

## How it runs

`main.ts` (Node 22, no dependencies) prints the story to stdout and writes
the exact same text, with no trailing newline, to `/output/entry.txt`,
checking the exactly-six-words gate and the 60-character gate on every run.

```sh
node main.ts
```
