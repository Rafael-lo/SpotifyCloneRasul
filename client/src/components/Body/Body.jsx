import Header from "../Header/Header";
import "./Body.css";

export default function Body() {
  const playSong = () => {};

  const playPlaylist = () => {};

  return (
    <div className="body">
      <Header/>
      <div className="body__info">
        <img />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>Description</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">// components</div>
      </div>
    </div>
  );
}
