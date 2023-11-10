import { blockHeight, colors } from "../../constants";

type Props = {
  id: string;
  start: number;
  width: number;
  height: number;
  offset: number;
  color?: { bg: string; shadow: string };
};

function MyEvent({
  id,
  start,
  width,
  height,
  offset,
  color = colors.blue,
}: Props) {
  return (
    <div
      className="absolute px-2"
      style={{
        width: `${width * 100}%`,
        height: height * blockHeight,
        top: start * blockHeight,
        left: `${offset * 100}%`,
      }}
    >
      <div
        className={`w-full h-full ${color.bg} rounded-xl shadow-lg ${color.shadow} flex justify-center items-center`}
      >
        <p className="text-white font-bold">{id}</p>
      </div>
    </div>
  );
}

export default MyEvent;
