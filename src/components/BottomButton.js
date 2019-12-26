import React, {useState} from 'react';
import {Box, Button} from "grommet";
import useDidUpdate from "../functions/useDidUpdate";

export default function BottomButton(props) {

  const [fullyHidden, setFullyHidden] = useState(true);

  useDidUpdate(() => {
    setFullyHidden(false)
  }, [props.isVisible]);

  return <div>
  <Box
    key={props.isVisible}
    align={"end"}
    margin={{bottom: "large", right: "large"}}
    animation={props.isVisible ? {"type": "fadeIn"} : {"type": "fadeOut", "duration": 200}}
  >
    <Button
      label={props.label}
      onClick={props.isVisible ? props.onClick : () => {}}
      style={{visibility: (fullyHidden ? "hidden" : "visible")}}
    />
  </Box>
  </div>
}
