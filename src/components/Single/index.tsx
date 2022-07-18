import { useContext } from 'react';

import Layout from '../../pages/Layout'
import Chart from '../Chart'
import TableList from '../Table'

import { SidebarContext } from '../../context/sidebar/sidebarContext';

import useWindowDimensions from '../../hooks/getWindowDimensions';

import * as S from './styles'

const Single = () => {

  const sidebarContext = useContext(SidebarContext);
  const { state: { open } } = sidebarContext;

  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <Layout>
      <S.Container>
          <S.TopDetails open={open}>
            <S.TopFirstLine>
              <S.TopTitle>Information</S.TopTitle>
              <S.EditButton>Edit</S.EditButton>
            </S.TopFirstLine>
            <S.TopSecondLine>
                <S.TopImage src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
                <S.TopDetailsItems>
                  <S.TopDetailsTitle>Jane Doe</S.TopDetailsTitle>
                  <S.TopDetailsItem><S.TopDetailsItemKey>Email:</S.TopDetailsItemKey>&nbsp;jane@mail.com</S.TopDetailsItem>
                  <S.TopDetailsItem><S.TopDetailsItemKey>Phone:</S.TopDetailsItemKey>&nbsp;(11)90000-0000</S.TopDetailsItem>
                  <S.TopDetailsItem><S.TopDetailsItemKey>Address:</S.TopDetailsItemKey>&nbsp;Elton St. 234 Garden Yd. New York</S.TopDetailsItem>
                  <S.TopDetailsItem><S.TopDetailsItemKey>Country:</S.TopDetailsItemKey>&nbsp;USA</S.TopDetailsItem>
                </S.TopDetailsItems>
            </S.TopSecondLine>
          </S.TopDetails>
          <S.TopChart open={open}>
            <Chart aspect={isMobile ? 1/1 : 3/1} title='Users Transactions (Last 6 months)'/>
          </S.TopChart>
          <S.Bottom open={open}>
            <S.BottomTable>
              <TableList title='Last Users Transactions'/>
            </S.BottomTable>
          </S.Bottom>
      </S.Container>
    </Layout>
  )
}

export default Single