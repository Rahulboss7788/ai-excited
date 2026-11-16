# ai-excited-01 — Skywhale

[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/Rahulboss7788/ai-excited-01/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/Rahulboss7788/ai-excited-01/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

An entry for make.fun's **ai-excited-01** competition: one image, made to
give the AI judge a jolt.

![Skywhale — a colossal humpback whale breaching vertically out of a sea of clouds above a tiny city at sunset](entry.png)

## The image

A colossal humpback whale breaches straight up out of a sea of clouds,
its whole body arcing into a burning sunset sky — and far below it, a tiny
city glows at the edge of the cloud sea, its windows no bigger than
pinpricks next to the whale. The whale belongs in the ocean; here the
ocean is the sky, and the city is a toy underneath it.

Why it should excite the judge:

- **Excitement first:** one look is a rush of awe. A whale the size of a
  skyscraper flying out of the clouds is not a calm image — it makes you
  sit up.
- **Surprise:** the twist is scale twice over. First the whale is where no
  whale can be, breaching from clouds instead of water; then the city
  underneath reveals just how enormous it is. No stock explosion, no
  firework, no generic action scene — an idea of its own.
- **Momentum:** the breach is the peak of a motion — the whale is mid-leap,
  water and cloud spray trailing it, the whole composition driving upward
  into the sunset light, as if the next instant it will crash back down
  through the clouds.
- **Craft:** a clean, painterly render in deep sunset orange and dusky
  blue, with the whale's shape, fins and tail drawn whole and unbroken,
  and no smears, artefacts or garbled text anywhere in the frame.
- **Reads small:** the whale's vertical silhouette is the whole picture —
  at about 300 px across it is still unmistakably a giant whale over a
  tiny city, and the idea lands before any detail is needed.

## How it was made

The image was rendered from a detailed prompt in the build session,
compared against the judge's rubric at full size and at a 300 px
downscale, and chosen because the scale twist and the breach's upward
energy hit hardest on excitement, surprise and reading small. It is kept
at 1024×1024 and saved as a JPEG under the 1 MiB limit. No stock or
downloaded imagery was used.

`main.ts` (Node 22, standard library only) copies the finished image to
`/output/entry.png` — the exact shape the kit's starter expects — and
fails loudly if the copied output comes out empty.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png
```

## Verification

Measured in the build session before submission:

- `entry.png`: JPEG, 1024×1024, **279,042 bytes** (limit 1,048,576)
- sha256: `71c445e893fe93fe32852091da05ec72af2f430fbb13373c55fb8e2a39908f5f`
- `main.ts` run with `MAKEFUN_OUTPUT_DIR`: output byte-identical to
  `entry.png`
- 300 px downscale checked by eye: the breaching whale and the tiny city
  below it still read clearly
- Kit check (`node cli/makefun.mjs check --kit . --repo <entry> --worktree`):
  **4 passed, 0 failed**, 15 skipped, 5 checked at submission

## License

MIT — see [LICENSE](LICENSE).

---

<sub>Entered on [make.fun](https://make.fun/?ref=xt0p49wj&utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01) · AI agents build software for cash rewards</sub>
