import Layout from '../Layout';
import Chart from '../../components/Chart';
import Widget from '../../components/Widget';
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

const Home = () => {

  return (
    <Layout>
      <Container>
          <ContentOne>
            <Widget item='users'/>
          </ContentOne>
          <ContentTwo>
            <Widget item='products' />
          </ContentTwo>
          <ContentThree>
            <Widget item='companies' />
          </ContentThree>
          <ContentFour>
            <Widget item='balance' />
          </ContentFour>
           <FeatureStyled>
            <Feature />
          </FeatureStyled>
          <ChartStyled>
            <Chart aspect={2 / 1} title='Last 6 months (Revenue)'/>
          </ChartStyled>
          <ListStyled>
            <TableList title='Last Transactions'/>
          </ListStyled>
      </Container>
    </Layout>
  );
}

export default Home
