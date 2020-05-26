import React from 'react';
  
export default () => {
  return (
    <section id="line">
      <div className="inner line-inner">
        <h2 className="line-title">LINE@<br/>友達募集中!</h2>
        <p className="line-text">STINGの公式LINEでは新歓イベントの情報やサークルの説明会、イベントの様子などを配信しています！<br/>
        友達登録してLINEでしか得られないSTINGの情報をGetしよう！</p>
        <div className="line-button">
          <div 
            className="line-it-button" 
            data-lang="ja" 
            data-type="friend" 
            data-lineid="@dattyo01" 
            data-count="true" 
            data-home="true"
            style={{width: '200px'}}
          >
          </div>
        </div>
      </div>
    </section>
  )
};