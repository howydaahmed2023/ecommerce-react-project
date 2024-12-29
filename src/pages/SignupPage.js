import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAddNewUserMutation } from '../Redux/userDummyApi'
import { ToastContainer, toast } from 'react-toastify';

const SignupPage = () => {
    const [form ,setForm] = useState(
        {   name:'',
            lastName:"",
            age:'',
           
        }
    )
    const [addNewUser] = useAddNewUserMutation()
    const handleChange =  (e)=>{
           setForm({...form,[e.target.name]:e.target.value}) 
    }
    const handleSubmit = async(e)=>{
   e.preventDefault()
        console.log(form)
        addNewUser(form)
        
        setForm({...form})
           toast.success("account created", {
                                position: "top-left",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: false,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "dark",
                            
                                });
    }
  return (
    <div className='container' >
         <ToastContainer/>
    <div className='row text-center'>
        <motion.div className='col'
         initial={{opacity:0,y:-20}}
         animate ={{opacity:1,y:0}}
         transition={{duration:0.8,delay:0.2}}
         
         >
        <h1 className='mt-2'>Create your Acount</h1>
        </motion.div>
        
    </div>
  
   <motion.div className='row justify-content-center my-5 '
    initial={{opacity:0,y:20}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.8,delay:0.2}}>
    <div className='col-4 bg-dark rounded p-2'>
      
        <form onSubmit={handleSubmit}>
        <div class="mb-3 mt-3">
<label for="Model Name" class="form-label">First Name:</label>
<input type="text" required class="form-control" id="name" placeholder="Enter Full Name" name="name" value={form.name} onChange={handleChange}/>
</div>
      
<div className="mb-3 mt-3">
<label for="lastName" class="form-label">lastName </label>
<input type="lastName" class="form-control" id="lastName" required placeholder="last name" name="lastName" value={form.lastName} onChange={handleChange}/>
</div>
<div className="mb-3 mt-3">
<label for="pwd" class="form-label">Age:</label>
<input type="text" class="form-control" id="age" required placeholder="123456" name="age" value={form.age} onChange={handleChange}/>
</div>

<div className='mb-3 mt-3'>
    <button className='btn btn-outline-warning w-100' type="submit">sign up</button>
</div>

        </form>
        <div className='mt-3 mb-3 text-center'>
        <p>Already have an Account ? <Link to={'/login'} className='text-light'> Login here</Link></p>
        </div>
       
    </div>
   </motion.div>
</div>
  )
}

export default SignupPage