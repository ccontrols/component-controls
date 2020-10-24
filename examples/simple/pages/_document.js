import React from 'react';
import fs from 'fs';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { extractCritical } from 'emotion-server';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const styles = extractCritical(initialProps.html);
    let cssStyles;
    const cssBundle = process.env.NEXT_CC_CSS_FILENAME;
    if (cssBundle && fs.existsSync(cssBundle)) {
      cssStyles = fs.readFileSync(cssBundle, 'utf8');
    }
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            data-emotion-css={styles.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: styles.css }}
          />

          {cssStyles && <style>{cssStyles}</style>}
        </>
      ),
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
