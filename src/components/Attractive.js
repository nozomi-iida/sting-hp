import React from 'react';
import Button from '@material-ui/core/Button';

export default () => {
  return (
    <section id="attractive">
      <div className="inner attractive-inner">
        <h2 className="title">STINGの3つの魅力</h2>
        <div className="attractive-container">
          <div className="attractive-box">
            <h3 className="attractive-title">1.テニス</h3>
            <p className="attractive-text">コーチが１から教えてくれるから初心者でも大丈夫！<br/>
              初心者、経験者関係なく、みんなが楽しめます！</p>
          </div>
          <div className="attractive-box">
            <h3 className="attractive-title">2.イベント</h3>
            <p className="attractive-text">幹部が楽しいイベントを企画してくれます！<br/>
              イベントを通じてサークルのみんなと仲良くなろう！</p>
          </div>
          <div className="attractive-box">
            <h3 className="attractive-title">3.プライベート</h3>
            <p className="attractive-text">プライベートでもサークルでよく遊ぶよ!<br/>
              STINGに入ればプライベートが充実すること間違いなし！？</p>
          </div>
        </div>
            <Button 
              variant="contained" 
              color="secondary" 
              href="#contained-buttons" 
              style={
                {backgroundColor:"#FDD000"}}
            >
              詳しく知りたい！
            </Button>
      </div>
    </section>
  )
}