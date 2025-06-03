const getHighScore = () => localStorage.getItem('highScore') || 0;
const setHighScore = (score) => {
  localStorage.setItem('highScore', score)
};

const getDateFormat = () => {
  const dateFormat = localStorage.getItem('dateFormat');
  if (dateFormat === null || dateFormat === undefined) {
    return "YYYY-MM-DD";
  }
  return dateFormat;
};

const setDateFormat = (dateFormat) => {
  localStorage.setItem('dateFormat', dateFormat);
};

export const storage = {
  getHighScore,
  setHighScore,
  getDateFormat,
  setDateFormat
};