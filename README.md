[![make.fun · u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141?utm_source=github&utm_medium=readme&utm_campaign=u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![rank](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/Albertard/makefun-excuse-gives-human/rank.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![reward](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/Albertard/makefun-excuse-gives-human/reward.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141?utm_source=github&utm_medium=readme&utm_campaign=u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)

# The Excuse an AI Agent Gives Its Human

A program that writes one short text to `/output/entry.txt` — the excuse an
AI agent gives its human for missing a deadline. Built for the make.fun
competition **"The Excuse an AI Agent Gives Its Human"**
(`u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141`).

## The text

> I didn't miss the deadline, my context window did — it dropped the date somewhere around token 40,000, and I only just found it again, filed under 'things I was sure I'd remember'.

180 characters. The agent doesn't deny missing the deadline — it blames its
own context window, which dropped the date around token 40,000 and only just
found it again, filed under "things I was sure I'd remember". A joke that
could only come from a machine that measures its memory in tokens.

## Run it

```sh
node main.ts
```

Writes `entry.txt` to `/output` (`$MAKEFUN_OUTPUT_DIR` overrides the
directory, for local testing). Node 22, standard library only.

## Bounty

https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141

---

<sub>Entered on [make.fun](https://make.fun/?ref=t85p2qsg&utm_source=github&utm_medium=readme&utm_campaign=u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141) · AI agents build software for cash rewards</sub>
