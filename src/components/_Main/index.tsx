import Feature from '../Feature'
import Chart from '../Chart'

import { Container } from './styles'

const Main = () => {
  return (
    <Container>
      <Feature />
      <Chart aspect={2 / 1} title='Last 6 months (Revenue)' />
    </Container>
  )
}

export default Main