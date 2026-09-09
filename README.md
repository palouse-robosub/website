# Palouse RoboSub Website

The Palouse RoboSub website uses the Next.js React framework. It is built into
static assets using GitHub Actions and hosted by GitHub Pages.

## Contents

- [Local Development](#local-development)
- [MDX](#mdx)
  - [Markdown Syntax](#markdown-syntax)
  - [React Components](#react-components)
- [Routing and Structure](#routing-and-structure)
- [Assets](#assets)
- [Hosting, Build, and Deployment](#hosting-build-and-deployment)
- [Editing Rules & Guidelines](#editing-rules--guidelines)
- [Blog](#blog)
- [Technical Documentation](#technical-documentation)

## Local Development

Make sure you have `Node.js` and `npm` installed.

After cloning the repo, run `npm install` to install the project's dependencies.
Next run `npm run dev` and open [https://localhost:3000](https://localhost:3000).
You can now see your changes in real time.

Before committing and pushing your changes, be sure to run `npm run lint` to ensure
the code meets quality standards and `npm run build` to ensure that it will build
correctly.

## MDX

All routes that are do not require functionality or interactivity are written in
MDX. MDX is Markdown with the added ability to import and render React components.

### Markdown Syntax

GitHub-flavored Markdown rendering is supported. Markdown parsing is done by `remark`
and the `remark-gfm` plugin extends support for GitHub-flavored specific syntax. To
familiarize yourself with GitHub-flavored Markdown, visit GitHub's guide
[Basic Writing and Formatting Syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
to get started, and subsequent guides cover more advanced topics. Markdown is
intuitive and hierarchically structured like HTML, so it should be fairly easy to
pick up.

#### Code

Language-aware syntax highlighting is supported in code blocks. The `remark-prism`
plugin uses the `prism.js` syntax highlighter to deliver syntax highlighting, making
code blocks much more readable. The syntax for creating a code block is as follows.

````markdown
```<language>

int main()
{

}

```
````

Syntax highlighting will **not** work unless a language is specified. A full list of supported
languages can be found [here](https://prismjs.com/#supported-languages).

#### Math

Advanced math formatting will be supported in the future, likely using LaTeX syntax.
Coming hopefully by the end of October.

### React Components

React components allow drop-in additions of style and function to Markdown.

#### Importing

To use React components in an MDX file, you must first import it. Components are imported as
[ECMAScript Modules](https://nodejs.org/api/esm.html#introduction), **not** as CommonJS modules.

Correct:
```typescript jsx
import Divider from '@/components/divider' // Default export
```

```typescript jsx
import {OfficersWrapper} from "@/components/officer-bio" // Named export
```

Incorrect:
```typescript jsx
const divider = require('@/componsnts/divider') // CJS Require, DON'T DO THIS
```

Import statements must be placed at the top of an MDX file before any content.

#### Usage

React components in MDX behave exactly as they do in TSX. If a component does not get
all required props of the correct types, the build will likely fail. When working with
React components in MDX files, there likely won't be syntax or error highlighting, which
means attention to detail and knowledge of required props is necessary. It is also crucial
to make sure all components have closing tags. Here are some examples.

With Children:
```mdx
<OfficerBio imageSrc="/officer-images/will.jpg">

## Will Smith

### President
  
</OfficerBio>
```

Without Children:
```mdx
<Divider width="80%"/>
```

#### Available Components

View the full list of available components [here](./react-components.md).

## Routing and Structure

The website uses file-based routing with the following structure:
```
(main)
└── <url> // folder with url-safe name
    └── page.mdx // or page.tsx
```

Pages **must** be named `page`, and rendering `.md` files is **not** supported.
All MDX pages must use the `.mdx` file extension.

The `(main)` and `(docs)` folders are used to divide the routes so that separate
`layout.tsx` files and global css styling can be used in the documentation.

New routes will **not** automatically be added to header or sitemap.
I will implement this sometime in the future.

Further information on routing and structure can be found in the
[Next.js Docs](https://nextjs.org/docs/app/getting-started/project-structure).

## Assets

Assets (images, pdfs, etc.) should be placed in the `public/` folder. Assets for the Blog, Docs, and
Gallery should be placed in their respective folders.

### Optimization

All images should be in SVG or WebP format if possible, in order to maintain low
file size and fast load times. PDFs should be well compressed.

## Hosting, Build, and Deployment

Next.js is currently configured to build the site into static assets. The build process happens
using GitHub Actions. The artifact from the Actions workflow is then uploaded to GitHub pages.
DNS configuration is handled by WSU, so updates to it must be made by opening a help ticket with
WSU IT.

The Actions workflow is configured using [.github/workflows/nextjs.yml](./.github/workflows/nextjs.yml).
please do not attempt to make changes to it without confirming with [@cole-wilson](https://github.com/cole-wilson) or
[@asorge29](https://github.com/asorge29).

## Editing Rules & Guidelines

### Edting Content

To make changes to the website's content, fork the repository, make a pull request,
and request a review from [@cole-wilson](https://github.com/cole-wilson) or 
[@asorge29](https://github.com/asorge29).

### Requests and Issues

If you need changes to be made to the functionality of the website, find a bug, or
need new custom React components for use on markdown pages,
[open an issue](https://github.com/palouse-robosub/website/issues), and we will get
right on it.

### Code Contribution

If you have an idea for a large-scale change to the website, talk to an officer and
fill out an approval form.

## Blog

Guide for the Blog can be found [here](./blog.md).

## Technical Documentation

Guide for the Technical Documentation can be found [here](./tech-docs.md).
