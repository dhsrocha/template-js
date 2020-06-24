import { NextPage, Head } from "next";
import { Root } from "@src/Root";

/**
 * @author Diego Rocha <dhsrocha.dev@gmail.com>
 */
const Index: NextPage = () => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
       <title>A robust template</title>
    </Head>
    <Root />
  </>
);

export default Index;
