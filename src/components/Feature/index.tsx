import { MoreVert, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import { Bottom, BottomTitle, BottomAmount, Container, Top, TopTitle, FeatureChart, BottomDesc, BottomSummary, BottomSummaryItem, BottomSummaryItemResult, BottomSummaryItemResultAmount, BottomSummaryItemTitle } from './styles'

const Feature = ({status}: any) => {
  return (
    <Container>
      <Top>
        <TopTitle>Total Revenue</TopTitle>
        <MoreVert fontSize='small'/>
      </Top>
      <Bottom>
        <FeatureChart>
          <CircularProgressbar value={70} text='70%' strokeWidth={2}/>
        </FeatureChart>
        <BottomTitle>Total sales made today</BottomTitle>
        <BottomAmount>R$400</BottomAmount>
        <BottomDesc>Previous transactions processing. Last payments not be included.</BottomDesc>
        <BottomSummary>
          <BottomSummaryItem>
            <BottomSummaryItemTitle>Target</BottomSummaryItemTitle>
            <BottomSummaryItemResult status='negative'>
              {false ? <KeyboardArrowUp fontSize='small' /> : <KeyboardArrowDown fontSize='small' />}
              <BottomSummaryItemResultAmount>R$12.4k</BottomSummaryItemResultAmount>
            </BottomSummaryItemResult>
          </BottomSummaryItem>
          <BottomSummaryItem>
            <BottomSummaryItemTitle>Last week</BottomSummaryItemTitle>
            <BottomSummaryItemResult status='positive'>
              {true ? <KeyboardArrowUp fontSize='small' /> : <KeyboardArrowDown fontSize='small' />}
              <BottomSummaryItemResultAmount>R$2.24k</BottomSummaryItemResultAmount>
            </BottomSummaryItemResult>
          </BottomSummaryItem>
          <BottomSummaryItem>
            <BottomSummaryItemTitle>Month</BottomSummaryItemTitle>
            <BottomSummaryItemResult status='positive'>
              {true ? <KeyboardArrowUp fontSize='small' /> : <KeyboardArrowDown fontSize='small' />}
              <BottomSummaryItemResultAmount>R$24.6k</BottomSummaryItemResultAmount>
            </BottomSummaryItemResult>
          </BottomSummaryItem>
        </BottomSummary>
      </Bottom>
    </Container>
  )
}

export default Feature