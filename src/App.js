import "./App.css";
import Card from "./components/Card";

function App() {
  const user={
    name:'kodewithdky',
    channel:'kodewithdky',
    location:'Lucknow'
  }
  return (
    <>
     <div className="relative bg-green-500 p-2 inline-block rounded-md left-[43%] top-[5vh]">
      <h1 className="text-2xl">Tailwind Test</h1>
     </div>
     <Card username="kodewithdky" btnText="click me"/>
     <Card username="DK. YaDav" btnText="View"/>
    </>
  );
}

export default App;
