import React from 'react';

type PropsOf<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    E extends React.ElementType,
> = React.JSX.LibraryManagedAttributes<E, React.ComponentPropsWithRef<E>>;

export interface BoxOwnProps<T extends React.ElementType> {
    as?: T;
}

export type BoxProps<T extends React.ElementType> = BoxOwnProps<T> & Omit<PropsOf<T>, keyof BoxOwnProps<T>>;
// eslint-disable-next-line @typescript-eslint/ban-types
export type PolymorphicComponentProps<T extends React.ElementType, P = {}> = P & Omit<BoxProps<T>, keyof P>;
