# 🚀 astro-auto-alias
## 📦 Overview
A lightweight Astro integration that automatically generates path aliases based on your project structure.

Say goodbye to ugly imports like `../../../../components/Btn.js` — and start using clean aliases like `@components/Btn.js`.

---
## ✨ Features

- ✅ **Automatic alias generation** from folder names
- ✅ **Supports custom root directory** (`src`, `client`, etc.)
- ✅ **Exclude folders** from aliasing 
- ✅ **Vite-compatible** — works with all Vite plugins
- ✅ **Zero configuration needed** for common setups
- ✅ **Improves DX** with cleaner, scalable imports

---

## Installation 

```bash
npm i astro-auto-alias
```

Or 

```bash
npx astro add astro-auto-alias
```

## Usage

In Your `astro.config.mjs`
```js
import AstroAutoAlias from 'astro-auto-alias';

export default {
  integrations: [
    AstroAutoAlias({
      root: 'src',        // Optional — default is 'src'
      exclude: ['pages']  // Optional — folders to skip
    })
  ]
};

```

```
src/
├── pages/  ← excluded
├── components/
       ├── Card.astro/
├── layouts/
└── contents/ 
```
```js
/* pages/nested/level2/hello  */
import Card from "@components/Card.astro"
```

# 💡 Author
Made by [zakarialaoui10](https://github.com/zakarialaoui10)

# ⭐️ Show your support
If you appreciate the project, kindly demonstrate your support by giving it a star!

# 📄 License
This projet is licensed under the terms of MIT License

