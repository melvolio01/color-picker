import React, { PureComponent } from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css'

class Navbar extends PureComponent {
    render() {
        const { hue, changeHue } = this.props;
        return (
            <header className='navbar'>
                <div className='logo'>
                    <a href="#">React Color Picker</a>
                </div>
                <div className='slider-container'> 
                    <span>Level: {hue}</span>   
                    <div className='slider'>
                        <Slider defaultValue={hue} min={100} max={900} onAfterChange={changeHue} step={100}/>
                    </div>
                </div>      
            </header>
        )
    }
}

export default Navbar