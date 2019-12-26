import {Box} from "grommet";
import DayButton from "./DayButton";
import React from "react";

export default function DayButtonGrid(props) {

  let selected = props.selectedDayOfWeek;
  let setSelected = props.setSelectedDayOfWeek;
  let expected = props.expectedDayOfWeek;

  return <Box
    flex='grow'
    direction={'column'}
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
      <DayButton title={'Monday'} number={1} selectedDayOfWeek={selected} setSelectedDayOfWeek={setSelected} expectedDayOfWeek={expected}/>
      <DayButton title={'Tuesday'} number={2} selectedDayOfWeek={selected} setSelectedDayOfWeek={setSelected} expectedDayOfWeek={expected}/>
      <DayButton title={'Wednesday'} number={3} selectedDayOfWeek={selected} setSelectedDayOfWeek={setSelected} expectedDayOfWeek={expected}/>
    </Box>
    <Box
      flex={'grow'}
      direction={"row"}
      align={'stretch'}
      wrap={true}
    >
      <DayButton title={'Thursday'} number={4} selectedDayOfWeek={selected} setSelectedDayOfWeek={setSelected} expectedDayOfWeek={expected}/>
      <DayButton title={'Friday'} number={5} selectedDayOfWeek={selected} setSelectedDayOfWeek={setSelected} expectedDayOfWeek={expected}/>
      <DayButton title={'Saturday'} number={6} selectedDayOfWeek={selected} setSelectedDayOfWeek={setSelected} expectedDayOfWeek={expected}/>
    </Box>
    <Box
      flex={'grow'}
      direction={"row"}
      align={'stretch'}
      wrap={true}
    >
      <DayButton />
      <DayButton title={'Sunday'} number={0} selectedDayOfWeek={selected} setSelectedDayOfWeek={setSelected} expectedDayOfWeek={expected}/>
      <DayButton />
    </Box>
  </Box>
}
