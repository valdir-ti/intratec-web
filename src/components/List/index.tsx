import Layout from '../../pages/Layout'
import TableList from '../Table'
import { Title } from './styles'

const List = () => {

  return (
    <Layout>
      <Title>Latest Transactions</Title>
      <TableList />
    </Layout>
  )
}

export default List