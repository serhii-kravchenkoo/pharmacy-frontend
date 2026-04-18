import { ReactNode } from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

type Props = {
  children: ReactNode;
};

export const SharedLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
