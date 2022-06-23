import { Container, ContainerLogo, ContainerLogoSpan, ContainerCenter, ContainerCenterUl, ContainerCenterLi, ContainerCenterSpan, ContainerBottom } from './styles'

const Sidebar = () => {

  return (
    <Container>
      <ContainerLogo>
        <ContainerLogoSpan>
          Intratec Tecnologia
        </ContainerLogoSpan>
      </ContainerLogo>
      <ContainerCenter>
        <ContainerCenterUl>
          <ContainerCenterLi>
            <ContainerCenterSpan>Dashboard</ContainerCenterSpan>
          </ContainerCenterLi>
          <ContainerCenterLi>
            <ContainerCenterSpan>Dashboard</ContainerCenterSpan>
          </ContainerCenterLi>
          <ContainerCenterLi>
            <ContainerCenterSpan>Dashboard</ContainerCenterSpan>
          </ContainerCenterLi>
          <ContainerCenterLi>
            <ContainerCenterSpan>Dashboard</ContainerCenterSpan>
          </ContainerCenterLi>
        </ContainerCenterUl>
      </ContainerCenter>
      <ContainerBottom>
        Color Options
      </ContainerBottom>
    </Container>
  )
}

export default Sidebar