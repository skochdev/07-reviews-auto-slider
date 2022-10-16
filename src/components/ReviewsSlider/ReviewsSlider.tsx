import * as S from './ReviewsSlider.styled';
import { Box } from '../../utils/Box';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { useEffect } from 'react';

interface Props {
  data: {
    id: number;
    image: string;
    name: string;
    title: string;
    quote: string;
  }[];
  reviewIndex: number;
  setReviewIndex: (index: number) => void;
}

const ReviewsSlider = ({ data, reviewIndex, setReviewIndex }: Props) => {
  useEffect(() => {
    const lastIndex = data.length - 1;
    const firstIndex = 0;

    if (reviewIndex < 0) {
      setReviewIndex(lastIndex);
    } else if (reviewIndex > lastIndex) {
      setReviewIndex(firstIndex);
    }
  }, [reviewIndex, data, setReviewIndex]);

  useEffect(() => {
    const slider = setInterval(() => {
      setReviewIndex(reviewIndex + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [reviewIndex, setReviewIndex]);

  return (
    <>
      <Box
        as={S.DisplayBox}
        m="0 auto"
        width={{ sm: 600, md: 960, lg: 1280 }}
        height={{ xs: 200, sm: 400, lg: 500 }}>
        <Box as={S.ReviewsSlider}>
          {data.map(({ id, image, name, title, quote }, index) => {
            let position = 'next';

            if (reviewIndex === index) {
              position = 'current';
            }

            if (
              reviewIndex === index - 1 ||
              (index === 0 && reviewIndex === data.length - 1)
            ) {
              position = 'last';
            }
            return (
              <li key={id}>
                <S.Article className={position}>
                  <Box
                    as={S.Thumbnail}
                    m="0 auto"
                    width={{ xs: 80, sm: 180, md: 200, lg: 300 }}
                    height={{ xs: 80, sm: 180, md: 200, lg: 300 }}>
                    <S.Image src={image} alt="" />
                  </Box>
                  <Box
                    as="h2"
                    mb={2}
                    fontSize={{ sm: '1.6rem', md: '1.6rem', lg: '2rem' }}>
                    {title}
                  </Box>
                  <Box
                    as="h3"
                    mb={4}
                    fontSize={{ sm: '1.6rem', md: '1.6rem', lg: '2rem' }}
                    fontWeight={400}>
                    {name}
                  </Box>
                  <Box
                    as="p"
                    width="60%"
                    margin="0 auto"
                    fontSize={{ sm: '1.3rem', md: '1.4rem', lg: '1.6rem' }}>
                    {quote}
                  </Box>
                </S.Article>
              </li>
            );
          })}
        </Box>
        <S.Button
          onClick={() => setReviewIndex(reviewIndex - 1)}
          type="button"
          className="prev">
          <FaAngleDoubleLeft size={30} />
        </S.Button>
        <S.Button
          onClick={() => setReviewIndex(reviewIndex + 1)}
          type="button"
          className="next">
          <FaAngleDoubleRight size={30} />
        </S.Button>
      </Box>
    </>
  );
};

export default ReviewsSlider;
