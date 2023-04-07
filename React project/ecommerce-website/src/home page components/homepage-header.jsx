import React from 'react'
import './homepage-component.css'

function HomepageHeader() {
  return (
    <div className='homepage-header' >
        <div>
        <h1>logo</h1>
        </div>

        <div  >
      <span>Home</span>
      <span>about</span>
      <span>contact</span>
      <span>dashboard</span>
      </div>

        <div>
        <button>login</button>
        <button>logout</button>
        </div>
        
    </div>
  )
}

export default HomepageHeader