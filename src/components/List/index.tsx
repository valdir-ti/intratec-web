import Layout from '../../pages/Layout'
import TableList from '../Table'
import { Container } from './styles'

const List = () => {

  return (
    <Layout>
      <Container>
        <TableList title="Last Transaction"/>
      </Container>
    </Layout>
  )
}

export default List