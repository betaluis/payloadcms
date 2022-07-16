import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';

import '../css/style.css';

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  useEffect(() => {

    const style = document.getElementById('server-side-styles');

    if (style) {
      style.parentNode.removeChild(style);
    }

  }, [])

  return <Component {...pageProps} />;
};

export default MyApp;
