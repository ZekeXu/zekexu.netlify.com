import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    style={{
      background: '#334252',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h2 style={{ margin: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          前端记事
        </Link>

        {/* <a href="https://github.com/ZekeXu" style={{color: '#fff', fontSize: '16px'}}>Github</a> */}
      </h2>
    </div>
  </div>
)

export default Header
