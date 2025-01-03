interface TextProps {
  splitted: string[][];
  wordIndex: number;
  charIndex: number;
}

export default function Text({ splitted, wordIndex, charIndex }: TextProps) {
  return (
    <div className="text-[1.9rem]">
      {splitted.map((word, wordIdx) => (
        <span key={wordIdx}>
          {word.map((char, charIdx) => (
            <span
              key={charIdx}
              style={{
                color:
                  wordIdx < wordIndex ||
                  (wordIdx === wordIndex && charIdx < charIndex)
                    ? "white"
                    : "rgb(157, 156, 156)",
              }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </div>
  );
}
