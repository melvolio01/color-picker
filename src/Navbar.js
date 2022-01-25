import React, { PureComponent } from 'react'
import Slider from 'rc-slider';
import { Select, MenuItem } from '@material-ui/core';
import 'rc-slider/assets/index.css';
import './Navbar.css'

class Navbar extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            format: 'hex'
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        e.preventDefault();
        const { value } = e.target
        this.setState({ format: value});
        this.props.changeFormat(value);
    }

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
                <div>
                    <div className='select-container'>
                        <Select value={this.state.format} onChange={this.handleChange}>
                            <MenuItem value='hex'>Hex - #FFF</MenuItem>
                            <MenuItem value='rgb'>RGB - 255, 255, 255</MenuItem>
                            <MenuItem value='rgba'>RGBA - 255, 255, 255, 1.0</MenuItem>
                        </Select>
                    </div>
                </div>   
            </header>
        )
    }
}

export default Navbar