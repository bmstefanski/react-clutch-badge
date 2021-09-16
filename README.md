<div align="center">
  <h1>React Clutch Badge</h1>
  <img width="700" src="https://i.imgur.com/QmzdcFD_d.webp?maxwidth=1520&fidelity=grand">
  <br />
</div>

<div align="center">
  <a href="https://www.npmjs.com/package/react-clutch-badge"><img alt="npm version badge" src="https://img.shields.io/npm/v/react-clutch-badge"></a>  
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/react-clutch-badge">
  <img alt="license badge" src="https://img.shields.io/npm/l/react-clutch-badge">
</div>

<br />

# React Clutch Badge

Unofficial library for easy and performant integration with clutch.co.

- [x] 📸 Non-flickering
- [x] 🖼 Not-based on iframe
- [x] 👮🏼‍♂️ Customizable badges
- [x] ⚡️ Ideal for static rendering

## Installation

```bash
$ yarn add react-clutch-badge
# or

$ npm install --save-dev react-clutch-badge
```

## Usage

### With Next.js

```jsx
import styles from '../styles/Home.module.css'
import { ClutchBadge, getClutchReviewsData } from 'react-clutch-badge'

export default function Home({ clutchData }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ClutchBadge variant="smallLogo" {...clutchData} />
        <ClutchBadge variant="bigLogo" {...clutchData} />

        <ClutchBadge classNamePrefix="custom-small-clutch-badge" variant="smallLogo" {...clutchData} />
        <ClutchBadge classNamePrefix="custom-big-clutch-badge" variant="bigLogo" {...clutchData} />
      </main>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      clutchData: await getClutchReviewsData({ clutchProfileHandle: 'testscenario' }),
    },
  }
}
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
