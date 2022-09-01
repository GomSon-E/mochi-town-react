function Reviews ({review}) {
  return (
    <li>
      <img className="img" src={`${process.env.PUBLIC_URL}/products/${review.product}.jpg`} alt={review.product} />
      <dl>
        <dt className="product">{review.product}</dt>
        <dd className="date"><dfn>작성일 : </dfn>{review.date}</dd>
        <dd className="note">{review.note}</dd>
      </dl>
    </li>
  )
}

export default Reviews