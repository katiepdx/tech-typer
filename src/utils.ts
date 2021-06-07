export const getRandomPrompt = (prompts: Array<string>): string => {
  const randomIndex = Math.floor(Math.random() * prompts.length)
  const randomPrompt = prompts[randomIndex]

  return randomPrompt
}
