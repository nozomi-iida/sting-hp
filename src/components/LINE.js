import React from 'react';
import Button from '@material-ui/core/Button';
  
export default () => {
  return (
    <section id="line">
      <div className="inner line-inner">
        <h2 className="line-title">LINE@<br/>友達募集中!</h2>
        <p className="line-text">STINGの公式LINEでは新歓イベントの情報やサークルの説明会、イベントの様子などを配信しています！<br/>
        友達登録してLINEでしか得られないSTINGの情報をGetしよう！</p>
        <Button 
          variant="contained" 
          href="#contained-buttons" 
          style={
            {backgroundColor:"#fff"},
            {color:"#05b53b"}
          }
        >
          友達登録
        </Button>
      </div>
    </section>
  )
};