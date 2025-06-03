import React from 'react'; // Removed useState
import { Layer, Box, Heading, Select, Button } from 'grommet';
// Removed import { storage } from '../../services/storage';

const dateFormatOptions = ["YYYY-MM-DD", "DD-MM-YYYY", "MM-DD-YYYY"];

// Added dateFormat and onDateFormatChange to props
const SettingsModal = ({ onClose, dateFormat, onDateFormatChange }) => {
  // Removed useState for selectedFormat

  // Simplified handleFormatChange is now inline in Select's onChange
  // const handleFormatChange = (event) => {
  //   const newFormat = event.option;
  //   onDateFormatChange(newFormat); // Call prop instead of setSelectedFormat and storage
  // };

  return (
    <Layer
      onEsc={onClose}
      onClickOutside={onClose}
      responsive={false}
      position="center"
    >
      <Box pad="medium" gap="small" width="medium">
        <Heading level={3} margin="none">
          Date Format Settings
        </Heading>
        <Select
          options={dateFormatOptions}
          value={dateFormat} // Use dateFormat prop
          onChange={(event) => onDateFormatChange(event.option)} // Call onDateFormatChange prop
          aria-label="Select Date Format"
        />
        <Box
          as="footer"
          gap="small"
          direction="row"
          align="center"
          justify="end"
          pad={{ top: 'medium', bottom: 'small' }}
        >
          <Button label="Close" onClick={onClose} primary />
        </Box>
      </Box>
    </Layer>
  );
};

export default SettingsModal;
