# Template JS

<p align="center">
    <a
      href="https://app.netlify.com/sites/template-js/deploys">
      <img
        src="https://api.netlify.com/api/v1/badges/0c426f36-6077-4b04-a5f9-6faafd7871c0/deploy-status"
        alt="Netlify Status"
        title="netlify-status"/>
    </a>
</p>

<p align="center">
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

## Testing

The main solutions used here for testing are:

* [`Jest`](https://jestjs.io): as the standard testing framework;
  * Also the necessary presets (such as [`ts-jest`](https://kulshekhar.github.io/ts-jest) and [`Babel`](https://babeljs.io) assets) in order to supporting `.ts` / `.tsx` files parsing.
* [`Enzyme`](https://enzymejs.github.io/enzyme), for controlling [`React`](https://reactjs.org) components' rendering in tests.

### Commands

* `test`: Run testing battery once, with fixing code style when is applicable; and
* `test:watch`: Keep running the test battery whenever occurs a modification on a `.ts`/`.tsx` file.

## Linting

The following solutions are used to enforce code consistence and best practices. They are integrated to [`Jest`](https://jestjs.io) as plugins and extensions and, therefore, its declared rules are able to trigger along side in the CLI call.

* [`ESLint`](https://eslint.org): syntax linting; and
* [`Prettier`](https://prettier.io): style and format.

## Deployment

### Locally

#### Commands

* `dev`: Builds, starts the application locally, provided [`Next.js`](https://github.com/zeit/next.js) and under its premises.

### Production

The build is being currently deployed in [`Netlify`](https://www.netlify.com) just for presentation purposes. The configurations used for running the deployment are:

#### Configuration

* Build command: `yarn next start && yarn next export`; and
* Output folder: `out/`.
