export const Rating = ({ children }) => {
  const numOfStars = Math.round(children);
  const emptyStar = '☆';
  const filledStar = '★';
  const rating =
    filledStar.repeat(numOfStars) + emptyStar.repeat(5 - numOfStars);
  // let stars;
  return (
    <div className="rating">
      {/* <h3>{Math.round(children) === 0 ? (stars = '☆☆☆☆☆') : undefined}</h3>
      <h3>{Math.round(children) === 1 ? (stars = '★☆☆☆☆') : undefined}</h3>
      <h3>{Math.round(children) === 2 ? (stars = '★★☆☆☆') : undefined}</h3>
      <h3>{Math.round(children) === 3 ? (stars = '★★★☆☆') : undefined}</h3>
      <h3>{Math.round(children) === 4 ? (stars = '★★★★☆') : undefined}</h3>
      <h3>{Math.round(children) === 5 ? (stars = '★★★★★') : undefined}</h3> */}
      <h3>{rating}</h3>
    </div>
  );
};
