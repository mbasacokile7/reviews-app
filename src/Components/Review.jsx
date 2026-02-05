import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

function Review(props) {
  // Destructure the prop object
  const {
    name,
    job,
    img,
    text,
    increaseIndex,
    decreaseIndex,
    getRandomReview,
  } = props;
  return (
    <article className="review">
      <div className="img-container">
        <img src={img} alt="" className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button className="prev-btn" onClick={() => decreaseIndex()}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={() => increaseIndex()}>
          <FaChevronRight />
        </button>
      </div>
      <button
        type="button"
        className="btn btn-hipster"
        onClick={() => getRandomReview()}
      >
        Surprise Me
      </button>
    </article>
  );
}

export default Review;
