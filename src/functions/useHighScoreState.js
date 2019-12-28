import { useState, useEffect } from 'react';
import {storage} from "../services/storage";

export function useHighScoreState() {
  const [highScore, setHighScore] = useState(storage.getHighScore());

  useEffect(() => {
    storage.setHighScore(highScore)
  }, [highScore]);

  return [highScore, setHighScore];
}