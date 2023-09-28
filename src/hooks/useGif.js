import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchingData(tag) {
    setLoading(true);

    const dataInfo = await fetch(tag ? `${url}&tag=${tag}` : url);
    const newDataInfo = await dataInfo.json();
    const imageSource = newDataInfo.data.images.downsized_large.url;
    setData(imageSource);
    setLoading(false);
  }
  console.log(data);

  useEffect(() => {
    fetchingData("");
  }, []);

  return { data, loading, fetchingData };
};

export default useGif;

// .data.images.downsized_large.url
