import React, {useState} from 'react';
import {Box, Button, Layer} from "grommet";
import useDidUpdate from "../functions/useDidUpdate";
import ExplanationModal from "./ExplanationModal";

export default function FooterBar(props) {

  const [fullyHidden, setFullyHidden] = useState(true);
  const [showExplanation, setShowExplanation] = React.useState(false);

  useDidUpdate(() => {
    setFullyHidden(false)
  }, [props.isVisible]);

  return <Box
    key={props.isVisible}
    direction={"row"}
    justify={"between"}
    margin={{bottom: "large", right: "large", left: "large"}}
    animation={props.isVisible ? {"type": "fadeIn"} : {"type": "fadeOut", "duration": 200}}
  >
    <Button
        label={"Explanation"}
        onClick={props.isVisible ? () => setShowExplanation(true) : () => {}}
        style={{visibility: (fullyHidden ? "hidden" : "visible")}}
    />
    {showExplanation && (
        <Layer
            onEsc={() => setShowExplanation(false)}
            onClickOutside={() => setShowExplanation(false)}
            margin={"medium"}
            className={"modal"}
            responsive={false}
        >
          <ExplanationModal currentDay={props.currentDay}/>
        </Layer>
    )}
    <Button
      label={"Continue"}
      onClick={props.isVisible ? props.onContinueClick : () => {}}
      style={{visibility: (fullyHidden ? "hidden" : "visible")}}
    />
  </Box>
}
