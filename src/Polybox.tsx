import React, { ForwardedRef } from 'react';
import { forwardRef } from 'react-generic-functions';

import { BoxProps } from './Polybox.types';

const Polybox = forwardRef(
    <T extends React.ElementType = 'div', E extends HTMLElement = HTMLDivElement>(
        { as, ...restProps }: BoxProps<T>,
        ref: ForwardedRef<E>,
    ) => {
        const Element = (as || 'div') as React.ElementType;

        return <Element ref={ref} {...restProps} />;
    },
);

export default Polybox;
