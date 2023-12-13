# react-polybox

React polymorphic box component

## Usage

```tsx
// Button.types.ts
import { PolymorphicComponentProps } from 'react-polybox';
import { ElementType } from 'react';

export interface CustomButtonProps {
    width?: 'fit-content' | 'fill-container';
    transparent?: boolean;
}

export type ButtonProps<T extends ElementType> = PolymorphicComponentProps<T, CustomButtonProps>;
```

```tsx
// Button.tsx
import cn from 'classnames';
import Polybox from 'react-polybox';
import { forwardRef } from 'react-generic-functions';

import S from './Button.module.scss';
import { ButtonProps } from './Button.types';

export const Button = forwardRef(
    <T extends React.ElementType = 'button', E extends HTMLElement = HTMLButtonElement>(
        { className, children, transparent, as, type = 'button', ...props }: ButtonProps<T>,
        ref: React.ForwardedRef<E>
    ) => {
        return (
            <Polybox
                {...props}
                as={(as || 'button') as React.ElementType}
                className={cn(S.Root, { [S.RootTransparent]: transparent }, className)}
                type={type}
                ref={ref}
            >
                {children}
            </Polybox>
        );
    }
);

```

```jsx
// Parent component

import { FC } from 'react';
import Link from 'next/link';

const Page: FC = () => {

    // ...

    return (
        <form>
            <Button>
                Button type button
            </Button>
            <Button type="submit">
                Button type submit
            </Button>
            <Button as="a" href="/example">
                Button as anchor
            </Button>
            <Button as={Link} to="example">
                Button as next/link
            </Button>
        <form>
    );
}
```