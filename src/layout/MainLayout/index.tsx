import GridDebug from '@Components/GridDebug';
import Header from '@Layout/Header';
import type { PropsWithChildren } from 'react';
import React from 'react';
import styles from './mainLayout.module.scss';

export default function MainLayout({ children }: PropsWithChildren): React.ReactElement {
  return (
    <main className={styles.mainLayout}>
      <Header />
      {children}
      <GridDebug />
    </main>
  );
}
