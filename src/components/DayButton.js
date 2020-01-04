import {Box, Text} from "grommet";
import React from "react";
import moment from "moment";

export default function DayButton(props) {

  const anySelected = props.selectedDayOfWeek !== undefined;

  const isSelectedButFalse =  anySelected &&
    props.selectedDayOfWeek !== props.expectedDayOfWeek &&
    props.number === props.selectedDayOfWeek;

  const isCorrect = anySelected &&
    props.number === props.expectedDayOfWeek;

  return props.number !== undefined ?
    <Box
      flex={{'grow': 1}}
      basis={'xxsmall'}
      align={'center'}
      justify={'center'}
      style={{boxShadow: "none"}}
      animation={(isSelectedButFalse || isCorrect) ? {"type": "zoomIn", "duration": 400} : {}}
      background={isSelectedButFalse ? 'status-error' : (isCorrect ? 'status-ok' : "")}
      onClick={() => {
        if (!anySelected) props.setSelectedDayOfWeek(props.number)
      }}
    >
      <Text size={"large"}>{moment.weekdays(props.number)}</Text>
    </Box> :
    <Box
      flex={{'grow': 1}}
      basis={'xxsmall'}
    />;
}
