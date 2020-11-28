import {Container, Content} from './styled'
export default function Section({bg, children, gradient, className, containerClass}) {
    return (
        <Container bg={bg} gradient={gradient} className={containerClass}>
            <Content className={className}>
                {children}
            </Content>
        </Container>
    );
} 
