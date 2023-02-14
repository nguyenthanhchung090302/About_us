import React, { Component } from "react";
import img1 from "../assets/Rectangle 23.png";
import img2 from "../assets/Rectangle 23 (1).png";
import img3 from "../assets/Rectangle 23 (2).png";
import img4 from "../assets/Rectangle 23 (3).png";
import img5 from "../assets/Rectangle 23 (4).png";
import img6 from "../assets/Rectangle 23 (5).png";
import { ArrowRightOutlined } from "@ant-design/icons";

function Ourteam() {
  return (
    <div className='ourteam'>
      <div className='our'>
        <h6>Our Team</h6>
      </div>
      <div className='team'>
        <h2>Meet our leading and strong team</h2>
        <p>
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </p>
      </div>
      <div className='img-team'>
        <div className="col-3">
            <div className="img-2-3">
                <img src={img1} width="200px"/>
                <br/>
                <b>Jesse Depp</b>
                <p>Founder & CEO</p>

            </div>
            <div className="img-2-3">
                <img src={img2} width="200px"/>
                <br/>
                <b>Margareth Carter</b>
                <p>COO</p>

            </div>
            <div className="img-2-3">
                <img src={img3} width="200px"/>
                <br/>
                <b>Andrew Taggart</b>
                <p>Developer</p>

            </div>           
        </div>
        <div className="col-4">
            <div className="img-2-3">
                <img src={img4} width="200px"/>
                <br/>
                <b>Grace Marie</b>
                <p>Manager</p>

            </div>
            <div className="img-2-3">
                <img src={img5} width="200px"/>
                <br/>
                <b>Jesse Depp</b>
                <p>Senior Designer</p>

            </div>
            <div className="img-2-3">
                <img src={img6} width="200px"/>
                <br/>
                <b>Jesse Depp</b>
                <p>Marketer</p>

            </div>           
        </div>        
        </div>

        <div className="are">
            <b>Are you interested work with us?</b>
            <button className="button">Let’s Talk <ArrowRightOutlined /></button>
        </div>

        <hr/>
        <div className="you">
            
        </div>
    </div>
    
  );
}

export default Ourteam;
