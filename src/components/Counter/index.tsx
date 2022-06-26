import { CounterContainer } from './styles';

interface ICounter {
    total: number;
}

const Counter = ({ total = 0 }: ICounter) => {
  return (
    <CounterContainer>{total}</CounterContainer>
  )
}

export default Counter