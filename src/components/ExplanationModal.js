import React, {Fragment} from 'react';
import {Box, Heading, Text} from "grommet";
import * as moment from "moment";

const centuryIndexMap = {18: 5, 19: 3, 20: 2, 21: 0};
const doomsdaysForMonth = {1: "03", 2: "14", 3: "07", 4: "04", 5: "09", 6: "06", 7: "11", 8: "08", 9: "05", 10: "10", 11: "07", 12: "12"};
const doomsdaysForMonthInLeapYear = {...doomsdaysForMonth, 1: "04", 2: "15"};

export default function ExplanationModal(props) {

  let day = moment(props.currentDay);

  let centuryIndex = centuryIndexMap[day.format("Y").substring(0, 2)];
  let year = Number(day.format("YY"));
  let yearAfter1Step = year % 2 === 1 ? (year + 11) : year;
  let yearAfter2Step = yearAfter1Step / 2;
  let yearAfter3Step = yearAfter2Step % 2 === 1 ? yearAfter2Step + 11 : yearAfter2Step;
  let nearestMultiple = yearAfter3Step % 7 === 0 ?  yearAfter3Step : yearAfter3Step + 7 - (yearAfter3Step % 7);
  let weekDay = (nearestMultiple - yearAfter3Step + centuryIndex) % 7;
  let doomsday = day.isLeapYear() ?
      `${day.format("MM-")}${doomsdaysForMonthInLeapYear[day.format("M")]}` :
      `${day.format("MM-")}${doomsdaysForMonth[day.format("M")]}`;

  let dayNumber = Number(day.format("D"));
  let doomsdayNumber = Number(doomsday.substring(3));
  let doomsdayToDayChain = [];

  while (Math.abs(dayNumber - doomsdayNumber) > 6) {
    doomsdayToDayChain.push(`${day.format("MM-")}${doomsdayNumber < 10 ? `0${doomsdayNumber}` : doomsdayNumber}`);
    if (doomsdayNumber < dayNumber) doomsdayNumber += 7;
    else doomsdayNumber -= 7;
  }
  if (doomsdayToDayChain.length > 0) {
    doomsdayToDayChain.push(`${day.format("MM-")}${doomsdayNumber < 10 ? `0${doomsdayNumber}` : doomsdayNumber}`);
  }

  return <Box direction={"column"} margin={"medium"}>
    <Heading alignSelf={"center"}>
      <span className={"century"}>{day.format("Y").substring(0, 2)}</span>
      <span className={"year"}>{day.format("YY")}</span>-
      <span className={"month"}>{day.format("MM")}</span>-
      <span className={"day"}>{day.format("DD")}</span>
    </Heading>
    <Text margin={{bottom: "xsmall"}}>
      Century index for the <b className={"century"}>{day.format("Y").substring(0, 2)}</b>00s is <b className={"centuryIndex"}>{centuryIndex}</b>.
    </Text>
    <Text>
      Calculating the year index for year <b className={"year"}>{day.format("YY")}</b> using "odd + 11" method:
    </Text>
    <Box pad={{horizontal: "medium", vertical: 'xsmall'}} margin={{bottom: "xsmall"}}>
      {year !== yearAfter1Step &&
        <Text>{year} is odd, adding 11: {year} + 11 = {yearAfter1Step};</Text>
      }
      <Text>{yearAfter1Step} is even, dividing by 2: {yearAfter1Step} / 2 = { yearAfter2Step === yearAfter3Step ? <><b className={"yearIndex"}>{yearAfter2Step}</b>.</> : `${yearAfter2Step};`}</Text>
      {yearAfter2Step !== yearAfter3Step &&
        <Text>{yearAfter2Step} is odd, adding 11: {yearAfter2Step} + 11 = <b className={"yearIndex"}>{yearAfter3Step}</b>.</Text>
      }
    </Box>
    <Text>The nearest higher multiple of 7 to <b className={"yearIndex"}>{yearAfter3Step}</b> is <b className={"nearestMultiple"}>{nearestMultiple}</b>.</Text>
    <Text margin={{bottom: "xsmall"}}>Calculating the weekday of the doomsday: (<b className={"nearestMultiple"}>{nearestMultiple}</b> - <b className={"yearIndex"}>{yearAfter3Step}</b> + <b className={"centuryIndex"}>{centuryIndex}</b>) mod 7 = <b className={"doomsdayWeekDay"}>{weekDay}</b> <b>({moment.weekdays(weekDay)})</b>.</Text>
    <Text>
      Doomsday for {day.format("MMMM")} is <b>{doomsday.substring(0, 3)}</b><b className={doomsdayToDayChain.length === 0 ? "doomsday" : ""}>{doomsday.substring(3)}</b>{day.isLeapYear() && (day.format("M") < 3) && <b> (leap year)</b>}.
    </Text>
    {doomsdayToDayChain.length > 0 && <>
      <Text>Selecting a doomsday closer to our date:</Text>
      <Box pad={{horizontal: "medium", vertical: 'xsmall'}}>
        <Text>
          {doomsdayToDayChain.map((date, index) => {
            if (index === doomsdayToDayChain.length - 1) return <Fragment key={index}><b>{date.substring(0, 3)}</b><b className={"doomsday"}>{date.substring(3)}</b>.</Fragment>;
            return `${date} -> `
          })}
        </Text>
      </Box>
      </>
    }
    {doomsdayNumber === dayNumber ?
        <Text>Our date matches the doomsday, and it is <b>{day.format("dddd")}</b>.</Text> :
        <Text>Calculating the day of the week: (<b className={"doomsdayWeekDay"}>{weekDay}</b> {dayNumber > doomsdayNumber ?
            <> + (<b className={"day"}>{dayNumber}</b> - <b className={"doomsday"}>{doomsdayNumber}</b>)</> :
            <> - (<b className={"doomsday"}>{doomsdayNumber}</b> - <b className={"day"}>{dayNumber}</b>)</>
        }) mod 7 = <b>{day.format("d")} ({day.format("dddd")})</b>.</Text>
    }
  </Box>
}