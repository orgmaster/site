import { Component } from 'react';
import { Children } from 'react';
import {H1, H2} from './styles';

export default function Title({children, className, align, color, h2}) {
    const getComponent = () => {
        return h2 ? H2 : H1;
    };
    const MyComponent = getComponent();

    return (
        <MyComponent
            className={className}
            align={align}
            color={color}
            children={children}
        />
    );
}