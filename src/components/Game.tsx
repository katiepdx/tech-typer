import React from 'react'
import { useGame } from '../hooks/useGame'

const Game: React.FC = (): JSX.Element => {
  const { matchState, inputValue, prompt, score, setInputValue } = useGame()

  return (
    <div className="game">
      <p>SCORE: {score}</p>
      <section>PROMPT: <pre>{prompt}</pre></section>

      <pre>{inputValue}</pre>

      <textarea name="typing-box" onChange={e => setInputValue(e.target.value)} value={inputValue} />

      <p>{matchState && 'MATCH!'}</p>
    </div>
  )
}

export default Game
