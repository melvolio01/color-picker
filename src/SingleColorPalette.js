import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'; 
import {  generateSingleColorPalette } from './ColorHelpers';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Pallette.css';
import './ColorBox.css';
import { palette } from '@material-ui/system';

class SingleColorPalette extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            format: 'hex'
        }

        this.changeFormat = this.changeFormat.bind(this);
    }

    changeFormat = (format) => {
        this.setState({ format: format });
    }

    render() {
        const { format } = this.state
        const { palette: {colors, paletteName, emoji, id}, params: {colorId} } = this.props
        const shadeArr =  generateSingleColorPalette(colors, colorId)
        console.log(paletteName);
        return (
            <div className='single-color-pallette pallette'>
                <Navbar changeFormat={this.changeFormat} showSlider={false} />
                <div className='pallette-colors'>
                    {shadeArr.map(color => {
                        return <ColorBox 
                                key={color.id} 
                                name={color.name} 
                                color={color[format]} 
                                id={color.id} 
                                paletteId = {this.props.palette.id}
                                showLink={false}
                            />
                    })}
                    <div className='go-back color-box'>
                        <Link to={`/palette/${id}`} 
                        style={{ textDecoration: 'none' }}
                        className='back-button'>Go Back</Link>
                    </div>
                </div>
                <footer className='palette-footer'>
                {paletteName}
                    <span className='emoji'>{emoji}</span>
                </footer>
            </div>
        )
    }
}

export default SingleColorPalette