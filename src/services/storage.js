const getHighScore = () => localStorage.getItem('highScore') || 0;
const setHighScore = (score) => {
  localStorage.setItem('highScore', score)
};

export const storage = {
  getHighScore,
  setHighScore
};