export const chatClasses = {
  container: 'chat-container',
  error: 'chat-error',
  loading: 'chat-loading',
  form: 'chat-form',
  inputContainer: 'input-container',
  input: 'chat-input',
  button: 'chat-button',
  streamButton: 'stream-button',
  stopButton: 'stop-button',
} as const;

// Create a type from the values
export type ChatClassName = typeof chatClasses[keyof typeof chatClasses];

// Helper function for combining classes
export const getChatClass = (...classes: (ChatClassName | string)[]) => {
  return classes.join(' ');
};