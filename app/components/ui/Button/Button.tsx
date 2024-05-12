import type { ComponentPropsWithRef, ElementType, ReactNode } from 'react';

type ButtonProps<C extends ElementType> = ComponentPropsWithRef<C> & {
  children: ReactNode;
};

export function Button<C extends ElementType>({
  children,
  as: Component = 'button',
  ...props
}: ButtonProps<C>) {
  return (
    <Component
      className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg shadow"
      {...props}
    >
      {children}
    </Component>
  );
}
