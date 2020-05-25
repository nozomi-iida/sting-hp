import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

export default () => {
  return (
    <section id="footer">
      <div className="inner footer-wrap">
        <div className="footer-box">
          <ul className="footer-list">
            <li className="footer-item">Home</li>
            <li className="footer-item">About</li>
            <li className="footer-item">Event</li>
            <li className="footer-item">Member</li>
            <li className="footer-item">Q&A</li>
          </ul>
          <h1 className="hd-logo footer-logo">STING</h1>
        </div>
        <ul className="footer-icons">
          <li className="footer-icon">
            <a href="https://twitter.com/mgu_sting2020" target="_blank">
              <TwitterIcon 
                style={
                  { fontSize: 40 }
                }
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/mgu_sting2020/?hl=ja" target="_blank">
              <InstagramIcon 
                style={
                  { fontSize: 40 }
                } 
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
} 