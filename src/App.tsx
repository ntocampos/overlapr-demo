import ScheduleDemo from "./components/ScheduleDemo";
import Highlight from "./components/text/Highlight";
import Text from "./components/text/Text";

function App() {
  return (
    <main className="p-8">
      <h1 className="font-semibold mb-4 pb-4 border-b">Overlapr Demo</h1>
      <Text>
        <strong>Overlapr</strong> is a conflict detection tool that will help
        you represent them graphically on your UI, regardless of the
        application.
      </Text>
      <Text>
        In this example, we simulate a calendar application, where each block
        represents a scheduled event on that day. Like all calendars,
        overlapping events may occur for several reasons. That's when{" "}
        <strong>Overlapr</strong> comes into play. The library will help you
        represent those overlaps regardless of their configuration. It is a
        deterministic algorithm, meaning that you will always get the same
        output for the same input, avoiding UI shifting between rerenders.
      </Text>
      <Text>
        To test different configurations yourself, you can go to the{" "}
        <Highlight>events.ts</Highlight> file and change it as you please. Just
        remember to keep the <Highlight>end</Highlight> after{" "}
        <Highlight>start</Highlight>, as the opposite wouldn't make much sense.
      </Text>
      <Text>
        To learn how the library was used to build this UI, go to the{" "}
        <Highlight>src/components/ScheduleDemo.tsx</Highlight> and{" "}
        <Highlight>src/components/schedule/MyEvent.tsx</Highlight> files.
        Lastly, you can hover each event to check out its rendering properties.
      </Text>
      <ScheduleDemo />
    </main>
  );
}

export default App;
