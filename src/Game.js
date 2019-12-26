import React, {useState} from 'react';
import {Box, Heading, Text} from 'grommet';
import BottomButton from "./components/BottomButton";
import DayButtonGrid from "./components/DayButtonGrid";
const moment = require('moment');
const momentRandom = require('moment-random');

const DATE_FORMAT = "YYYY-MM-DD";

function Game(props) {

  const generateRandomDay = () => momentRandom(
    moment(props.endDate, DATE_FORMAT),
    moment(props.startDate, DATE_FORMAT)
  );

  const parseDateToWeekDayNumber = (date) => Number(date.format('d'));

  let initialDay = generateRandomDay();
  const [currentDay, setCurrentDay] = useState(initialDay.format(DATE_FORMAT));
  const [score, setScore] = useState(0);
  const [selectedDayOfWeek, setSelectedDayOfWeek] = useState();
  const [expectedDayOfWeek, setExpectedDayOfWeek] = useState(parseDateToWeekDayNumber(initialDay));

  const startNewRound = () => {
    let nextDay = generateRandomDay();
    setCurrentDay(nextDay.format(DATE_FORMAT));
    setScore(selectedDayOfWeek === expectedDayOfWeek ? score => score + 1 : 0);
    setSelectedDayOfWeek(undefined);
    setExpectedDayOfWeek(parseDateToWeekDayNumber(nextDay))
  };

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
            key={currentDay}
            flex={'grow'}
            align={'center'}
            justify={'center'}
            animation={{"type":"fadeIn"}}
          >
            <Heading size={"large"} level={'1'}>
              {currentDay}
            </Heading>
          </Box>
          <DayButtonGrid selectedDayOfWeek={selectedDayOfWeek} setSelectedDayOfWeek={setSelectedDayOfWeek} expectedDayOfWeek={expectedDayOfWeek}/>
          <BottomButton label={"Continue"} onClick={startNewRound} isVisible={selectedDayOfWeek !== undefined}/>
        </Box>
      </Box>
  );
}

export default Game;
