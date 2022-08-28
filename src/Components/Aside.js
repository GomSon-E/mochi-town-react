import React from "react";

function Aside() {
  return (
    <>
    {/* aside - Buttons */}
    <aside id="buttons">
      <p id="top">&and;</p>
      <p id="bottom">&or;</p>
    </aside>

    {/* aside - Info Box */}
    <aside id="infoBox">
      <section id="infoBox01">
        <h4>고객센터</h4>
        <div>
          <dl className="call">
            <dt>고객센터안내번호</dt>
            <dd className="num">070-7122-6004, 6010</dd>
            <dd>
              <ul>
                <li>광고대행사 전화사절</li>
                <li>(<dfn>도매문의 : </dfn>02-852-6171)</li>
                <li><dfn>상담시간 </dfn>AM 09:30 - PM 05:30</li>
                <li><dfn>점심시간 </dfn>PM 12:00 - PM 01:00</li>
                <li>주말 및 공휴일 휴무</li>
              </ul>
            </dd>
          </dl>
          <dl className="bank">
            <dt>무통장 입금계좌정보</dt>
            <dd>
              <ul>
                <li><dfn>하나은행 </dfn><span>630-007149-051</span></li>
                <li><dfn>예금주 : </dfn>주식회사메세</li>
              </ul>
              <dd>오후 3시 이전 입금 확인된 주문건에 한해 당일 배송 해드립니다.</dd>
            </dd>
          </dl>
        </div>
      </section>
      <section id="infoBox02">
        <h4>FOLLOW US</h4>
        <div>
          <a id="youtube_link" className="hover_dark" href="https://www.youtube.com/channel/UCRmCuDIeLjOJV1spPnGAFXA" target="_blank" rel="noopener noreferrer">
            <dl>
              <dt>Youtube</dt>
              <dd>MESE-G / ANIPUPPET</dd>
              <dd>ANIPUPPET KIDS</dd>
            </dl>
          </a>
          <a id="insta_link" className="hover_dark" href="https://www.instagram.com/mochitown_official/" target="_blank" rel="noopener noreferrer">
            <dl>
              <dt>instagram</dt>
              <dd>mochi_mochi_shiba</dd>
              <dd>_mochitown</dd>
            </dl>
          </a>          
        </div>        
      </section>
    </aside>
    </>
  )
}

export default Aside