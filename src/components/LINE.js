import React from 'react';
import LINE from '../imgs/Line.jpg';
import { Box } from '@material-ui/core';
  
export default () => {
  return (
    <section id="line">
      <div className="inner line-inner">
        <h2 className="line-title">LINE@<br/>友達募集中!</h2>
        <p className="line-text">STINGの公式LINEでは新歓イベントの情報やサークルの説明会、イベントの様子などを配信しています！<br/>
        友達登録してLINEでしか得られないSTINGの情報をGetしよう！</p>
        <Box textAlign='center'>
          <img src={LINE} className="line-img" alt="" />
          <p className="line-note" >※QRコードを読み込むとSTINGの代表LINEとつながります。<br/>そこで「新歓グループに入りたいです！」とメッセージを送ってください。</p>
        </Box>
      </div>
    </section>
  )
};