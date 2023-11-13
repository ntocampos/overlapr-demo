import { blockHeight, colors } from "../../constants";

type Props = {
  id: string;
  start: number;
  end: number;
  minStart: number;
  width: number;
  height: number;
  offset: number;
  color?: { bg: string; shadow: string };
};

function MyEvent({
  id,
  start,
  end,
  minStart,
  width,
  height,
  offset,
  color = colors.blue,
}: Props) {
  return (
    <div
      className="group absolute px-2 cursor-pointer transition-all duration-300"
      // This is the important part about how to use the lib output to render events
      style={{
        width: `${width * 100}%`,
        height: height * blockHeight,
        top: (start - minStart) * blockHeight,
        left: `${offset * 100}%`,
      }}
    >
      <div
        className={`w-full h-full ${color.bg} rounded-xl shadow-lg ${color.shadow} flex justify-center items-center`}
      >
        <p className="transition-opacity text-white font-bold group-hover:opacity-0">
          {id}
        </p>
        <div
          className={`absolute transition-opacity text-slate-500 font-semibold text-xs font-mono p-2 bg-neutral-50 opacity-0 group-hover:opacity-100 rounded-lg shadow ${color.shadow}`}
        >
          <p>start: {start}</p>
          <p>end: {end}</p>
          <p>width: {formatPercent(width)}</p>
          <p>height: {height}</p>
          <p>offset: {formatPercent(offset)}</p>
        </div>
      </div>
    </div>
  );
}

const formatPercent = (number: number) => `${Math.round(number * 100)}%`;

export default MyEvent;
