import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Customer Creative Orchestrator</title>
        <meta property="og:title" content="Customer Creative Orchestrator" />
      </Helmet>
    </div>
  )
}

export default Home
