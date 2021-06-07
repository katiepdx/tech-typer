import React, { useState, useEffect } from 'react'
import { getRandomPrompt } from '../utils'
import { prompts } from '../prompts'

const Game: React.FC = () => {
  const [matchState, setMatchState] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')
  const [prompt, setPrompt] = useState<string>('')
  const [score, setScore] = useState<number>(0)

  useEffect(() => {
    if (inputValue === prompt) {
      if (prompt === '' && score === 0) {
        const randomPrompt = getRandomPrompt(prompts)
        return setPrompt(randomPrompt)
      }

      setScore(score => score + 1)
      setInputValue('')
      setMatchState(true)
      setTimeout(() => setMatchState(false), 1500)
      setPrompt(getRandomPrompt(prompts))
    }
  }, [prompt, inputValue, score])

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <div className="game">
      <p>SCORE: {score}</p>
      <section>PROMPT: <pre>{prompt}</pre></section>

      <pre>{inputValue}</pre>

      <textarea name="typing-box" onChange={handleInputChange} value={inputValue} />

      <p>{matchState && 'MATCH!'}</p>
    </div>
  )
}

export default Game
