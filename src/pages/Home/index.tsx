import { useContext } from 'react';

import {
  PersonOutline,
  ShoppingCart,
  MonetizationOn,
  AccountBalanceWallet
} from '@mui/icons-material';

import List from '../../components/List';
// import Main from '../../components/Main';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Widget from '../../components/Widget';
import Chart from '../../components/Chart';
import Feature from '../../components/Feature';

import { SidebarContext } from '../../context/sidebar/sidebarContext';

import {
  Container,
  Nav,
  Chart as ChartStyled,
  Feature as FeatureStyled,
  Sidebar as SidebarStyled,
  ContentOne,
  ContentTwo,
  ContentThree,
  ContentFour,
  List as ListStyled,
  Footer,
  FooterP
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
      <div>Dashboard</div>
    </Layout>
  );
}

export default Home
