import React from 'react';

type PropsOf<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    E extends React.ElementType,
> = JSX.LibraryManagedAttributes<E, React.ComponentPropsWithRef<E>>;

export interface BoxOwnProps<E extends React.ElementType = 'div'> {
    as?: E;
}

export type BoxProps<E extends React.ElementType> = BoxOwnProps<E> & Omit<PropsOf<E>, keyof BoxOwnProps>;

export type PolymorphicComponentProps<E extends React.ElementType, P> = P & Omit<BoxProps<E>, keyof P>;
