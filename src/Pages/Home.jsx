import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar';
import Head from '../Components/Head';
import Nav from '../Components/Nav';
import axios from 'axios';
import { Link } from "react-router-dom";
import Details from './Details';




// https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&key=AIzaSyA6chFBb0ZUxZkAOj2Qrokx4uTVDxEOwtk
 function Home() {
    const [element , setElement] = useState([]);
    

    useEffect(()=> {
        axios.get('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&key=AIzaSyA6chFBb0ZUxZkAOj2Qrokx4uTVDxEOwtk')
        .then((res)=> {
            console.log(res.data.items)
            setElement(res.data.items)
        })
    },[])



  return (
    
    <div>
        <div className='home flex h-[80px] pr-[30px]'>
        <Sidebar/>
        <div className="content">
            <Head/>
            <Nav/>
            <div className="box mt-[40px]">
                {element.map((el)=> {
                return   <div className='element' key={el.id}>
                        <div className='w-[320px] mb-[20px]'>
                     
                        <iframe className='vedioYoutube rounded-[10px] ' width="320" height="250" src={`https://www.youtube.com/embed/${el.id}`} title={el.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <div className=' mt-[15px]'>
                            <div className='text-element flex'>
                            <img className='rounded-[50%] w-[50px] h-[50px] mr-[10px]' src={el.snippet.thumbnails.default.url} alt="" />
                            <div>
                            <Link to={`/Details/${el.id}`}>
                            <div className='title-box text-[15px] font-semibold text-[#0f0f0f] mb-[10px]'>{el.snippet.title}</div>
                            </Link>
                            <div className='text-[12px] mb-[10px] text-[#777]  '>{el.snippet.channelTitle}</div>
                            </div>

                            </div>
                        
                        
                        </div>
                       
                        {/* <div>{el.snippet.description}</div>  */}
                        </div>
                
                    </div>

                })}
                <h3 className='text-[#0f0f0f]'></h3>
                <p className='#606060'></p>
            </div>
        </div>
      
        </div>
      <div>
        </div>
  
     
        </div>
       
    // </div>
  )
}

export default Home