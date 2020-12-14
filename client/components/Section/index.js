import {Container, Content} from './styled'
export default function Section({bg, children, gradient, className, containerClass, id}) {
    return (
        <Container bg={bg} gradient={gradient} className={containerClass} id={id}>
            <Content className={className}>
                {children}
            </Content>
        </Container>
    );
} 
