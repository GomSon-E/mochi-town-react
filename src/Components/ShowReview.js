function Reviews ({review}) {
  return (
    <li>
      <dl>
        <dt>{review.product}</dt>
        <dd>{review.date}</dd>
        <dd>{review.note}</dd>
      </dl>
    </li>
  )
}

export default Reviews