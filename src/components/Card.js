import "../components/Card.css";

export default function Card({ source, showCard, flipped, disable }) {
  function handleClick() {
    if (!disable) {
      showCard(source);
    }
  }

  return (
    <li className="cardItem">
      <img
        className={flipped === true ? "flipped" : "background"}
        src="..//img/cover.png"
        alt="cover-img"
        onClick={handleClick}
      ></img>
      <img className="front" src={source.src} alt="card-item"></img>
    </li>
  );
}
