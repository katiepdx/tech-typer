import { useState, useEffect } from 'react';
import { getRandomPrompt } from '../utils';
import { prompts } from '../prompts';

export const useGame = () => {
  const [matchState, setMatchState] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [prompt, setPrompt] = useState<string>('');
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    if (inputValue === prompt) {
      if (prompt === '' && score === 0) {
        const randomPrompt = getRandomPrompt(prompts);
        return setPrompt(randomPrompt);
      }

      setScore(score => score + 1);
      setInputValue('');
      setMatchState(true);
      setTimeout(() => setMatchState(false), 1500);
      setPrompt(getRandomPrompt(prompts));
    }
  }, [prompt, inputValue, score]);

  return {
    matchState,
    inputValue,
    prompt,
    score,
    setInputValue
  };
};
