import React from "react";
import ReviewCard from "./ReviewCard";
import testimonialData from "../Components/TestimonialData";

const App = () => {
  const displayReviewCard = () => {
    const data = testimonialData;
    return data.map((item) => {
      return (
        <ReviewCard
          key={item.id}
          id={item.id}
          img={item.img.imgSrc}
          name={item.name}
          grad={item.grad}
          mainReview={item.mainReview}
          reviewParagraph={item.reviewParagraph}
        />
      );
    });
  };
  return (
    <>
      <main>{displayReviewCard()}</main>
    </>
  );
};

export default App;
