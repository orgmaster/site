import { Children } from 'react';
import {Card, Title} from './styles';

export default function DarkCard({children, lightLevel, title, className, fixedHeight}) {
    return (
        <Card lightLevel={(lightLevel === undefined ? 1 : lightLevel)} className={className} fixedHeight={fixedHeight}>
            <Title>{title}</Title>
            {children}
        </Card>
    );
}