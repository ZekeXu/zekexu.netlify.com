import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Footer from '../components/Footer';
import './index.css';
import favicon from '../assets/images/favicon.ico';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="ZekeXu's Blog"
      meta={[
        { name: 'author', content: 'ZekeXu' },
        { name: 'description', content: 'The blog shared by ZekeXu' },
        { name: 'keywords', content: 'post, blog, ZekeXu' }
      ]}
      link={[
        {
          rel: 'shortcut icon',
          href: favicon
        }
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0
      }}
    >
      {children()}
    </div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
