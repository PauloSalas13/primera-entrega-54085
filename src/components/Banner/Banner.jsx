import React from 'react'

const Banner = (props) => {


    console.log(props.saludo);

  return (
    <div className="jumbotron text-center banner-container">
      <h1 className="display-4" style={{ marginBottom: '30px' }}></h1>
      <h1 className="display-4" style={{ marginBottom: '20px' }}>{props.saludo}</h1>
    </div>
  )
}

export default Banner