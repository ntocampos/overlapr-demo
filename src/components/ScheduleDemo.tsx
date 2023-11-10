import Guides from "./schedule/Guides";

function ScheduleDemo() {
  return (
    <>
      <h2 className="mb-4">Fictional day schedule</h2>
      <div className="relative">
        <Guides start={5} end={10} />
        {/* Events container */}
        <div className="pl-7"></div>
      </div>
    </>
  );
}

export default ScheduleDemo;
