import { useCallback, useEffect, useState } from 'react';

export default function useTypeWriter(
  startDelay: number,
  coolOffBtwSentences: number,
  sentences: string[],
) {
  const [textContent, setTextContent] = useState('');

  const startTyping = useCallback(() => {
    let currentSentenceIndex = 0;
    let currentCharacterIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100; // Adjust typing speed as needed

    const typingInterval = setInterval(() => {
      const currentSentence = sentences[currentSentenceIndex];
      if (!currentSentence) return;

      const textToShow = isDeleting
        ? currentSentence.substring(0, currentCharacterIndex - 1)
        : currentSentence.substring(0, currentCharacterIndex + 1);

      setTextContent(textToShow);

      if (!isDeleting && textToShow === currentSentence) {
        // Wait for coolOffBtwSentences before starting deleting animation
        setTimeout(() => {
          isDeleting = true;
        }, coolOffBtwSentences);
      } else if (isDeleting && textToShow === '') {
        isDeleting = false;
        currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
      }

      currentCharacterIndex += isDeleting ? -1 : 1;
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [coolOffBtwSentences, sentences]);

  useEffect(() => {
    if (sentences.length === 0) return;

    const typingTimeout = setTimeout(startTyping, startDelay);

    return () => clearTimeout(typingTimeout);
  }, [startDelay, startTyping, sentences]);

  return textContent;
}
