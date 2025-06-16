const Card = (props) => {
  let { card, message, imgurl } = props;
  return (
    <div className="card">
      <img src={imgurl} width={"150px"} height={"130px"} />
      <h2>{card}</h2>
      <p>{message}</p>
    </div>
  );
};

export default Card;
