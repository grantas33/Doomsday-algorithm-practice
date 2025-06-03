import React, {useState} from 'react';
import {Box, Button, Layer} from "grommet";
import useDidUpdate from "../functions/useDidUpdate";
import ExplanationModal from "./ExplanationModal";
import SettingsModal from "./SettingsModal"; // Import SettingsModal

export default function FooterBar(props) {

  const [fullyHidden, setFullyHidden] = useState(true);
  const [showExplanation, setShowExplanation] = React.useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false); // Add state for SettingsModal

  useDidUpdate(() => {
    setFullyHidden(false)
  }, [props.isVisible]);

  return <Box
    key={props.isVisible}
    direction={"row"}
    justify={"between"}
    margin={{bottom: "small", right: "large", left: "large"}}
    animation={props.isVisible ? {"type": "fadeIn"} : {"type": "fadeOut", "duration": 200}}
  >
    <Box direction="row" gap="small"> {/* Added Box to group buttons */}
      <Button
          label={"Explanation"}
          onClick={props.isVisible ? () => setShowExplanation(true) : () => {}}
          style={{visibility: (fullyHidden ? "hidden" : "visible")}}
      />
      <Button
          label={"Settings"} // Add Settings button
          onClick={() => setShowSettingsModal(true)}
      />
    </Box>
    {showExplanation && (
        <Layer
            onEsc={() => setShowExplanation(false)}
            onClickOutside={() => setShowExplanation(false)}
            margin={"medium"}
            className={"modal"}
            responsive={false}
            full="horizontal"
        >
          <ExplanationModal currentDay={props.currentDay}/>
        </Layer>
    )}
    {/* Conditionally render SettingsModal */}
    {showSettingsModal && <SettingsModal
      onClose={() => setShowSettingsModal(false)}
      dateFormat={props.dateFormat} // Pass dateFormat prop
      onDateFormatChange={props.onDateFormatChange} // Pass onDateFormatChange prop
    />}
    <Button
      label={"Continue"}
      onClick={props.isVisible ? props.onContinueClick : () => {}}
      style={{visibility: (fullyHidden ? "hidden" : "visible")}}
    />
  </Box>
}
