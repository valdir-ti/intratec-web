import { Container, Title, SubTitle } from "./styles"

const NotFound = () => {
  return (
    <Container>
      <Title>404 - Page Not Found!</Title>
      <SubTitle to='/'>Return to dashboard</SubTitle>
    </Container>
  )
}

export default NotFound