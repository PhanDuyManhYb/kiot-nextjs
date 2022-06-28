import { Menu, MenuProps, Row, Space, Tabs } from "antd"
import { 
  EyeFilled,
  DropboxOutlined, 
  AppstoreFilled, 
  TagsFilled, 
  BookFilled,
  SwapOutlined,
} from '@ant-design/icons';
import { useState } from "react";
import MenuNavbar from './MenuNavbar'

function Navbar() {
  const { TabPane } = Tabs
  return(
    <>
      <Row align="middle" justify="space-between" className="w-full bg-white px-28">
        <p>KiotViet</p>
        <MenuNavbar />
      </Row>
      <Row align="middle" justify="space-between" className="w-full px-28 text-white h-10">
        
      </Row>
    </>
  )
}

export default Navbar