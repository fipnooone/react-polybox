import React from 'react';

import { BoxProps } from './Polybox.types';

const Polybox = <T extends React.ElementType = 'div'>({ as, ...props }: BoxProps<T>) => {
    const Element = (as || 'div') as React.ElementType;

    return <Element {...props} as={props.as} />;
};

export default Polybox;
