# roystan-passanha.github.io

Source for my portfolio site: **https://roystan-passanha.github.io**

Built with React and Vite. Animated components come from [React Bits](https://reactbits.dev) (Aurora background, BlurText, GradientText, SpotlightCard, CountUp, FadeContent), downloaded into `src/components/reactbits/` by `scripts/fetch-reactbits.mjs` before each build.

Every push to `main` builds the site and deploys it to GitHub Pages through [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

```sh
npm install
npm run dev      # local preview
npm run build    # production build in dist/
```

Content lives in [`src/data.js`](src/data.js), so updating projects or experience doesn't touch layout code.

React Bits components are © David Haz, used under the MIT + Commons Clause licence.
