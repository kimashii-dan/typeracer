import { useState, useEffect, ChangeEvent } from "react";
import "../App.css";

import Stats from "../components/Stats";
import ProgressBar from "../components/ProgressBar";
import Text from "../components/Text";
import Input from "../components/Input";
const initial: string =
  "Begin by copying your existing CSS code that you want to convert to Tailwind CSS. Make sure to include all the CSS rules you want to convert.";
const splitted = initial.split(" ").map((word) => [...word, " "]);
console.log(splitted);
console.log(splitted.flat());

export default function Game() {
  const [input, setInput] = useState<string>("");
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [words, setWords] = useState<number>(0);
  const [isTyping, setTyping] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(90);
  const [wpm, setWPM] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  const totalCharacters = splitted.flat().length - 1;

  useEffect(() => {
    let timer: number;
    if (isTyping && seconds > 0) {
      timer = setInterval(() => setSeconds((prev) => prev - 1), 1000);
    } else if (seconds === 0) {
      finish();
    }
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTyping, seconds]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const currentInput = e.target.value;
    const currentWord = splitted[wordIndex];
    setInput(currentInput);

    if (!isTyping) {
      setTyping(true);
    }

    if (
      currentInput.length < input.length &&
      currentInput === currentWord.slice(0, charIndex - 1).join("")
    ) {
      setCharIndex((prev) => prev - 1);
    } else {
      if (currentInput[charIndex] === currentWord[charIndex]) {
        if (currentInput.length === currentWord.length) {
          nextWord();
        } else {
          nextChar();
          if (
            currentInput.length === currentWord.length - 1 &&
            wordIndex + 1 === splitted.length
          ) {
            nextWord();
            finish();
          }
        }
      }
    }

    const correctlyTypedCharacters =
      splitted.slice(0, wordIndex).flat().length + charIndex + 1;
    setProgress(
      Math.min((correctlyTypedCharacters / totalCharacters) * 100, 93.5)
    );
    console.log(progress);
  };

  const restart = (): void => {
    setWords(0);
    setWordIndex(0);
    setCharIndex(0);
    setSeconds(90);
    setInput("");
    setTyping(false);
    setWPM(0);
    setProgress(0);
  };

  const finish = (): void => {
    setTyping(false);
    calculateWPM();
    setInput("");
  };

  const nextWord = (): void => {
    setWordIndex((prevIndex) => prevIndex + 1);
    setCharIndex(0);
    setInput("");
    setWords((prev) => prev + 1);
  };

  const nextChar = (): void => {
    setCharIndex((prev) => prev + 1);
  };

  const calculateWPM = (): void => {
    const totalTime = (90 - seconds) / 60;
    console.log(words, totalTime);
    setWPM(Math.floor(words / totalTime));
  };

  return (
    <div className="mx-[auto] my-[0] max-w-[1200px] h-screen flex justify-center items-center ">
      <div className="w-[1200px] flex text-[white] flex-col gap-[65px] px-[25px] py-[50px]">
        {/* stats */}
        <Stats isTyping={isTyping} words={words} seconds={seconds} wpm={wpm} />

        {/* progress bar */}
        <ProgressBar progress={progress} />

        {/* text */}
        <Text splitted={splitted} wordIndex={wordIndex} charIndex={charIndex} />

        {/* input */}
        <Input
          input={input}
          handleChange={handleChange}
          isTyping={isTyping}
          seconds={seconds}
          words={words}
          restart={restart}
        />
      </div>
    </div>
  );
}
