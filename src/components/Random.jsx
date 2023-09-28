import Spinner from "./Spinner"
import useGif from "../hooks/useGif";

export default function Random() {
  const {data, loading, fetchingData} = useGif();

  return (
    <div className="z-0 bg-green-400 w-[350px] flex flex-col items-center outline rounded-sm p-4 gap-8">
      <h2>A Random GIF</h2>
      {
        loading ? (<Spinner />) : (<img src={data} width="350px" alt="" />)
      }
      
      <button className="bg-green-200 w-full" onClick={() => fetchingData()}>
        GENERATE
      </button>
    </div>
  );
}
