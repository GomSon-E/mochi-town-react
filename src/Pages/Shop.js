import React, {useState, useEffect, useCallback} from "react";

import Products from "../Components/Products"

import '../css/shop.css'

function Shop() {

  // 데이터 가져오기
  const [productList, setProductList] = useState([])

  const fetchData = useCallback(() => {
    fetch('./product_data.json')
    .then(response => response.json())
    .then(data => setProductList(data))
  }, [])

  useEffect(() => {fetchData()}, [fetchData])

  // ProductOrder
  const [orderBy, setOrderBy] = useState('name') 
  const [isAsc, setIsAsc] = useState(true)

  const orderProducts = productList.sort((a, b) => {
    let asc = isAsc ? -1 : 1
    return ( a[orderBy] < b[orderBy]) ? 1*asc : -1*asc 
  })

  function ProductOrder() {
    return (
      <ul id="productOrder">
        <li className={`${orderBy === 'name' && 'clicked'}`}
            onClick={() => {setOrderBy("name"); setIsAsc(true);}}>상품명</li>
        <li className={`${orderBy === 'date' && 'clicked'}`}
            onClick={() => {setOrderBy("date"); setIsAsc(false);}}>신상품</li>
        <li className={`${orderBy === 'likes' && 'clicked'}`}
            onClick={() => {setOrderBy("likes"); setIsAsc(false);}}>인기상품</li>
        <li className={`${orderBy === 'ins' && 'clicked'}`}
            onClick={() => {setOrderBy("ins"); setIsAsc(true);}}>낮은가격</li>
        <li className={`${orderBy === 'ins' && 'clicked'}`}
            onClick={() => {setOrderBy("ins"); setIsAsc(false);}}>높은가격</li>
      </ul>
    )
  }

  return (
    <article>

      {/* header */}
      <header>
        <div>
          <h3>마약촉감 모찌타운 <br />
          스트레스 볼 4종</h3>
          <p>
            말랑말랑 보기만 해도 <br />
            힐링되는 스트레스 볼
          </p>
        </div>
      </header>

      <div id="characterProduct">

        <h3>캐릭터 상품</h3>

        <ProductOrder />

        <ul className="content_wrap">
          {
            orderProducts.map(
              (product) => {return (<Products key={product.id} product={product} /> )})
          }
        </ul>

      </div>
      
    </article>
  )  
}

export default Shop

