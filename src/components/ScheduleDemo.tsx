import overlapr from "overlapr";
import { events } from "../events";
import Guides from "./schedule/Guides";
import MyEvent from "./schedule/MyEvent";

// The Overlapr processing happens in this step.
// It's outside the component to keep things simple.
const overlappedData = overlapr.processData(events);

// minStart and maxEnd are only used to render the grid correctly.
const minStart = Math.min(...events.map(({ start }) => start)) - 1;
const maxEnd = Math.max(...events.map(({ end }) => end)) + 1;

function ScheduleDemo() {
  return (
    <div className="p-4 border-l-2 border-solid border-slate-500">
      <h2 className="mb-12 font-semibold">Fictional day schedule</h2>
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
    </div>
  );
}

export default ScheduleDemo;
