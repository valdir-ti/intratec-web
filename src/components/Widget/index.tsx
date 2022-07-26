import { useEffect, useState } from 'react';
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  PersonOutline,
  MonetizationOn,
  AccountBalanceWallet,
  Inventory
} from '@mui/icons-material';

import { db } from '../../firebase';
import { collection, getDocs, query, where } from "firebase/firestore";

import * as S from './styles'

interface IWidget {
  item: string;
}

const Widget = ({ item }: IWidget) => {
  const [total, setTotal] = useState(0)
  let data;

  useEffect(() => {
    const fetchData = async () => {
      const activeItems = query(
        collection(db, item),
        where('isActive', '==', true)
      )
      const Items = await getDocs(activeItems)
      setTotal(Items.docs.length)
    }
    fetchData()
  }, [item]);

  switch (item) {
    case 'users':
      data = {
        title: 'USERS',
        isMoney: false,
        link: 'See all users',
        icon: <PersonOutline />,
        iconColor: 'rgba(255,0,0,0.2)',
        fontIconColor: 'crimson',
        status: 'positive',
      }
    break;
    case 'products':
      data = {
        title: 'PRODUCTS',
        isMoney: false,
        link: 'View all products',
        icon: <Inventory />,
        iconColor: 'rgba(218,165,32,0.2)',
        fontIconColor: 'goldenrod',
        status: 'negative',
      }
    break;
    case 'earnings':
      data = {
        title: 'EARNINGS',
        isMoney: true,
        link: 'View net earnings',
        icon: <MonetizationOn />,
        iconColor: 'rgba(0,128,0,0.2)',
        fontIconColor: 'green',
        status: 'negative',
      }
    break;
    case 'balance':
      data = {
        title: 'BALANCE',
        isMoney: true,
        link: 'See details',
        icon: <AccountBalanceWallet />,
        iconColor: 'rgba(128,0,128,0.2)',
        fontIconColor: 'purple',
        status: 'positive',
      }
    break;
    default:
      break;
  }


  return (
    <S.WidgetContainer>
      <S.Left>
        <S.LeftTitle>{data?.title}</S.LeftTitle>
        <S.LeftCounter>{data?.isMoney && 'R$'} {total}</S.LeftCounter>
        <S.LeftLink>
          <S.LinkStyled to={item}>
            {data?.link}
          </S.LinkStyled>
        </S.LeftLink>
      </S.Left>
      <S.Right>
        <S.RightPercent status={data?.status}>
          {data?.status === 'positive' ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          20%
        </S.RightPercent>
        <S.RightIconWrapper color={data?.iconColor} fontColor={data?.fontIconColor}>
          {data?.icon}
        </S.RightIconWrapper>
      </S.Right>
    </S.WidgetContainer>
  )
}

export default Widget