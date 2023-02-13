import React, { Component } from 'react';
import img from "../assets/Rectangle 40.png";
import { WhatsAppOutlined, CommentOutlined, SafetyOutlined} from "@ant-design/icons";

function Content() {
    return ( 
        <div className="content">
                <div className="h1">
                    <h1>About Us</h1>
                    <p className="content-1">
                        We display products based on the latest products we have, if you want
                            to see our old products please enter the name of the item
                    </p>
                <div className="videos">
                    <img width="800" height="315" src={img}/>
                </div>

            </div>

        <div className="chung">
            <div className="information">
                <h6>Our Mission</h6>
                <h2>Our team dedicated to help find  smart home product</h2>

        
                <div className="so">
                    <h2>20+</h2>
                    <h2>483</h2>
                    <h2>150+</h2>
                </div>
                <div className="chu">
                    <p>Years Exsmallerience</p>
                    <p>Happy Client</p>
                    <p>Project Finished</p>
                </div>
            </div>
            <div className="information-2">
                <div className='one'>
                <div className='one-1'>
                    <WhatsAppOutlined style = { { fontSize : '20px' , color : '#FFB23F' } }/> 
                </div>
                <div className='one-2'>
                <h4>24/7 Supports</h4>
                <p>24/7 support means a support service that is provided 24 hours a day and 7 days a week. </p>
                </div>
                </div>   

                <div className='one'>
                <div className='one-1'>
                    <CommentOutlined style = { { fontSize : '20px' , color : '#FFB23F' } }/> 
                </div>
                <div className='one-2'>
                <h4>Free Consultation</h4>
                <p>A free consultation is a one-on-one interaction or conversation given freely to share one's thoughts and discuss possible </p>
                </div>
                </div>   

                <div className='one'>
                <div className='one-1'>
                    <SafetyOutlined style = { { fontSize : '20px' , color : '#FFB23F' } } /> 
                </div>
                <div className='one-2'>
                <h4>Overall Guarantee</h4>
                <p>The comprehensive guarantee is required for import, warehousing, transit, processing and specific use.  </p>
                </div>
                </div>   
                

                
            </div>
        </div>

        </div>
     );
}

export default Content;