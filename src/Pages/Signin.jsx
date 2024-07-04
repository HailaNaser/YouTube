import axios from 'axios';
import React, { useState , useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

 function Signin() {
    const [ theEmail, setTheEmail] = useState([]);
    const [thePassword , setThePassword] = useState([]);
    const [event , setEvent] = useState(false);
    const navegate = useNavigate()


    const handleclick = () => {
        setEvent(true);
    };

    useEffect(() => {
        if (event) {
            if(theEmail!== "" && thePassword !== ""){
                axios.get(`https://6657370d9f970b3b36c86882.mockapi.io/login`).then((res) => {
                    const result = res.data;
                    const user = result.find((el) => el.email === theEmail  && el.password === thePassword);
                    if (user ) {
                       
                        const numId = user.id
                        // localStorage.setItem('user' , numId)
                        localStorage.setItem('user', user.id);
                        localStorage.setItem('username', user.username);
                        console.log(numId)
                        console.log(result)
                        // localStorage.removeItem('user')
                        navegate(`/`);
                    }
                })
            }
            }
           
    }, [event, theEmail, thePassword, navegate]);

    
  return (
    <div>
        <div className='Signin-content text-center w-[80%] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden'>
            <img src="https://img.freepik.com/premium-photo/youtube-acrylic-glass-icon-white-background-3d-rendering_1379-5505.jpg" alt="" />
            <div className='Signin-input'>
            <input type="email" value={theEmail} onChange={(e)=> {setTheEmail(e.target.value)}} placeholder='Enter Your Email'/>
            <input type="password" value={thePassword} onChange={(e)=> {setThePassword(e.target.value)}} placeholder='Enter Your Password'/>
            <button  onClick={handleclick } className='loginbtn text-[gray]'>Login</button>

            <ul className=' reg flex mt-[0] text-center ml-[auto] p-[8px]'>
                <p className='mr-[10px]'>Don't have an account? </p>
                <li><Link to='/SignNew' className='register'>Register</Link></li>
            </ul>
            </div>

    </div>
    </div>
  )
}



export default Signin