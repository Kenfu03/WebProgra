import { useState } from "react";
import "./PricingWithToggle.css";
import { PricingComponent } from "../../containers";

interface StyleTypes {
  justifyContent: "flex-start" | "flex-end"
}

const PricingWithToggle = () => {
  const [buttonStyle, setButtonStyle] = useState<StyleTypes>({
    justifyContent: "flex-start",
  });
  const basicObject = {
    storage: "500 GB",
    users: 2,
    capacity: "3 GB",
  };

  const professionalObject = {
    storage: "1 TB",
    users: 5,
    capacity: "10 GB",
  };

  const masterObject = {
    storage: "2 TB",
    users: 10,
    capacity: "20 GB",
  };

  const [basicPrice, setBasicPrice] = useState<string>("199.99");
  const [professionalPrice, setProfessionalPrice] = useState<string>("249.99");
  const [masterPrice, setMasterPrice] = useState<string>("399.99");

  const anuallyPrice = () => {
    setBasicPrice("199.99");
    setProfessionalPrice("249.99");
    setMasterPrice("399.99");
  }

  const monthlyPrice = () => {
    setBasicPrice("19.99");
    setProfessionalPrice("24.99");
    setMasterPrice("39.99");
  }

  const handleClick = () => {
    if (buttonStyle.justifyContent === "flex-start"){
      setButtonStyle({
        justifyContent: "flex-end"
      })
      monthlyPrice();
    } else {
      setButtonStyle({
        justifyContent: "flex-start"
      })
      anuallyPrice();
    }
    
  }
  return (
    <div className="pricing-container">
      <div className="pricing-tittle-container">
        <h1>Our Pricing</h1>
        <div className="button-container">
          <p>Annually</p>
          <div className="switch" 
              style={buttonStyle}
              onClick={() => handleClick()}>
            <div className="circle"></div>
          </div>
          <p>Monthly</p>
        </div>
      </div>
      <PricingComponent
        tittle="Basic"
        price={basicPrice}
        storage={basicObject.storage}
        users={basicObject.users}
        capacity={basicObject.capacity}
        special={false}
      />
      <PricingComponent
        tittle="Professional"
        price={professionalPrice}
        storage={professionalObject.storage}
        users={professionalObject.users}
        capacity={professionalObject.capacity}
        special={true}
      />
      <PricingComponent
        tittle="Master"
        price={masterPrice}
        storage={masterObject.storage}
        users={masterObject.users}
        capacity={masterObject.capacity}
        special={false}
      />
    </div>
  );
};

export default PricingWithToggle;
