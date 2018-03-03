import React from 'react';
import styled from 'styled-components';
import wechatProgram from '../../assets/images/wechat-program.jpg';
import wechatGongzhong from '../../assets/images/wechat-gongzhonghao.jpg';
const FooterContainer = styled.footer`
  div {
    background-color: rgb(51, 66, 82);
    padding: 40px;
    display: flex;
    justify-content: space-around;

    & figure {
      margin: 0;
      & > img {
        margin: 0;
        width: 120px;
        height: 120px;
      }

      figcaption {
        color: aqua;
        font-size: 12px;
        text-align: center;
      }
    }

    & ul {
      list-style: none;
    }
  }
`;

const Footer = () => (
  <FooterContainer>
    <div>
      <figure>
        <img src={wechatProgram} alt="小程序" />
        <figcaption>小程序</figcaption>
      </figure>
      <figure>
        <img src={wechatGongzhong} alt="公众号" />
        <figcaption>关注公众号</figcaption>
      </figure>
      <ul>
        <li>
          <a style={{ color: '#fff' }}>ZekeXu</a>
        </li>
        <li>
          <a style={{ color: '#fff' }} href="https://github.com/ZekeXu">
            Github
          </a>
        </li>
        <li>
          <a style={{ color: '#fff' }}>zekexu18@outlook.com</a>
        </li>
      </ul>
    </div>
  </FooterContainer>
);

export default Footer;
