# Template JS

<p align="center">
    <a
      href="https://app.netlify.com/sites/template-js/deploys">
      <img
        src="https://api.netlify.com/api/v1/badges/0c426f36-6077-4b04-a5f9-6faafd7871c0/deploy-status"
        alt="Netlify Status"
        title="netlify-status"/>
    </a>
    &nbsp;
    <a
      href="https://github.com/dhsrocha/template-js/actions">
      <img
        src="https://github.com/dhsrocha/template-js/workflows/template-CI/badge.svg"
        alt="Netlify Status"
        title="netlify-status"/>
    </a>
</p>

<p align="center">
  <a href="#file-naming-convention">File naming convention</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#testing">Testing</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#linting">Linting</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#deployment">Deployment</a>
</p>

A basic working application template, using the following technologies:

* [`Typescript`](https://www.typescriptlang.org): as the base language used for this repository;
* [`Next.js`](https://github.com/zeit/next.js);
  * Also [template creation command](https://github.com/zeit/next.js/tree/canary/examples/with-typescript)
  based on the aforementioned technologies.
* [`styled-components`](https://styled-components.com): for styling concerns.

## File naming convention

The following depicts the conventions used for concern, as described in `package.json`'s configurations for testing frameworks:

_**PS:** All the files matched by the following extensions should be in `src` folder._

* `.ts` / `.tsx`: Production files;
* `.test.ts`: Test files. The current configurations does not distinguish which folder they might be in.

## Testing

The main solutions used here for testing are:

* [`Jest`](https://jestjs.io): as the standard testing framework;
  * Also the necessary presets (such as [`ts-jest`](https://kulshekhar.github.io/ts-jest) and [`Babel`](https://babeljs.io) assets) in order to supporting `.ts` / `.tsx` files parsing.
* [`Enzyme`](https://enzymejs.github.io/enzyme), for controlling [`React`](https://reactjs.org) components' rendering in tests.

### Commands

* `test`: Run testing battery once, with fixing code style when is applicable; and
* `test:watch`: Keep running the test battery whenever occurs a modification on a `.ts`/`.tsx` file.

### Git hooks

In order to ensure robust code in SCM, the solution [`Husky`](https://github.com/dhsrocha/typicode/husky) ensures to trigger `yarn test` script call in a `pre-commit` or a `pre-push` events.

## Linting

The following solutions are used to enforce code consistence and best practices. They are integrated to [`Jest`](https://jestjs.io) as plugins and extensions and, therefore, its declared rules are able to trigger along side in the CLI call.

* [`ESLint`](https://eslint.org): syntax linting; and
* [`Prettier`](https://prettier.io): style and format.

## Deployment

The current commands and configurations are the following:

### Locally

[`Next.js`](https://github.com/zeit/next.js) is provided for for building the application, which may be used locally (or any other desired environment). As of any framework, is should be run under its corresponding premises.

#### Commands

* `dev`: Builds, starts the application locally.

### Production

The build is being currently deployed in [`Netlify`](https://www.netlify.com) just for presentation purposes. The configurations used for running the deployment are:

#### Configuration

* Build command: `yarn next start && yarn next export`; and
* Output folder: `out/`.
