import { FaBeer } from "react-icons/fa";
import data from "./data.js";
import Review from "./Components/Review.jsx";
import { useState } from "react";

const App = () => {
  // Set up State value (Index in the data array)
  // Teh state value will control which person we display
  const [index, setIndex] = useState(0);
  //Functions to change the index
  // Function to go to the index index
  /*
    - The array has indices between 0-3
    - To go to the next review, we must increment by 1
    - Once an index of 3 is reached, then go back to 0

  */
  function increaseIndex() {
    const noOfReviews = data.length;
    if (index < noOfReviews) {
      setIndex((currentState) => {
        const newState = currentState + 1;
        if (newState >= noOfReviews) {
          const originalState = 0;
          return originalState;
        }
        return newState;
      });
    }
  }

  function decreaseIndex() {
    if (index === 0) {
      setIndex((currentState) => {
        const newState = data.length - 1;
        return newState;
      });
    } else if (index > 0) {
      setIndex((currentState) => {
        const newState = currentState - 1;
        return newState;
      });
    }
  }

  // Function to generate a random review:
  function getRandomReview() {
    setIndex((currentState) => {
      const maxIndex = data.length - 1;
      const newState = Math.floor(Math.random() * maxIndex);
      return newState;
    });
  }
  // Destructure the data object
  const { name, job, image, text } = data[index];
  return (
    <main>
      <Review
        name={name}
        job={job}
        img={image}
        text={text}
        increaseIndex={increaseIndex}
        decreaseIndex={decreaseIndex}
        getRandomReview={getRandomReview}
      />
    </main>
  );
};
export default App;
