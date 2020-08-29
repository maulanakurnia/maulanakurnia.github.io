import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { InitializeColorMode } from "@chakra-ui/core"
import { GA_TRACKING_ID } from 'utils/analytics'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <InitializeColorMode />

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument