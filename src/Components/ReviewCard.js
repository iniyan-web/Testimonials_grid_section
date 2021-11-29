import React from "react";

const ReviewCard = ({ id, img, name, grad, mainReview, reviewParagraph }) => {
  return (
    <>
      <div className={`review-card review-card-${id}`}>
        <div className="card-top">
          <img src={img} className="reviewer-img" alt="Reviewer." />
          <div className="reviewer">
            <h1 className="name">{name}</h1>
            <p className="grad">{grad}</p>
          </div>
        </div>
        <div className="card-middle">
          <p className="main-review">{mainReview}</p>
        </div>
        <div className="card-bottom">
          <p className="review-para">{reviewParagraph}</p>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
