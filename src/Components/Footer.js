import React from "react";

function Footer() {
  return (
    <footer>
      <div>
        <div className="box_left">
          <ul>
            <li><a href="#">회사소개</a></li>
            <li><a href="#">이용약관</a></li>
            <li><a href="#">개인정보처리방침</a></li>
            <li><a href="#">이용안내</a></li>
          </ul>
          <dl>
            <dt>상호명 :</dt>
            <dd>(주)메세</dd>
            <dt>대표 :</dt>
            <dd>안성준</dd>
            <dt>사업자등록번호 :</dt>
            <dd>[119-86-27651]</dd>
            <dt>통신판매업신고 :</dt>
            <dd>
              2011-서울구로-0675호 
              [<a href="#">사업자정보확인</a>]
            </dd><br />
            <dt>전화 :</dt>
            <dd>070-7122-6004</dd>
            <dt>팩스 :</dt>
            <dd>02-852-6175</dd>
            <dt>주소 :</dt>
            <dd>08394 서울특별시 구로구 디지털로 242 (구로동) 한화비즈메트로1차 1010호</dd><br />
            <dt>이메일 :</dt>
            <dd>mese@mese.co.kr</dd>
            <dt>개인정보보호책임자 :</dt>
            <dd>
              <a href="mailto:mese@mese.co.kr">
                김미나 광고대행사 영업 전화사절(mese@mese.co.kr)
              </a>
            </dd>
          </dl>
          <p>COPYRIGHT &copy; <strong>모찌타운</strong>. ALL RIGHTS RESERVED. <a>DESIGN MOON</a></p>
        </div>
        <div className="box_right">
          <p className="title">이니시스 에스크로 이체</p>
          <p className="text">
            고객님의 안전거래를 위해 현금 등 <br /> 
            결제 시, 에스크로 이체 서비스를 <br />
            이용하실 수 있습니다.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer