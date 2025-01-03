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
            {" "}
            Finished: <span style={{ color: "aqua" }}>{wpm}</span> wpm{" "}
          </>
        ) : (
          <> {seconds} seconds left</>
        )}
      </h1>
      <div className="text-[1.2rem] mt-[10px] mx-[0] mb-[0]">
        <p>Words typed: {words}</p>
      </div>
    </div>
  );
}
