import "./Card.css";
const Card = (props) => {
  let item = props.data;
  return (
    <div className="productCard">
      <img src={item.image} alt={item.product}></img>
      <p>{item.product}</p>
      <p>{item.price} €</p>
      <div className="inc-dec">
        <button
          type="button"
          onClick={() => {
            props.handleDecrease(item);
          }}
        >
          -
        </button>
        <p>{item.quantity}</p>
        <button type="button" onClick={() => props.handleIncrease(item)}>
          +
        </button>
      </div>
      <p className="subtotal">{`${item.price * item.quantity} €`}</p>
    </div>
  );
};

export default Card;

Card.defaultProps = {
  product: [],
};
