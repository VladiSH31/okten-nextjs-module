import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacts layout metadata',
  description: 'Contacts layout description'
};

type Props = { children: React.ReactNode };
const Layout = ({ children }: Props) => {
  return (
    <>
      {children}
    </>
  );
};

export default Layout;