import { Fragment } from 'react';
import { Header, Footer } from './Component';

function DefaultLayout({ children }) {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
}

export default DefaultLayout;
