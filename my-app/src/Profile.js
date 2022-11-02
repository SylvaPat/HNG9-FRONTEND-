import profileImg from "./img/Profile-img.jpeg";
import arrow from "./img/arrow.png";
import tripleDot from "./img/triple-dot.png";

export default function Profile() {
  return (
    <div className="profile">
      <img src={profileImg} alt="Profile-img" id="profile__img" />
      <a href="index.html">
        <img src={arrow} alt="arrow" className="arrow" />
      </a>
      <a href="index.html">
        <img src={tripleDot} alt="arrow" className="triple-dot" />
      </a>
      <h2 id="twitter">patsylva16</h2>
      <h2 id="slack">sylvapat</h2>
    </div>
  );
}
