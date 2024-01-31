import React, { useState } from 'react'

import './Home.css';
import { FaArrowLeft, FaThemeco } from "react-icons/fa"; //arrow
import { FaRegMoon } from "react-icons/fa"; //moon
import { FaRegHeart } from "react-icons/fa"; //heart
import { BsThreeDotsVertical } from "react-icons/bs"; //3dots
const Home = () => {
  const [heart, setHeart] = useState(true);
  const [theme, setTheme] = useState(true)
   
  const handleHeart = () => {
    setHeart(!heart)
  }
  const handleTheme = () => {
    setTheme(!theme)
  }


  return (
    <div className='CardOuterPage'>
      {
      theme?<div className="cardMainConatiner">
      <div className='topCardMainConatiner'>
          <div className='toplogocontainer'>
            <div className='toplogocontainerArrow'>
              <FaArrowLeft />
            </div>
            <div className='toplogocontainerRemainingIcons'>
               <div>
               <BsThreeDotsVertical />
               </div>

              <div onClick={handleTheme}>
                {
                  theme ? <div><FaRegMoon style={{ color: "white" }} /></div> : <div style={{ color: "black" }}><FaRegMoon /></div>
                }
              </div>

              <div onClick={handleHeart}>
                {
                  heart ? <div><FaRegHeart style={{ color: "white", marginRight:"5px" }} /></div> : <div ><FaRegHeart style={{ color: "red", marginRight:"5px",color:"red" }}/></div>
                }
              </div>
              

            </div>
          </div>
          <div className='imageTopConatiner'>
            <div className='imageContentTopConatiner'>
              <img id="imgStyle" src="data:image/jpeg;base64,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" width="100%" height="100%" />
            </div>
            <div style={{ textAlign: "center" }}>

            </div>
          </div>
          <div className='topheadingConatiner' style={{ textAlign: "center" }}>
            <h1>Djvoue</h1>
            <p>Design Track</p><br />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni nostrum commodi labore minima excepturi, quaerat in alias doloremque porro? Sit nobis iure eaque, animi odio exercitationem architecto.</p>
          </div>
        </div>
        <div className='bottomCardMainConatiner'>
          <button id="btnstyle">Add User 1</button>
        </div>
      
      
      </div>:<div className="ColoredCardMainConatiner">

      <div className='topCardMainConatiner'>
          <div className='toplogocontainer'>
            <div className='toplogocontainerArrow'>
              <FaArrowLeft />
            </div>
            <div className='toplogocontainerRemainingIcons'>
               <div>
               <BsThreeDotsVertical />
               </div>

              <div onClick={handleTheme}>
                {
                  theme ? <div><FaRegMoon style={{ color: "black" }} /></div> : <div style={{ color: "color" }}><FaRegMoon /></div>
                }
              </div>

              <div onClick={handleHeart}>
                {
                  heart ? <div><FaRegHeart style={{ color: "white", marginRight:"5px" }} /></div> : <div ><FaRegHeart style={{ color: "red", marginRight:"5px",color:"red" }}/></div>
                }
              </div> 
              

            </div>
          </div>
          <div className='imageTopConatiner'>
            <div className='imageContentTopConatiner'>
              <img id="imgStyle" src="data:image/jpeg;base64,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" width="100%" height="100%" />
            </div>
            <div style={{ textAlign: "center" }}>

            </div>
          </div>
          <div className='topheadingConatiner' style={{ textAlign: "center" }}>
            <h1>Djvoue</h1>
            <p>Design Track</p><br />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni nostrum commodi labore minima excepturi, quaerat in alias doloremque porro? Sit nobis iure eaque, animi odio exercitationem architecto.</p>
          </div>
        </div>
        <div className='bottomCardMainConatiner'>
          <button id="btnstyle">Add User 1</button>
        </div>

      </div>
    }
      {/* <div className="cardMainConatiner"> */}
        {/* <div className='topCardMainConatiner'>
          <div className='toplogocontainer'>
            <div className='toplogocontainerArrow'>
              <FaArrowLeft />
            </div>
            <div className='toplogocontainerRemainingIcons'>
               <div>
               <BsThreeDotsVertical />
               </div>

              <div onClick={handleTheme}>
                {
                  theme ? <div><FaRegMoon style={{ color: "white" }} /></div> : <div style={{ color: "black" }}><FaRegMoon /></div>
                }
              </div>

              <div onClick={handleHeart}>
                {
                  heart ? <div><FaRegHeart style={{ color: "white", marginRight:"5px" }} /></div> : <div ><FaRegHeart style={{ color: "red", marginRight:"5px",color:"red" }}/></div>
                }
              </div>
              

            </div>
          </div>
          <div className='imageTopConatiner'>
            <div className='imageContentTopConatiner'>
              <img id="imgStyle" src="data:image/jpeg;base64,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" width="100%" height="100%" />
            </div>
            <div style={{ textAlign: "center" }}>

            </div>
          </div>
          <div className='topheadingConatiner' style={{ textAlign: "center" }}>
            <h1>Djvoue</h1>
            <p>Design Track</p><br />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni nostrum commodi labore minima excepturi, quaerat in alias doloremque porro? Sit nobis iure eaque, animi odio exercitationem architecto.</p>
          </div>
        </div>
        <div className='bottomCardMainConatiner'>
          <button id="btnstyle">Add User 1</button>
        </div> */}
      {/* </div> */}
    </div>
  )
}

export default Home
