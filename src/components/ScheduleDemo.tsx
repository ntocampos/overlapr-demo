import overlapr from "overlapr";
import { useState } from "react";
import { colors } from "../constants";
import { defaultEvents } from "../events";
import Button from "./Button";
import Guides from "./schedule/Guides";
import MyEvent from "./schedule/MyEvent";

function ScheduleDemo() {
  const [events, setEvents] = useState(defaultEvents);

  // minStart and maxEnd are only used to render the grid correctly.
  const minStart = Math.floor(
    Math.min(...events.map(({ start }) => start)) - 1,
  );
  const maxEnd = Math.ceil(Math.max(...events.map(({ end }) => end)) + 1);

  // The Overlapr processing happens in this step.
  const overlappedData = overlapr.processData(events);

  const randomizeEvents = () => {
    const randomEvents = events.map(({ id, color }) =>
      buildRandomEvent(id, color),
    );
    setEvents(randomEvents);
  };

  return (
    <div className="p-4 border-l-2 border-solid border-slate-500">
      <div className="flex flex-row mb-12 justify-center items-center">
        <h2 className="font-semibold mr-6">Fictional day schedule</h2>
        <Button label="Randomize!" onClick={randomizeEvents} />
      </div>
      <div className="relative">
        <Guides start={minStart} end={maxEnd} />
        {/* Events container */}
        <div className="absolute w-11/12 h-full top-0 left-12">
          {events.map(({ id, color }) => (
            <MyEvent
              key={id}
              id={id}
              start={overlappedData[id].start}
              end={overlappedData[id].end}
              minStart={minStart}
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

function buildRandomEvent(id: string, color: { bg: string; shadow: string }) {
  const start = getRandomNumber(1, 8);
  const end = start + getRandomNumber(1, 3);

  return { id, start, end, color };
}

function getRandomNumber(min: number, max: number) {
  const randomNumber = Math.random() * (max - min + 1) + min;
  return Math.round(randomNumber * 100) / 100;
}

export default ScheduleDemo;
