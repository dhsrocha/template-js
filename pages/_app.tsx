import { AppProps as Props } from "next/app";
import { ReactElement as RE } from "react";

const isSSR = () => typeof window === "undefined";

/**
 * Accessibility tool: Outputs to devtools console on dev only and client-side only.
 * @see https://github.com/dequelabs/react-axe/issues/125
 */
if (process.env.NODE_ENV !== "production" && !isSSR()) {
  const Renderer = require("react"); // eslint-disable-line
  const DOM = require("react-dom"); // eslint-disable-line
  const axe = require("react-axe"); // eslint-disable-line
  axe(Renderer, DOM, 1000);
}

export default function MyApp({ Component, pageProps }: Props): RE {
  return <Component {...pageProps} />;
}
