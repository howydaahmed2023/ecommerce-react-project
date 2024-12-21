import React from 'react'

const Title = ({text}) => {
  return (
    <div>
          <div className="d-flex justify-content-center align-content-center">
        <h4 className="text-center display-4 text-uppercase me-2 prata-regular">
          {text}
        </h4>
        <p
          className="align-self-center bg-danger" 
          style={{ width: "80px", height: "10px" }}
        ></p>
      </div>
    </div>
  )
}

export default Title