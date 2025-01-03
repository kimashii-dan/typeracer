import { ChangeEvent } from "react";

interface InputProps {
  input: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isTyping: boolean;
  seconds: number;
  words: number;
  restart: () => void;
}

export default function Input({
  input,
  handleChange,
  isTyping,
  seconds,
  words,
  restart,
}: InputProps) {
  return (
    <div className="flex justify-between">
      <input
        type="text"
        placeholder="Type the above text here when the race begins..."
        value={input}
        onChange={handleChange}
        disabled={!isTyping && (seconds === 0 || words > 0)}
        className="w-[45%] text-[1.1rem] text-black p-[10px]"
      />

      <button
        onClick={restart}
        className="w-1/5  text-[large] p-[10px] bg-[black] text-[white] cursor-pointer border-[1px] border-[solid] rounded-[5px]"
      >
        Restart
      </button>
    </div>
  );
}
