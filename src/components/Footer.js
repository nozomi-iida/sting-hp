import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

export default () => {
  return (
    <section id="footer">
      <ul className="footer-list">
        <li className="footer-item">Home</li>
        <li className="footer-item">About</li>
        <li className="footer-item">Event</li>
        <li className="footer-item">Member</li>
        <li className="footer-item">Q&A</li>
      </ul>
      <h1 className="hd-logo">大地さん</h1>
      <ul className="footer-icons">
        <li>
          <TwitterIcon />
        </li>
        <li>
          <InstagramIcon />
        </li>
      </ul>
    </section>
  )
} 