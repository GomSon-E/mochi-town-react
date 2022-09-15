import $ from "jquery"

function handleMouseEnter (event) {
  const sel = $(event.target).parents('li.productWrap').children('ul.productBtns')
  $('li:first-child', sel).animate({top: "0px"}, 200)
  $('li.like', sel).animate({right: "0px"}, 200)
  $(sel).css('display', 'block')
}

function handleMouseLeave () {
  $('ul.productBtns>li:first-child', this).css('top', '50px')
  $('ul.productBtns li.like', this).css('right', '-70px')
  $('ul.productBtns', this).css('display', 'none')
}

function handleBtns (e) {
  let num = Number($(e.target).text())

  if ($(e.target).hasClass('clicked')) {
    $(e.target).removeClass('clicked')    
    $(e.target).text(num - 1)
  } 
  else {
    $(e.target).addClass('clicked')
    $(e.target).text(num + 1)
  }  
}

function Products({product}) {
  return (
    <li className="productWrap">
      <figure className="productList">
        <img 
          src={`${process.env.PUBLIC_URL}/products/${product.img}.jpg`} 
          alt={product.name} 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave} />
        <figcaption>
          <dl>
            <dt>{product.name}</dt>
            <dd><del>{product.del}원</del></dd>
            <dd><ins>{product.ins}원</ins></dd>
          </dl>
        </figcaption>
      </figure>
      <ul className="productBtns"
        onMouseEnter={handleMouseEnter}>
        <li>
          <ul>
            <li className="productBtn cart" onClick={handleBtns}>장바구니</li>
            <li className="productBtn heart" onClick={handleBtns}>관심상품</li>
          </ul>
        </li>
        <li className="productBtn like" onClick={handleBtns}>{product.likes}</li>
      </ul>
    </li>
  )
}

export default Products