import React from 'react';



 function Sidebar() {
  return (
    <div>
        <div className='Sidebar w-[250px] mr-[20px]'>
            <div className="logo flex">
                <div className="menu">
                <i class="fa-solid fa-bars text-[16px]"></i>
                </div>
                <div className="img-logo">
                    <img className='h-[30px] w-[80px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/800px-YouTube_Logo_%282013-2017%29.svg.png" alt="" />
                </div>
            </div>
            <ul>
                <div className='box-nav flex'>
                <i class="fa-solid fa-house"></i>
                <li>Home</li>
                </div>
                {/* end  */}
                <div className='box-nav flex'>
                <i class="fa-solid fa-circle-play"></i>
                <li>Shorts</li>
                </div>
                {/* end  */}
                <div className='box-nav flex'>
                <i class="fa-solid fa-closed-captioning"></i>
                <li>Subscriptions</li>
                </div>
                {/* end  */}
                {/* sectionTwo */}
                <div className='box-nav mt-[-5px] flex'>
                <p className='you'>You</p>
                <i class="fa-solid fa-chevron-right mr-[100px]"></i>
                {/* <li className='text-[22px]'>></li> */}
                </div>
                <div className='box-nav flex'>
                <i class="fa-solid fa-house"></i>
                <li>Your Channel</li>
                </div>
                  {/* end  */}
                <div className='box-nav flex'>
                <i class="fa-solid fa-clock-rotate-left"></i>
                <li>History</li>
                </div>
                  {/* end  */}
                <div className='box-nav flex'>
                <i class="fa-solid fa-list"></i>
                <li>Playlists</li>
                </div>
                  {/* end  */}
                <div className='box-nav flex'>
                <i class="fa-regular fa-file-video"></i>
                <li>Your vedeos</li>
                </div>
                  {/* end  */}
                <div className='box-nav flex'>
                <i class="fa-regular fa-clock"></i>
                <li>Watch Later</li>
                </div>
                  {/* end  */}
                <div className='box-nav flex pb-[20px]'>
                <i class="fa-regular fa-thumbs-up"></i>
                <li className=''>Liked videos</li>
                </div>
                  {/* end  */}
                  <div>
                  {/* <h3>Subscriptions</h3> */}
                  </div>
                  <h3 className='explore ml-[25px] bold mb-[15px]'>Explore</h3>
                  {/* <div>
                  
                    <i class="fa-solid fa-play"></i>
                    <li>Trending</li>
                  </div> */}
                  {/* end */}
                  <div className='box-nav flex'>
                  <i class="fa-solid fa-fire"></i>
                  <li>Trending</li>
                  </div>
                  {/* end  */}
                  <div className='box-nav flex'>
                  <i class="fa-solid fa-music"></i>
                <li>Music</li>
                </div>
                  {/* end  */}
                  <div className='box-nav flex'>
                <i class="fa-regular fa-thumbs-up"></i>
                <li>Live</li>
                </div>
                  {/* end  */}
                  <div className='box-nav flex'>
                  <i class="fa-solid fa-gamepad"></i>
                <li>Gaming</li>
                </div>
                  {/* end  */}
                  <div className='box-nav flex'>
                  <i class="fa-solid fa-trophy"></i>
                <li>Sport</li>
                </div>
                {/* /////////////////////// */}
                  {/* end  */}
                  <div className='box-nav flex'>
                  <i class="fa-solid fa-gear"></i>
                <li>Settings</li>
                </div>
                  {/* end  */}
                  <div className='box-nav flex'>
                  <i class="fa-solid fa-trophy"></i>
                <li>Report history</li>
                </div>
                  {/* end  */}
                  <div className='box-nav flex'>
                  <i class="fa-solid fa-question"></i>
                <li>Help</li>
                </div>
                  {/* end  */}
                  <div className='box-nav flex'>
                  <i class="fa-solid fa-comment-dots"></i>
                <li>Send feedback</li>
                </div>
                  {/* end  */}
                  <p className='footer text-[#575656] text-[14px] mb-[10px]'>AboutPressCopyrightContact usCreatorsAdvertiseDevelopers</p>
                  <p className='text-[#575656] text-[14px] mb-[10px]'> TermsPrivacyPolicy & SafetyHow YouTube worksTest new features</p>
                  <p className='text-[#777]'>© 2024 Google LLC</p>
              
            </ul>
        </div>
    </div>
  )
}

export default Sidebar