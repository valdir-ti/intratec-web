import Layout from '../../pages/Layout'
import Datatable from '../Datatable'

import * as S from './styles'

interface IList {
  item: string;
  slug: string;
}

const List = ({ item, slug }: IList) => {

  return (
    <Layout>
      <S.Container>
        <S.LinkStyled to={`/${slug}/new`}><S.PlusIcon />{`Add new ${item}`}</S.LinkStyled>
        <Datatable slug={slug} />
      </S.Container>
    </Layout>
  )
}

export default List