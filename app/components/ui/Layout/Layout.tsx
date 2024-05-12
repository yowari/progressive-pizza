import { ReactNode } from 'react';
import classes from './Layout.module.css';

type LayoutProps = {
  children: ReactNode;
  center?: boolean;
};

export function Layout({ children, center }: LayoutProps) {
  return (
    <div className={classes.backgroundPattern}>
      <main
        className={`max-w-screen-lg min-h-screen p-4 mx-auto ${
          center ? 'flex flex-col items-center justify-center' : ''
        }`}
      >
        {children}
      </main>
    </div>
  );
}
