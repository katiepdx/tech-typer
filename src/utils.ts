export const getRandomPrompt = (prompts: Array<string>): string => {
  const randomIndex = Math.floor(Math.random() * prompts.length)
  const prompt = prompts[randomIndex]

  // remove extra lines from start/end of prompt if exists
  const randomPrompt = checkForNewLines(prompt)

  return randomPrompt
}

const checkForNewLines = (prompt: string) => {
  const splitPrompt = prompt.split('\n')

  if (splitPrompt[0] === '') splitPrompt.shift();

  const lastIndex = splitPrompt.length - 1
  if (splitPrompt[lastIndex] === '') splitPrompt.pop();

  const randomPrompt = splitPrompt.join('\n')
  return randomPrompt
}
