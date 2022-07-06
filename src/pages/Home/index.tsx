import { useContext } from 'react';

import {
  PersonOutline,
  ShoppingCart,
  MonetizationOn,
  AccountBalanceWallet
} from '@mui/icons-material';

import Widget from '../../components/Widget';
import Chart from '../../components/Chart';
import Feature from '../../components/Feature';
import TableList from '../../components/Table';

import {
  Container,
  Chart as ChartStyled,
  Feature as FeatureStyled,
  ContentOne,
  ContentTwo,
  ContentThree,
  ContentFour,
  List as ListStyled,
} from './styles'

import Layout from '../Layout';

const Home = () => {

  const dataWidget = [
    {
      type: 'users',
      title: 'USERS',
      isMoney: false,
      amount: 135,
      link: 'See all users',
      icon: <PersonOutline />,
      iconColor: 'rgba(255,0,0,0.2)',
      fontIconColor: 'crimson',
      status: 'positive',
    },
    {
      type: 'orders',
      title: 'ORDERS',
      amount: 14,
      isMoney: false,
      link: 'View all orders',
      icon: <ShoppingCart />,
      iconColor: 'rgba(218,165,32,0.2)',
      fontIconColor: 'goldenrod',
      status: 'negative',
    },
    {
      type: 'earnings',
      title: 'EARNINGS',
      amount: 56,
      isMoney: true,
      link: 'View net earnings',
      icon: <MonetizationOn />,
      iconColor: 'rgba(0,128,0,0.2)',
      fontIconColor: 'green',
      status: 'negative',
    },
    {
      type: 'balance',
      title: 'BALANCE',
      amount: 156,
      isMoney: true,
      link: 'See details',
      icon: <AccountBalanceWallet />,
      iconColor: 'rgba(128,0,128,0.2)',
      fontIconColor: 'purple',
      status: 'positive',
    },
  ]

  return (
    <Layout>
      <Container>
          <ContentOne>
            <Widget data={dataWidget[0]}/>
          </ContentOne>
          <ContentTwo>
            <Widget data={dataWidget[1]}/>
          </ContentTwo>
          <ContentThree>
            <Widget data={dataWidget[2]}/>
          </ContentThree>
          <ContentFour>
            <Widget data={dataWidget[3]}/>
          </ContentFour>
           <FeatureStyled>
            <Feature />
          </FeatureStyled>
          <ChartStyled>
            <Chart />
          </ChartStyled>
          <ListStyled>
            <TableList title='Last Transactions'/>
          </ListStyled>
      </Container>
    </Layout>
  );
}

export default Home
