interface StatsProps {
  words: number;
  seconds: number;
  wpm: number;
  isTyping: boolean;
}

export default function Stats({ words, seconds, wpm, isTyping }: StatsProps) {
  return (
    <div>
      <h1 className="m-0 font-medium text-[2.5rem] text-[yellow]">
        {!isTyping && words > 0 ? (
          <>
            Finished: <span style={{ color: "aqua" }}>{wpm}</span> wpm{" "}
          </>
        ) : (
          <div className="flex items-center gap-2">
            <span className="whitespace-nowrap min-w-[50px] inline-block text-right">
              {seconds}
            </span>
            <span className="whitespace-nowrap">seconds left</span>
          </div>
        )}
      </h1>
      <div className="text-[1.2rem] mt-[10px] mx-[0] mb-[0]">
        <p>Words typed: {words}</p>
      </div>
    </div>
  );
}
