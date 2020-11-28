import { Children } from 'react';
import {Card, Title} from './styles';

export default function DarkCard({children, lightLevel, title}) {
    return (
        <Card lightLevel={(lightLevel === undefined ? 1 : lightLevel)}>
            <Title>{title}</Title>
            {children}
        </Card>
    );
}