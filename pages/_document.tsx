import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { InitializeColorMode } from "@chakra-ui/core"
import GAScript from "src/analytics/ga-script"

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head/>
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
          <GAScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument