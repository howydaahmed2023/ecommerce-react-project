import React from 'react'

const Subscribe = () => {
    
        const handleSubmit=(e)=>{
            e.preventDefault()
        }
  return (
    



  <div className='container-fluid py-4 text-primary'>
        <div className='row my-5 justify-content-center'>
            <div className='col-md-4 text-center '>
            <i class="fa fa-stack-exchange fa-3x" aria-hidden="true"></i>
                <h4 className='prata-regular text-center mt-2'>Easy Exchange</h4>
                <p>we offer hassle free exchange policy
                    
                </p>
            </div>
           
            </div>
            <div className='row justify-content-between'>
            <div className='col-md-4 text-center '>
            <i class="fa fa-recycle fa-3x" aria-hidden="true"></i>
                <h4 className='prata-regular text-center mt-2'>7-days return policy</h4>
                <p>we provide 7-days free return policy
                    
                </p>
            </div>
            <div className='col-md-4 text-center '>
            <i class="fa fa-envelope fa-3x" aria-hidden="true"></i>
                <h4 className='prata-regular text-center mt-2'>Best customer support</h4>
                <p>we provide 24/7 customer support
                    
                </p>
            </div>
            </div>
           
        
        <div className='row my-5 justify-content-center align-content-center'>
            <div className='col-md-12 text-center '>
            <i class="fa fa-id-card-o fa-3x" aria-hidden="true"></i>
                <h5 className='text-center'>Subscribe Now & Get 20% Off</h5>
                <p className='text-center'>lorem
                    ipsum dolor sit amet, consectetur adipiscing ultricies, ipsum ex consectetur
                    
                
                
                </p>
            </div>
            <div className="col-md-12">
           
                
                    <form className=" row justify-content-center mt-3" onSubmit={handleSubmit}>

                      <div className='col-auto'>
                      <input type="email" className="form-control " id="exampleFormControlInput1" placeholder="name@example.com" required/>
                        </div>  
                   <div className='col-auto'>
                   <button type="submit" className="btn btn-outline-warning">Subscribe</button>
                   </div>
                   

                 
                    </form>
                
                </div>
                

 
</div>
            </div>
        
    
  )
}

export default Subscribe;