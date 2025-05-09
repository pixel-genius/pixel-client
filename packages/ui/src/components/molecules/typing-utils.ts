/**
 * Utility functions for simulating realistic typing behavior
 */

/**
 * Types text into an input element letter by letter with a realistic typing effect
 * @param element The input or textarea element to type into
 * @param text The text to type
 * @param typingSpeed The delay between characters in ms
 * @param onComplete Callback function when typing is complete
 * @returns The interval ID that can be used to clear the typing effect
 */
export const typeLetterByLetter = (
  element: HTMLInputElement | HTMLTextAreaElement,
  text: string,
  typingSpeed: number = 50,
  onComplete?: () => void,
): NodeJS.Timeout => {
  let i = 0;
  const originalValue = element.value;

  // Focus the element first
  element.focus();

  // Set up typing interval
  const typingInterval = setInterval(() => {
    if (i < text.length) {
      // Add the next character to the current value
      element.value = originalValue + text.substring(0, i + 1);

      // Dispatch input event to trigger listeners
      element.dispatchEvent(new Event("input", { bubbles: true }));

      // Move to next character
      i++;
    } else {
      // Typing complete
      clearInterval(typingInterval);

      // Blur the element after typing is complete
      try {
        element.blur();
      } catch (e) {
        // Ignore blur errors
      }

      if (onComplete) {
        onComplete();
      }
    }
  }, typingSpeed);

  // Return the interval ID directly
  return typingInterval;
};
