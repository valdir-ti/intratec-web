import {
  KeyboardArrowDown,
  KeyboardArrowUp,
} from '@mui/icons-material';

import * as S from './styles'

type DataType = {
  title: string;
  type: string;
  isMoney: boolean;
  amount: number;
  link: string;
  status: string;
  iconColor: string;
  fontIconColor: string;
  icon: React.ReactNode;
}
interface IWidget {
  data: DataType;
}

const Widget = ({ data }: IWidget) => {
  const { title, type, isMoney, amount, link, status, iconColor, fontIconColor, icon } = data;
  return (
    <S.WidgetContainer>
      <S.Left>
        <S.LeftTitle>{title}</S.LeftTitle>
        <S.LeftCounter>{isMoney && 'R$'} {amount}</S.LeftCounter>
        <S.LeftLink>
          <S.LinkStyled to={type}>
            {link}
          </S.LinkStyled>
        </S.LeftLink>
      </S.Left>
      <S.Right>
        <S.RightPercent status={status}>
          {status === 'positive' ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          20%
        </S.RightPercent>
        <S.RightIconWrapper color={iconColor} fontColor={fontIconColor}>
          {icon}
        </S.RightIconWrapper>
      </S.Right>
    </S.WidgetContainer>
  )
}

export default Widget