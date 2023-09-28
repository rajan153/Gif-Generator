import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {

  return (
    <div className="background w-full flex flex-col p-4 gap-4">
      <h1 className="bg-white rounded-xl text-center font-bold p-4 text-2xl">
        RANDOM GIFS
      </h1>
      <div className="flex flex-col items-center">
        <Random />

        <Tag />
      </div>
    </div>
  );
}
