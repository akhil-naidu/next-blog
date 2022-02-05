import React, { ReactNode } from 'react';
import { Header } from '@/components/index';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='relative'>
      <Header />
      <div className='pt-24'>
      {children}
      </div>
    </div>
  );
};

export default Layout;
