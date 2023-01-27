import "./Header.css";

const Header = (props) => {
  let amount = props.products.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  let cartTotal = props.products.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  let msg = { free: "Free Shipping", paid: "Shipping will be charged" };

  return (
    <header>
      <div className="icon">
        <img src="img/socks-solid.svg" alt="icon"></img>
      </div>
      <h2 className="cart">CART ({amount})</h2>
      <div className="shipping-info">
        {cartTotal > 0 && (
          <>
            <h2 className={`msg ${cartTotal >= 500}`}>
              {cartTotal >= 500 ? msg.free : msg.paid}
            </h2>
            {cartTotal < 500 && (
              <p>
                You are a {(500 - cartTotal).toFixed(2)} € from free shipping
              </p>
            )}
          </>
        )}
      </div>
      <h2 className="price">{cartTotal} €</h2>
    </header>
  );
};

export default Header;
