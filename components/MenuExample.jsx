import React from 'react';
import Menu from "./Menu/index"

export default function MenuExample() {
  return (
    <>
      <Menu onOpen={() => console.log("Opened/closed")}>
        <Menu.Button>Menu</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>About</Menu.Item>
          <Menu.Item>Contact</Menu.Item>
          <Menu.Item>Blog</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  )
}