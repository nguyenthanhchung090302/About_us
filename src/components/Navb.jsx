import React, { Component } from "react";
//  import { ShoppingOutlined } from 'antd';
import { ShoppingOutlined, UserOutlined } from "@ant-design/icons";

function Navb() {
  return (
    <div className='br'>
      <div className='nav-3'>
        <img
          src='https://png.pngtree.com/png-vector/20220722/ourmid/pngtree-hand-and-oil-drip-logo-design-png-image_6033330.png'
          className="img"
        />
        <h2>학원</h2>
        <div className="nav-4">
        
        <h4>Product</h4>
        <h4>Services</h4>
        <h4>Article</h4>
        <h4>About Us</h4>
        <div className="icon">
        <ShoppingOutlined />
        <UserOutlined className="use"/>
        </div>
        </div>
        
      </div>
      <hr />
    </div>
  );
}

export default Navb;
