import React, { PureComponent } from 'react'
import Slider from 'rc-slider';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from 'react-router-dom';
import 'rc-slider/assets/index.css';
import './Navbar.css'

class Navbar extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            format: 'hex',
            open: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    }

    handleChange = (e) => {
        e.preventDefault();
        const { value } = e.target
        this.setState({ format: value, open: true}, ()=> {});
        this.props.changeFormat(value);
    }

    closeSnackbar = () => {
        this.setState ({ open: false})
    }

    render() {
        const { hue, changeHue, showSlider } = this.props;
        const { format } = this.state;
        return (
            <header className='navbar'>
                <div className='logo'>
                    <Link to='/'>React Color Picker</Link>
                </div>
                {showSlider &&<div className='slider-container'> 
                    <span>Level: {hue}</span>   
                     <div className='slider'>
                        <Slider defaultValue={hue} min={100} max={900} onAfterChange={changeHue} step={100}/>
                    </div>
                </div>}
                <div>
                    <div className='select-container'>
                        <Select value={format} onChange={this.handleChange}>
                            <MenuItem value='hex'>Hex - #FFF</MenuItem>
                            <MenuItem value='rgb'>RGB - 255, 255, 255</MenuItem>
                            <MenuItem value='rgba'>RGBA - 255, 255, 255, 1.0</MenuItem>
                        </Select>
                    </div>
                </div>
                <Snackbar
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    open={this.state.open}
                    autoHideDuration={3000}
                    message={
                        <span id='message-id'>
                        Format Changed To {format.toUpperCase()}
                        </span>
                    }
                    ContentProps={{
                        "aria-describedby": "message-id"
                    }}
                    onClose={this.closeSnackbar}
                    action={[
                        <IconButton
                        onClick={this.closeSnackbar}
                        color='inherit'
                        key='close'
                        aria-label='close'
                        >
                        <CloseIcon />
                        </IconButton>
                    ]}
                />
            </header>
        )
    }
}

export default Navbar