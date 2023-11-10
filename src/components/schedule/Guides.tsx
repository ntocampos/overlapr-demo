import { blockHeight } from "../../constants";

type Props = {
  start: number;
  end: number;
};

// Helper function to generate a number range
function arrayRange(start: number, end: number): number[] {
  return Array.from(
    { length: end - start + 1 },
    (_value, index) => start + index,
  );
}

function Guides({ start, end }: Props) {
  const blocks = arrayRange(start, end);
  return (
    <div className="pl-7 w-full h-full">
      {blocks.map((index) => (
        // Blocks with dashed borders
        <div
          key={index}
          className="relative w-full border border-dashed border-r-0 border-b-0"
          style={{ height: blockHeight }}
        >
          {/* Marker circles */}
          <span className="absolute top-0 -mt-1 left-0 -ml-1 w-2 h-2 rounded bg-slate-300" />
          {/* Marker numbers */}
          <span className="absolute w-4 top-0 -mt-2 left-0 -ml-7">
            <p className="font-bold text-end text-xs text-slate-400">{index}</p>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Guides;
