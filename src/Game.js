import React, {useEffect, useRef, useState} from 'react';
import {Box, Heading, Text} from 'grommet';
import FooterBar from "./components/FooterBar";
import DayButtonGrid from "./components/DayButtonGrid";
import {useHighScoreState} from "./functions/useHighScoreState";
import GitHubButton from 'react-github-btn'
const moment = require('moment');
const momentRandom = require('moment-random');

function Game(props) {

  const generateRandomDay = () => momentRandom(
    moment(props.endDate),
    moment(props.startDate)
  );

  const parseDateToWeekDayNumber = (date) => Number(date.format('d'));

  let initialDay = generateRandomDay();
  const [currentDay, setCurrentDay] = useState(initialDay.format("Y-MM-DD"));
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useHighScoreState();
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
    setCurrentDay(nextDay.format("Y-MM-DD"));
    if (selectedDayOfWeek === expectedDayOfWeek && timeLeft > 0) {
      setScore(score => score + 1);
      if (score + 1 > highScore) setHighScore(score + 1);
    } else {
      setScore(0)
    }
    setSelectedDayOfWeek(undefined);
    setExpectedDayOfWeek(parseDateToWeekDayNumber(nextDay));
    setTimeLeft(10)
  };

  return (
      <Box fill background={'brand'} direction={'column'} overflow={'hidden'}>
        <Box direction={"column"} flex={"grow"} style={{maxWidth: 800, width: "100%"}} alignSelf={'center'}>
          <Box
            direction={"row"}
            justify={"between"}
            margin={{top: "medium", right: "medium", left: "medium"}}
          >
            <Text size={"xlarge"}>Highscore: {highScore}</Text>
            <Text size={"xlarge"}>Score: {score}</Text>
          </Box>
          <Box
            key={currentDay}
            flex={{grow: 1}}
            align={'center'}
            justify={'center'}
            animation={{"type":"fadeIn"}}
          >
            <Box animation={(timeLeft <= 3 && timeLeft > 0) ? {type: "pulse", size: "large", duration: 500} : {}} flex={{grow: 1}}>
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
          <FooterBar onContinueClick={startNewRound} isVisible={selectedDayOfWeek !== undefined} currentDay={currentDay}/>
          <Box
              direction={"row"}
              justify={"end"}
              margin={{right: "large", left: "large"}}
          >
            <GitHubButton href="https://github.com/grantas33/Doomsday-algorithm-practice" data-icon="octicon-star" data-show-count="true" aria-label="Star me on GitHub">Star</GitHubButton>
          </Box>
        </Box>
      </Box>
  );
}

export default Game;
