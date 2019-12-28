import React, {useEffect, useRef, useState} from 'react';
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
  const [timeLeft, setTimeLeft] = useState(10);
  let timer = useRef();

  useEffect(() => {
    if (timeLeft > 0 && selectedDayOfWeek === undefined) {
      timer.current = setTimeout(() => {
        setTimeLeft(t => t - 1)
      }, 1000)
    } else {
      clearTimeout(timer.current)
    }
  }, [timeLeft, selectedDayOfWeek]);

  const startNewRound = () => {
    let nextDay = generateRandomDay();
    setCurrentDay(nextDay.format(DATE_FORMAT));
    setScore((selectedDayOfWeek === expectedDayOfWeek && timeLeft > 0) ? score => score + 1 : 0);
    setSelectedDayOfWeek(undefined);
    setExpectedDayOfWeek(parseDateToWeekDayNumber(nextDay));
    setTimeLeft(10)
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
            flex={{grow: 1}}
            align={'center'}
            justify={'center'}
            animation={{"type":"fadeIn"}}
          >
            <Box animation={(timeLeft <= 3 && timeLeft > 0) ? {type: "pulse", duration: 500} : {}} flex={{grow: 1}}>
              <Heading size={"large"} level={'1'} color={timeLeft === 0 && 'status-warning'}>
                {timeLeft}
              </Heading>
            </Box>
            <Box flex={{grow: 4}}>
              <Heading size={"large"} level={'1'}>
                {currentDay}
              </Heading>
            </Box>
          </Box>
          <DayButtonGrid selectedDayOfWeek={selectedDayOfWeek} setSelectedDayOfWeek={setSelectedDayOfWeek} expectedDayOfWeek={expectedDayOfWeek}/>
          <BottomButton label={"Continue"} onClick={startNewRound} isVisible={selectedDayOfWeek !== undefined}/>
        </Box>
      </Box>
  );
}

export default Game;
