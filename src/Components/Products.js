function Products({product}) {
  return (
    <li className="productWrap">
      <figure className="productList">
        <img src={`${process.env.PUBLIC_URL}/products/${product.name}.jpg`} alt={product.name} />
        <figcaption>
          <dl>
            <dt>{product.name}</dt>
            <dd><del>{product.del}원</del></dd>
            <dd><ins>{product.ins}원</ins></dd>
          </dl>
        </figcaption>
      </figure>
      <ul className="productBtns">
        <li>
          <ul>
            <li className="productBtn cart">장바구니</li>
            <li className="productBtn heart">관심상품</li>
          </ul>
        </li>
        <li className="productBtn like">{product.likes}</li>
      </ul>
    </li>
  )
}

export default Products