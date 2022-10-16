import React, { useState } from 'react';
import { Box } from '../../utils/Box';
import { GlobalStyle } from '../../global-styles/GlobalStyle';
import ReviewsSlider from '../ReviewsSlider/ReviewsSlider';
import data from '../../data';

function App() {
  const [reviews, setReviews] = useState(data);
  const [reviewIndex, setReviewIndex] = useState(0);

  return (
    <>
      <GlobalStyle />
      <Box as="main">
        <Box
          as="section"
          textAlign="center"
          p={{ xs: 3, sm: 4, md: 5, lg: 6 }}
          m="0 auto">
          <ReviewsSlider
            data={reviews}
            reviewIndex={reviewIndex}
            setReviewIndex={setReviewIndex}
          />
        </Box>
      </Box>
    </>
  );
}

export default App;
