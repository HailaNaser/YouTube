import React from 'react'

function Head() {
  return (
    <div className='head ml-[30px] flex justify-between'>
                <div className="center-home head w-[100%] h-[80px] mr-[150px]  pt-[10px] ml-[auto] pl-[10px]">
                <div className="search  flex">
                    <div className='flex'>
                    <input type="text" placeholder='Search' className='Search pl-[5px]' />
                    <button className='btnSearch'><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <div className='micro'><i class="fa-solid fa-microphone"></i></div>
                </div>
        
            </div>
            <div className="right-icon pt-[15px] flex h-[80px]  ">
                <div className='mr-[20px]'>
           <i class="fa-solid fa-video"></i>   </div>
                <div  className='mr-[20px]'>
                <i class="far fa-bell"></i>
                </div>
              
                <p className='pink w-[30px] h-[30px] text-[#fff] bold  bg-[#eb407a] rounded-[50%] text-center'>H</p>
                </div>

        {/* </div> */}
    </div>
  )
}

export default  Head