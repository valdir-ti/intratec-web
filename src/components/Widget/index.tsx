import {
  KeyboardArrowDown,
  KeyboardArrowUp,
} from '@mui/icons-material';

import { Left, Right, WidgetContainer, LeftTitle, LeftCounter, LeftLink, RightPercent, RightIconWrapper } from './styles'

type DataType = {
  title: string;
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

  return (
    <WidgetContainer>
      <Left>
        <LeftTitle>{data.title}</LeftTitle>
        <LeftCounter>{data.isMoney && 'R$'} {data.amount}</LeftCounter>
        <LeftLink>{data.link}</LeftLink>
      </Left>
      <Right>
        <RightPercent status={data.status}>
          {data.status === 'positive' ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          20%
        </RightPercent>
        <RightIconWrapper color={data.iconColor} fontColor={data.fontIconColor}>
          {data.icon}
        </RightIconWrapper>
      </Right>
    </WidgetContainer>
  )
}

export default Widget