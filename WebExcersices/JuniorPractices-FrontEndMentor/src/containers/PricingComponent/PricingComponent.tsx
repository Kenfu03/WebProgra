import "./PricingComponent.css";

interface PriceInfoTypes {
  tittle: string;
  price: string;
  storage: string;
  users: number;
  capacity: string;
  special: boolean;
}

const PricingComponent = (props: PriceInfoTypes) => {
  return (
    <div
      className={
        props.special
          ? "pricing-info-special-container"
          : "pricing-info-container"
      }
    >
      <h2>{props.tittle}</h2>
      <h1>
        <p>
          $ <span className="price">{props.price}</span>
        </p>
      </h1>
      <div className="line"></div>
      <h2>{props.storage} Storage</h2>
      <div className="line"></div>
      <h2>{props.users} Users Allowed</h2>
      <div className="line"></div>
      <h2>Send up to {props.capacity}</h2>
      <div className="line"></div>
      <button>Learn more</button>
    </div>
  );
};

export default PricingComponent;
