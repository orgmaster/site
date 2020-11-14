import {Container, Content} from './styled'
export default function Section({bg, children}) {
    return (
        <Container bg={bg} gradient>
            <Content>
                {children}
            </Content>
        </Container>
    );
} 
