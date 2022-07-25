import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { GridProvider } from '@faceless-ui/css-grid';
import { ModalProvider } from '@faceless-ui/modal';
import { WindowInfoProvider } from '@faceless-ui/window-info';

// Styles
import useStyles from '../css/app';
import zindex from '../css/zindex';
import breakpoints from '../css/breakpoints';
import { base } from '../css/base';

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  const classes = useStyles();

  useEffect(() => {
    const style = document.getElementById('server-side-styles');

    if (style) {
      style.parentNode.removeChild(style);
    }
  }, []);

  return (
    <WindowInfoProvider breakpoints={breakpoints}>
      <ModalProvider zIndex={zindex.modal}>
        <GridProvider
          rowGap={{
            s: base(2),
            m: base(2),
            l: base(2),
            xl: base(2),
          }}
          colGap={{
            s: base(2),
            m: base(2),
            l: base(2),
            xl: base(2),
          }}
          cols={{
            s: 8,
            m: 8,
            l: 12,
            xl: 12,
          }}
        >
          <div className={classes.app}>
            <Component {...pageProps} />
          </div>
        </GridProvider>
      </ModalProvider>
    </WindowInfoProvider>
  );
};

export default MyApp;
