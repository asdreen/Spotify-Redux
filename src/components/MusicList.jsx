import { useEffect, useState } from "react";
import Song from "./Song";
import { useSelector } from "react-redux";

const MusicList = () => {
  const [songs, setSongs] = useState([]);
  const music = useSelector((state) => state.searchQuerry.searchingSong);

  useEffect(() => {
    fetchSongs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [music]);

  const fetchSongs = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${music}`
      );
      if (response.ok) {
        let data = await response.json();
        setSongs(data);
        console.log(data);
      } else {
        console.log("Server Error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {songs.data &&
        songs.data.map((element) => <Song songs={element} key={element.id} />)}
    </div>
  );
};

export default MusicList;
