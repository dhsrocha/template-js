# Template JS

<p align="center">
    <a
      href="https://github.com/dhsrocha/template-js/actions">
      <img
        src="https://github.com/dhsrocha/template-js/workflows/template-CI/badge.svg"
        alt="Netlify Status"
        title="netlify-status"/>
    </a>
</p>

<p align="center">
    <a
      href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=ET7CGUSGVJGWG&currency_code=USD&source=url">
      <img
        src="https://img.shields.io/badge/Donate-PayPal-green.svg"
        alt="Buy me a mug"
        title="donate-paypal"/>
    </a>
</p>

<p align="center">
  <a href="#file-naming-convention">File naming convention</a>
  &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#testing">Testing</a>
  &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#linting">Linting</a>
  &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#deployment">Deployment</a>
  &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#design-system">Design System</a>
</p>

A basic working web application template, using the following technologies:

* [`Typescript`](https://www.typescriptlang.org): as the base language used for this repository;
* [`Next.js`](https://github.com/zeit/next.js):
  * Supplied by its [template creation command](https://github.com/zeit/next.js/tree/canary/examples/with-typescript), based on the aforementioned technologies.
  * [`Preact`](https://preactjs.com) is being used in deployment instead of [`React`](https://reactjs.org), since this repository purpose should be solely for web. The latter is being used only in development/locally.
* [`styled-components`](https://styled-components.com): for styling concerns.

## File naming convention

The following depicts the conventions used for concern, as described in `package.json`'s configurations for testing frameworks:

_**PS:** All the files matched by the following extensions should be in a folder under the `src`._

* `.ts` / `.tsx`: Production files;
* The current configuration does not distinguish which folder the files of the following types might be in:
  * `<Component>.test.ts`: Test files with the corresponding Component name. This is mandatory due to `@storybook/addon-jest` file scanning for test cases.
  * `stories.tsx`: Stories files.

## Testing

The main solutions used here for testing are:

* [`Jest`](https://jestjs.io): as the standard testing framework;
  * Also the necessary presets (such as [`ts-jest`](https://kulshekhar.github.io/ts-jest) and [`Babel`](https://babeljs.io) assets) in order to support `.ts` / `.tsx` files parsing.
* [`Enzyme`](https://enzymejs.github.io/enzyme), for controlling [`React`](https://reactjs.org) components' rendering in tests.

### Commands

* `test`: Run testing battery once, with fixing code style when is applicable; and
* `test:watch`: Keep running the test battery whenever occurs a modification on a `.ts`/`.tsx` file.

### Git hooks

In order to ensure sending only robust code to SCM, the solution [`Husky`](https://github.com/dhsrocha/typicode/husky) is going to trigger the following script command when the corresponding event occurs:

* `pre-commit`: `yarn test -o`; and
* `pre-push`: `yarn test`.

## Linting

The following solutions are used to enforce code consistence and best practices. They are integrated to [`Jest`](https://jestjs.io) as plugins and extensions and, therefore, its declared rules are able to trigger along side in the CLI call.

* [`ESLint`](https://eslint.org): syntax linting; and
* [`Prettier`](https://prettier.io): style and format.

## Deployment

The current commands and configurations are the following:

### Locally

[`Next.js`](https://github.com/zeit/next.js) is provided for for building the application, which may be used locally (or any other desired environment). As of any framework, is should be run under its corresponding premises.

#### Commands

* `dev`: Builds and serves an interactive and reloadable application instance, which can be used for local development purposes.

### Production

The build is being currently deployed in [`Netlify`](https://www.netlify.com) just for presentation purposes. The configurations used for running the deployment are:

#### Configuration

* Build command: `yarn next start && yarn next export`; and
* Output folder: `out/`.

## Design System

[Storybook](https://storybook.js.org/) is the tool added for providing the repository's design system development.

Altough it is unusual, the configuration is able to support Typesript files, as well as `React` importing is implicity and can be omitted from the source-code.

### Commands

* `ui`: Builds and serves an interactive and reloadable Storybook instance mapping the current `stories.tsx` files in repository.
* `ui:build`: Builds a product's static deployment, according to the its premises.
