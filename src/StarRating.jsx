function StarRating({ rating }) {
  const stars = [1, 2, 3, 4, 5]
  /*
    Here's the markup for a single star:
    
    <img
      alt=""
      className="gold-star"
      src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
    />
    
    Your job is to repeat this element
    based on the `rating` prop.
    If the rating is 4, we need 4 copies.
  */

  return <div className="star-wrapper">
    {
      stars.map((star) => {
        return star <= rating ? (
        <img
        key={star}
        className={'gold-star'}
        src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
        />
        ) : null;
      })
    }
  </div>;
}

export default StarRating;
