import React, {useState, useEffect, useCallback} from "react";

import ShowReview from "../Components/ShowReview"
import WriteReview from "../Components/WriteReview"

import '../css/review.css'

function Review() {

  // Toggle
  const [toggle, setToggle] = useState(false)

  // Search
  const [query, setQuery] = useState("")
  const [tempQuery, setTempQuery] = useState("")

  // 데이터 가져오기
  const [reviewList, setReviewList] = useState([])

  const fetchData = useCallback(() => {
    fetch('./review_data.json')
    .then(response => response.json())
    .then(data => setReviewList(data))
  }, [])

  useEffect(() => {fetchData()}, [fetchData])

  const filterReviews = reviewList.filter( review => review.product.includes(query) )

  return (
    <article id="review">

      {/* header */}
      <header>
        <div>
          <h3>상품 사용후기</h3>
          <p>
            상품 사용후기 남기고 <br />
            적립금 받아가세요
          </p>
        </div>
      </header>

      <article id="reviewMain">

        <h3>상품 사용후기</h3>
        <p>&hearts;모찌타운 회원 적립금지급&#40;포토 1,000원/ 텍스트 500원&#41;&hearts;</p>

        <ul id="showReview">
          {
            filterReviews.map(
              (review) => {return (<ShowReview key={review.id} review={review} /> )})
          }
        </ul>

        <div id="searchReview">
          <label htmlFor="search">상품명 검색</label>
          <input type="text" id="search"  value={tempQuery}
                onChange={ event => {setTempQuery(event.target.value)} } />
          <button onClick={() => {setQuery(tempQuery); setTempQuery("");}}>검색</button>
        </div>        

        <div id="writeReview">
          <button onClick={() => {setToggle(!toggle)}}>글쓰기</button>
          <WriteReview 
            toggle={toggle} setToggle={setToggle}
            lastId={
              reviewList.reduce((max, review) => review.id > max ? review.id : max, 0 ) 
            }
            onAddReview={
              (myReview) => { setReviewList([...reviewList, myReview]) }} />
        </div>

      </article>      

    </article>
  )  
}

export default Review