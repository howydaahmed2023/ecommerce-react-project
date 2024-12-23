import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="container-fluid bg-dark text-light ">
        <div className="row  align-content-around p-3">
          <div className="col-6">
            <h4 className="prata-regular mb-3">FOREVER</h4>
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              sagittis vel massa ut tristique. Sed euismod semper faucibus. Sed
              facilisis velit ac nunc malesuada, ut fringilla dui tincidunt.
              Vestibulum vel tempor velit. Donec vel consectetur mauris, vel
              iaculis felis. Sed ut tellus a velit egestas pharetra. Nulla
              facilisi.
            </p>
          </div>
          <div className="col-3">
            <h4>Company</h4>
            
              <p >Home</p>
              <p >About us</p>
              <p >delivery</p>
              <p >privacy policy</p>
            
          </div>
          <div className="col-3">
            <h4>Get In Touch</h4>
            
            
              <p>+2 012502214544</p>
              <p>services@gmail.com</p>
              
              
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer