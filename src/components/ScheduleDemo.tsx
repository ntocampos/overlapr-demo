import overlapr from "overlapr";
import { colors } from "../constants";
import Guides from "./schedule/Guides";
import MyEvent from "./schedule/MyEvent";

const events = [
  { id: "1", start: 3, end: 4, color: colors.blue },
  { id: "2", start: 3.5, end: 4.5, color: colors.indigo },
  { id: "3", start: 3.75, end: 4.75, color: colors.violet },
];

const overlappedData = overlapr.processData(events);
const minStart = Math.min(...events.map(({ start }) => start)) - 1;
const maxEnd = Math.max(...events.map(({ end }) => end)) + 1;

console.log({ overlappedData });

function ScheduleDemo() {
  return (
    <>
      <h2 className="mb-4">Fictional day schedule</h2>
      <div className="relative">
        <Guides start={minStart} end={maxEnd} />
        {/* Events container */}
        <div className="absolute w-11/12 h-full top-0 left-12">
          {events.map(({ id, color }) => (
            <MyEvent
              key={id}
              id={id}
              start={overlappedData[id].start - minStart}
              width={overlappedData[id].width}
              height={overlappedData[id].height}
              offset={overlappedData[id].offset}
              color={color}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ScheduleDemo;
