import * as React from "react";
import { DocumentInitialProps as Props } from "next/document";
import Document, { DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { Enhancer, AppType } from "next/dist/next-server/lib/utils";

/**
 * @author Diego Rocha <dhsrocha.dev@gmail.com>
 */
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<Props> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      const enhance: Enhancer<AppType> = (App) => (props) =>
        sheet.collectStyles(<App {...props} />);
      ctx.renderPage = () => originalRenderPage({ enhanceApp: enhance });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
