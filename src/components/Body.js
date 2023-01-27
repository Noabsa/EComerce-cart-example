import "./Body.css";
import Card from "./Card";

const Body = (props) => {
  function printSection(products) {
    return (
      <>
        {products.map((element) => {
          return (
            <Card
              data={element}
              key={element.id}
              handleIncrease={props.handleIncrease}
              handleDecrease={props.handleDecrease}
            />
          );
        })}
      </>
    );
  }
  return <section className="products">{printSection(props.products)}</section>;
};

export default Body;
