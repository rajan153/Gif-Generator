import { useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";

export default function Tag() {
  const [tag, setTag] = useState("car");
  const { data, loading, fetchingData } = useGif();
  return (
    <div className="bg-blue-400 w-[350px] outline flex flex-col items-center mt-12 p-4 gap-4">
      <h2>{`${tag} GIF`}</h2>
      {loading ? <Spinner /> : <img src={data} width="350" alt=""/>}
      <input
        type="text"
        className="w-full"
        onChange={(event) => setTag(event.target.value)}
        value={tag}
      />
      <button className="bg-blue-200 w-full" onClick={() => fetchingData(tag)}>
        GENERATE
      </button>
    </div>
  );
}
