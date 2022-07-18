import Layout from '../../pages/Layout'
import Datatable from '../Datatable'

import * as S from './styles'

const List = () => {
  return (
    <Layout>
      <S.Container>
        <S.LinkStyled to='/users/new'><S.PlusIcon />Add new user</S.LinkStyled>
        <Datatable />
      </S.Container>
    </Layout>
  )
}

export default List