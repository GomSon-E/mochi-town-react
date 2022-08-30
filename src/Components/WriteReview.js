import React, {useState, useEffect, useCallback} from "react";
import moment from 'moment';

function WriteReview ({toggle, setToggle, lastId,onAddReview}) {

  // 데이터 가져오기
  const [productList, setProductList] = useState([])

  const fetchData = useCallback(() => {
    fetch('./product_data.json')
    .then(response => response.json())
    .then(data => setProductList(data))
  }, [])

  useEffect(() => {fetchData()}, [fetchData])

  // 데이터 보내기
  const clearData = { 
    product: "",
    note: "",
    date: ""
  }

  const [reviewData, setReviewData] = useState(clearData)

  function publishReview () {
    const newReview = {
      id: lastId + 1,
      product: reviewData.product,
      note: reviewData.note,
      date: moment().format('YYYY-MM-DD HH:mm')
    }

    onAddReview(newReview)

    setToggle(!toggle)
    setReviewData(clearData)
  }

  if (!toggle) {
    return null
  } else {
    return (
      <ul>

        <li>
          <label htmlFor="reviewProduct">상품명</label>
          <select id="reviewProduct" defaultValue={"상품 선택"}
            onChange={(event) => {setReviewData({...reviewData, product: event.target.value})}} >
            <option disabled>상품 선택</option>
            {
              productList.map((product) => 
                <option key={product.id} value={product.name}>{product.name}</option>)
            }
          </select>
        </li>

        <li>
          <label htmlFor="reviewNote">본문</label>
          <textarea id="reviewNote" cols="30" rows="10" placeholder="글쓰기"
            onChange={(event) => {setReviewData({...reviewData, note: event.target.value})}}>
          </textarea>
        </li>

        <li>
          <button onClick={publishReview}>저장</button>
        </li>

      </ul>
    )
  }
}

export default WriteReview