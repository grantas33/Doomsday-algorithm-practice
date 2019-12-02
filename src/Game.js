import React, {useState} from 'react';
import {Box, Button, Heading, Text} from 'grommet';
const moment = require('moment');
const momentRandom = require('moment-random');

function Game(props) {

  let initialDay = momentRandom(
    moment(props.endDate, 'YYYY-MM-DD'),
    moment(props.startDate, 'YYYY-MM-DD'));

  const [currentDay, setCurrentDay] = useState(initialDay.format('YYYY-MM-DD'));
  const [score, setScore] = useState(0);
  const [selectedDayOfWeek, setSelectedDayOfWeek] = useState();
  const [expectedDayOfWeek, setExpectedDayOfWeek] = useState(Number(initialDay.format('d')));

  const DayButton = (props) =>
    <Box
      flex={{'grow': 1}}
      basis={'xxsmall'}
      align={'center'}
      justify={'center'}
      style={{boxShadow: "none"}}
      background={selectedDayOfWeek !== undefined && ((selectedDayOfWeek !== expectedDayOfWeek && props.number === selectedDayOfWeek) ? 'status-error' :
                                        (props.number === expectedDayOfWeek && 'status-ok'))}
      onClick={() => { if (selectedDayOfWeek === undefined) setSelectedDayOfWeek(props.number)}}
    >
      <Text size={"large"}>{props.title}</Text>
    </Box>;

  return (
      <Box fill background={'brand'} direction={'column'} overflow={'hidden'}>
        <Box direction={"column"} flex={"grow"} style={{maxWidth: 800, width: "100%"}} alignSelf={'center'}>
          <Box
            align={"end"}
            margin={{top: "medium", right: "medium"}}
          >
            <Text size={"xlarge"}>Score: {score}</Text>
          </Box>
          <Box
            flex={'grow'}
            align={'center'}
            justify={'center'}
            animation={{"type":"fadeIn"}}
          >
            <Heading size={"large"} level={'1'}>
              {currentDay}
            </Heading>
          </Box>
          <Box
            flex='grow'
            direction={'column'}
            align={'space-around'}
            justify={'center'}
            alignSelf={'center'}
            style={{width: "100%"}}
          >
            <Box
              flex={'grow'}
              direction={"row"}
              align={'stretch'}
              wrap={true}
            >
              <DayButton title={'Monday'} number={0}/>
              <DayButton title={'Tuesday'} number={1}/>
              <DayButton title={'Wednesday'} number={2}/>
            </Box>
            <Box
              flex={'grow'}
              direction={"row"}
              align={'stretch'}
              wrap={true}
            >
              <DayButton title={'Thursday'} number={3}/>
              <DayButton title={'Friday'} number={4}/>
              <DayButton title={'Saturday'} number={5}/>
            </Box>
            <Box
              flex={'grow'}
              direction={"row"}
              align={'stretch'}
              wrap={true}
            >
              <DayButton />
              <DayButton title={'Sunday'} number={6}/>
              <DayButton />
            </Box>
          </Box>
          {selectedDayOfWeek !== undefined ?
            <Box
              align={"end"}
              margin={{bottom: "large", right: "large"}}
              animation={{"type": "fadeIn"}}
            >
              <Button
                label={"Continue"}
              />
            </Box> :
            <Box
              align={"end"}
              margin={{bottom: "large", right: "large"}}
            >
              <Button
                label={"Continue"}
                style={{visibility: 'hidden'}}
              />
            </Box>
          }
        </Box>
      </Box>
  );
}

export default Game;
