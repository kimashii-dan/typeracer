import Car from "../assets/images/progress-car.png";

interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="h-[5px] bg-[rgb(157,_156,_156)] w-full relative flex items-center">
      <div
        className="absolute [transition:left_0.2s_ease] overflow-hidden max-h-12"
        style={{
          left: `${progress}%`,
        }}
      >
        <img
          className="h-auto w-[10vw] sm:w-[8vw] md:w-[6vw] lg:w-[4vw]"
          src={Car}
          alt="Car"
        />
      </div>
    </div>
  );
}
