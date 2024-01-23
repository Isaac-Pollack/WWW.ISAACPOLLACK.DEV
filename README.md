# My Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/e387b7b5-7834-4389-be51-05b2740a28d7/deploy-status)](https://app.netlify.com/sites/fastidious-rabanadas-41329f/deploys)

## 🚀 Project Structure

Inside of this Astro project, you'll see the following folders and files:

```text
/
├── src/
│   ├── components/
│   │   ├── ThemeToggler.astro
│   │   ├── UseCategory.astro
│   │   ├── ProjectCard.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── NavLink.astro
│   │   └── Testimonials.astro
│   │
│   ├── layouts/
│   │   ├── MasterLayout.astro
│   │   └── ProjectLayout.astro
│   │
│   └── pages/
│       ├── index.astro
│       ├── projects.astro
│       ├── uses.astro
│       ├── contact.astro
│       └── projects/
│           └── projects.md **
│
├── public/
│   ├── social-image.png ///////
│   ├── favicon.svg
│   ├── fonts/
│   │   ├── Soehne-mono-web-buch.woff
│   │   └── UntitledSansWeb-Regular.woff
│   └── project_images/
│       └── thumbnails.png **
│
├── .gitignore
├── README.md
├── Robots.txt
├── astro.config.mjs
├── tsconfig.json
├── tailwind.config.cjs
├── yarn.lock
└── package.json
```

`**` - Multiple items in this directory

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

## 📄 Fonts

Main: Untitled Sans - Most content + text blocks<br>
Headings: Sohene Mono - Headings, Nav links and buttons<br>

## 💻 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `yarn install`         | Installs dependencies                              |
| `yarn dev`          | Starts local dev server at `localhost:3000`        |
| `yarn build`        | Build your production site to `./dist/`            |
| `yarn preview`      | Preview your build locally, before deploying       |
| `yarn astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `yarn astro --help` | Get help using the Astro CLI                       |

<br>
<p align="center">
  Connect with me:
  <br>
  <a href="https://www.linkedin.com/in/Isaac-Pollack"><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn"></a>
  <a href="mailto:pollackisaac@gmail.com"><img src="https://img.icons8.com/fluent/48/000000/gmail.png" alt="Gmail"></a>
