import React from 'react';
import wechatProgram from '../../assets/images/wechat-program.jpg';
import wechatGongzhong from '../../assets/images/wechat-gongzhonghao.jpg';
import style from './Footer.scss';

const Footer = () => (
  <footer className={style.footer}>
    <div className={style.imgContainer}>
      <figure>
        <img src={wechatProgram} alt="小程序"/>
        <figcaption>小程序</figcaption>
      </figure>
      <figure>
        <img src={wechatGongzhong} alt="公众号"/>
        <figcaption>关注公众号</figcaption>
      </figure>
      <ul>
        <li><a style={{color: '#fff'}} href="https://github.com/ZekeXu">Github</a></li>
        <li><a style={{color: '#fff'}}>zekexu18@outlook.com</a></li>
    </ul>
    </div>
  </footer>
);

export default Footer;
