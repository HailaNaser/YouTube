import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Routes, Route, useParams } from 'react-router-dom';
import Head from '../Components/Head';
import { Link , useNavigate} from "react-router-dom";


 function Details() {
    const {id} = useParams();
    const [showCommit , setShowCommit] = useState([]);
    const [liked, setLiked] = useState(false);
    const [userData , setUserData] = useState({})
    const [elementGet , setElementGet] = useState([]);
    const navegate = useNavigate()

    const handleClick = ()=> {
        const userId = localStorage.getItem('user');
        if(!userId){
            navegate('/SignNew')
        }
        axios.post('https://6657370d9f970b3b36c86882.mockapi.io/API', {
            comment : showCommit,
            userid : localStorage.getItem('user')

        })
        .then((res)=> {
            setShowCommit("")
        })
    }



    useEffect(()=> {
        axios.get('https://6657370d9f970b3b36c86882.mockapi.io/API').then((res)=> {
           setElementGet(res.data)

        })
        const storeData = {
            name: localStorage.getItem('name'),
            username: localStorage.getItem('username')
        }
        setUserData(storeData)
    },[])

    useEffect(()=> {
        const storelike = localStorage.getItem('liked');
        if(storelike){
            setLiked(JSON.parse(storelike))
        }
        // setUserData(storelike)
    },[])

    const handleLike =()=> {
       const nLiked = !liked;
        setLiked(nLiked);
        localStorage.setItem('liked', JSON.stringify(nLiked));
    };
    // }

    const Delete = (id) => {
        axios.delete(`https://6657370d9f970b3b36c86882.mockapi.io/API/${id}`).then((res)=> {
            setElementGet(elementGet)
            alert('Your comment has been deleted')
        })
    }

  return (
    <div>
        <div className=''>
            <div className="main-vedio">
                <div className="video-box">
                <div className='v-b pl-[40px]'>
                  <div className="logo flex align-center">
                <div className="menu mr-[20px] mt-[15px]">
                <i class="fa-solid fa-bars text-[16px]"></i>
                </div>
                <div className="img-logo mt-[15px] ml-[40px]">
                    <img className='h-[30px] w-[80px] ml-[-20px] mr-[80px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/800px-YouTube_Logo_%282013-2017%29.svg.png" alt="" />
                </div>
                <Head/>
            </div>
                {/* end logo */}
              
            <iframe className='vedioYoutube detail rounded-[10px]' width="853" height="480"  src={`https://www.youtube.com/embed/${id}`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="icons-box flex mt-[20px] pl-[40px] crnter">
                {/* start */}
                <div className="d-box imgs flex pr-[25px] bg-[#fff]">
                <img src="https://wallpapers.com/images/hd/black-and-white-profile-pictures-2000-x-3000-w3ecwrxkf1tayp16.jpg" className='w-[40px] h-[40px] rounded-[50%] mr-[10px]' alt="" />
                <p className='mb-[10px] text-[14px] w-[100px]'>2.6K subscribers</p>
                </div>
                {/* end img */}
                <div className=" d-box sub flex ">
                <i class="fa-regular fa-bell"></i>
                <p>Subscribed</p>
                <i class="fas fa-angle-double-down"></i>
                </div>
                {/* end sub */}
                <div className="d-box likes flex">
                {liked ? (
                    <i className="fas fa-thumbs-up" onClick={handleLike}></i>
                ) : (
                    <i className="far fa-thumbs-up" onClick={handleLike}></i>
                )}
                <p>Like</p>
                <p className='mt-[2px]'>
                <i class="far fa-thumbs-down"></i>
                </p>
                </div>
                {/* end */}
                <div className="d-box share flex">
                <i class="fas fa-share"></i>
                <p>Share</p>
                </div>
                {/* end */}
                <div className=' d-box flex'>
                <i class="fas fa-download"></i>
                <p>Download</p>
                </div>
                {/* end */}
                <div className=" d-box more flex pl-[20px]">
                    <i class="fas fa-ellipsis-h"></i>
                    </div>
            </div>
            <div className='pl-[40px]'>
            <div className='space-text bg-[#f2f2f2] pl-[10px]  w-[853px] pt-[10px] rounded-[8px] mt-[20px] pb-[20px]'>
                <h3 className='text-[#565656] font-semibold pt-[10px] mb-[10px]'>277,156 views  30 Jun 2024 </h3>
                <p className='text-[#555555] text-[14px]'>Please turn on CC in the video settings for subtitles! ❤
                    Sorry for the late update, and thank you all for waiting. 
                    I hope you have a wonderful Sunday!
                </p>
            </div>
            {/* start comment */}
            <p className='font-semibold pt-[10px] mb-[10px]'>Comments</p>
            <div className='flex mt-[10px] mb-[10px]'>
                <p className='pinktt w-[30px] h-[30px] mr-[20px]  text-[#fff] bold  bg-[#eb407a] rounded-[50%] text-center'>H</p>
                <input type="text" value={showCommit} onChange={(e)=> setShowCommit(e.target.value)} className='inputcommnt w-[805px]'placeholder='Add a comment...'/>
            
                </div>
                <div className='fotter-ved flex w-[870px] mt-[20px] mb-[20px]'>
                <i class="far fa-smile"></i>
                <div className='flex ml-[5vw]'>
                    <button className='mr-[15px]'>Cancel</button>
                    {/* <Link to='/SignNew'> */}
                    <button className='commit' onClick={handleClick}>Commit</button>
                    {/* </Link> */}
                    
                </div>
            </div>
                {/* end comment */}
                {elementGet.map((el)=> {
                        return <div className='container mb-[20px] w-[870px]'>
                            <div key={el.id} className='name-commit flex'>
                            <p className='pink w-[30px] h-[30px] mr-[10px] mb-[10px]  mt-[10px] text-[#fff] bold  bg-[#b09da3] rounded-[50%] text-center'>H</p>
                            <p>@{userData && userData.name ?  userData.name : 'U'}</p>
                            </div>
                            <div class='boc-comitt flex justify-between'>
                            <div className='tweet wrap'>{el.comment}</div>
                            <button onClick={()=>(Delete(el.id))}><i className="fas fa-ellipsis-h mr-[20px] p-[10px] text-[gray]"></i></button>
                            </div>
                            <div className="d-box likes bg-[transparent] flex">
                            <i class="far fa-thumbs-up"></i>
                            <p className='mt-[5px]'>
                            <i class="far fa-thumbs-down"></i>
                            </p>
                            <p>reply</p>
                            </div>
                             </div>
                    })}
                </div>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details

