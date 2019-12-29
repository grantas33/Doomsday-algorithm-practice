import { useState, useEffect } from 'react';
import {storage} from "../services/storage";

export function useHighScoreState() {
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    storage.getHighScore().then(score => {
      setHighScore(score)
    })
  }, []);

  useEffect(() => {
    storage.setHighScore(highScore)
  }, [highScore]);

  return [highScore, setHighScore];
}