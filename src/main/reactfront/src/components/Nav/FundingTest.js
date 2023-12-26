import React, {useState} from "react";
import FundingNav from "./FundingNav";
import FundingComponent from "../Card/MainPageCards/fundingComponent";


const FundingTest = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
  
    const handleCategorySelect = (category) => {
      setSelectedCategory(category);
    };
  
    return (
      <>
        <FundingNav onSelectCategory={handleCategorySelect} />
        <FundingComponent selectedCategory={selectedCategory} />
      </>
    );
  };
  
  export default FundingTest;