import React, { useState } from 'react'
import { getPromptsFromLocalStorage, setPromptsToLocalStorage } from '../utils/localStorageUtils'

const AddPrompt = () => {
  const [newPrompt, setNewPrompt] = useState('')
  const [success, setSuccess] = useState(false)

  const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewPrompt(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // get prompts arr from ls
    const LSprompts = getPromptsFromLocalStorage()

    // add prompt to end of arr
    const updatedPrompts = [...LSprompts, newPrompt]

    // set array back to ls
    setPromptsToLocalStorage(updatedPrompts)

    // clear form state
    setNewPrompt('')

    // success
    setSuccess(true)
    setTimeout(() => setSuccess(false), 1000)
  }
  return (
    <div>
      <h1>Add a Prompt</h1>
      <p>{success && 'New Prompt Added!'}</p>
      
      <form onSubmit={handleSubmit}>
        <textarea onChange={handlePromptChange} value={newPrompt} />
        <button>Add Prompt</button>
      </form>
    </div>
  )
}

export default AddPrompt
