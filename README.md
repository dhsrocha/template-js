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

A basic working application template, using the following technologies:

* [`Typescript`](https://www.typescriptlang.org/);
* [`Next.js`](https://github.com/zeit/next.js/tree/canary/examples/with-typescript);
  * Also [template creation command](https://github.com/zeit/next.js/tree/canary/examples/with-typescript)
  based on the aforementioned technologies.
* [`styled-components`](https://styled-components.com/).

## Testing

The main solutions used here for testing are:

* [`Jest`](https://jestjs.io): as the standard testing framework;
  * Also the necessary presets (such as [`ts-jest`](https://kulshekhar.github.io/ts-jest) and [`Babel`](https://babeljs.io/) assets) in order to supporting `.ts` / `.tsx` files parsing.
* [`Enzyme`](https://enzymejs.github.io/enzyme), for controlling [`React`](https://reactjs.org/) components' rendering in tests.

## Linting

The following solutions are used to enforce code consistence and best practices. They are integrated to [`Jest`](https://jestjs.io) as plugins and extensions and, therefore, its declared rules are able to trigger along side in the CLI call.

* [`ESLint`](https://eslint.org/): syntax linting; and
* [`Prettier`](https://prettier.io/): style and format.

## Deploy

The current configurations used for running the deployment are:

* Build command: `yarn next start && yarn next export`; and
* Output folder: `out/`.
