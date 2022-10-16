import styled from 'styled-components/macro';

export const DisplayBox = styled.div`
  position: relative;
  overflow: hidden;
`;

export const ReviewsSlider = styled.ul`
  display: flex;
  justify-content: center;

  li:nth-child(1) {
    img {
      transform: scale(2.4) translate(3%, 8%);
    }
  }
`;

export const Article = styled.article`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity 150ms ease-in-out, transform 450ms ease-in-out;

  &.current {
    transform: translateX(0);
    opacity: 1;
  }

  &.next {
    transform: translateX(100%);
  }
  &.last {
    transform: translateX(-100%);
  }

  & h2 {
    text-transform: uppercase;
    color: ${p => p.theme.colors.muted};
  }

  & h3 {
    text-transform: capitalize;
  }

  & p {
  }
`;

export const Thumbnail = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: ${p => p.theme.space[1]}rem;
  border-radius: 50%;
  border: 3px solid gold;
`;

export const Image = styled.img`
  position: absolute;
  object-fit: contain;
  object-position: left bottom;
  transform: translateY(-10%);
`;

export const Button = styled.button`
  position: absolute;
  cursor: pointer;
  padding: ${p => p.theme.space[1]}rem;
  background-color: transparent;
  border: none;
  top: 30%;

  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }

  &.next {
    right: ${p => p.theme.space[1]}rem;
  }

  &.prev {
    left: ${p => p.theme.space[1]}rem;
  }

  & > * {
    width: 60px;
  }
`;
