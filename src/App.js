import React from 'react';
import {Box, Button, Grommet, Heading, Text} from 'grommet';

const theme = {
  global: {
    font: {
      family: 'Solway',
      size: '18px',
      height: '20px',
    },
  },
};

const DayButton = (props) =>
  <Box flex={{'grow': 1}} basis={'xxsmall'} align={'center'} justify={'center'}>
    <Button>
        {props.title}
    </Button>
  </Box>;

function App() {
  return (
    <Grommet theme={theme} full>
      <Box fill background={'brand'} direction={'column'} overflow={'hidden'}>
        <Box
          flex={'grow'}
          align={'center'}
          justify={'center'}
          animation={{"type":"fadeIn"}}
        >
          <Heading size={'large'}>2012-05-26</Heading>
        </Box>
        <Box
          flex='grow'
          direction={'column'}
          align={'space-around'}
          justify={'center'}
        >
          <Box
            flex={'grow'}
            direction={"row"}
            align={'stretch'}
            wrap={true}
          >
            <DayButton title={'Monday'}/>
            <DayButton title={'Tuesday'}/>
            <DayButton title={'Wednesday'}/>
          </Box>
          <Box
            flex={'grow'}
            direction={"row"}
            align={'stretch'}
            wrap={true}
          >
            <DayButton title={'Thursday'}/>
            <DayButton title={'Friday'}/>
            <DayButton title={'Saturday'}/>
          </Box>
          <Box
            flex={'grow'}
            direction={"row"}
            align={'stretch'}
            wrap={true}
          >
            <DayButton title={'Sunday'}/>
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
