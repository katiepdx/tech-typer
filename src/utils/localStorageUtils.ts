const PROMPTS = 'PROMPTS';

export const setPromptsToLocalStorage = (data: Array<string>) => {
  localStorage.setItem(PROMPTS, JSON.stringify(data));
};

export const getPromptsFromLocalStorage = () => {
  const prompts = localStorage.getItem(PROMPTS);

  if (prompts === null) return []

  const parsedPrompts = JSON.parse(prompts)

  return parsedPrompts;
};
