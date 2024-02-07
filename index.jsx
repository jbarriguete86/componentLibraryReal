import React from 'react';
import ReactDOM from 'react-dom/client'
import Star from "./components/Star"
import MenuExample from "./components/MenuExample"
import Badge from "./components/Badges/Badge"
import BadgeButtonExample from "./components/BadgeButtonExample"
import Banner from "./components/Banner/index"
import BannerExample from "./components/BannerExample"
import CardExample from "./components/CardExample"
import TestimonialExample from "./components/TestimonialExample"
import TooltipExample from './components/TooltipExample'
function App() {
  return (
    <div className="component-cont">
      <Star/>
      <br/>
      <MenuExample/>
      <br/>
      <Badge variant="green" form="pill">Badge Example</Badge>
      <br/>
      <BadgeButtonExample />
      <br/>
      <BannerExample/>
      <br/>
      <CardExample />
      <br/>
      <TestimonialExample />
      <br /> 
      <TooltipExample />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);


