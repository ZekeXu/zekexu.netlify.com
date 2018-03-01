import React from 'react';
import wechatProgram from '../../assets/images/wechat-program.jpg';
import wechatGongzhong from '../../assets/images/wechat-gongzhonghao.jpg';
import style from './Footer.css';

const Footer = () => (
  <footer className={style.footer}>
    <div className={style.imgContainer}>
      <figure><img src={wechatProgram} alt="小程序"/></figure>
      <figure><img src={wechatGongzhong} alt="公众号"/></figure>
    </div>
    <ul>
      <li><a style={{color: '#fff'}} href="https://github.com/ZekeXu">Github</a></li>
      <li><a style={{color: '#fff'}}>zekexu18@outlook.com</a></li>
    </ul>
  </footer>
);

export default Footer;
