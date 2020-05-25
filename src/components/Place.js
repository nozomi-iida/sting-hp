import React from 'react';
import placeImg from '../imgs/Place.jpg';

export default () => {
  return (
    <section id="place">
      <div className="inner">
        <h2 className="title">STINGの活動場所</h2>
        <div className="place-wrap">
          <div className="place-container">
            <div className="place-box">
              <p className="place-text">
                活動場所：<br/>
                立場テニスコート<br/>
                （東京都大田区仲六郷２−６−７）<br/>
              </p>
            </div>
            <div className="place-box">
              <p className="place-text">
                活動日：<br/>
                毎週水曜日 16:00~18:00<br/>
                （月に１〜２回ほど土曜日もあります）<br/>
              </p>
            </div>
          </div>
          <div className="place-img">
            <img src={placeImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}