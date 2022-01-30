import React, { PureComponent } from 'react';
import './Pallette.css';
import {  generateSingleColorPalette } from './ColorHelpers';
import ColorBox from './ColorBox';
import Navbar from './Navbar';

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
        const { palette: {colors, paletteName, emoji}, params: {colorId} } = this.props
        const shadeArr =  generateSingleColorPalette(colors, colorId)

        return (
            <div className='pallette'>
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

// render() {
//     const { paletteHue, format } = this.state
//     const {colors, paletteName, emoji } = this.props.palette
//     return (
//         <div className="pallette">
//            <Navbar hue={paletteHue} changeHue={this.changeHue} changeFormat={this.changeFormat} />
//             <div className='pallette-colors'>
//                 {colors[paletteHue].map(color => {
//                     return <ColorBox 
//                                 key={color.id} 
//                                 name={color.name} 
//                                 color={color[format]} 
//                                 id={color.id} 
//                                 paletteId = {this.props.palette.id}
//                             />
//                 })}
//             </div>
//             <footer className='palette-footer'>{paletteName}
//                 <span className='emoji'>{emoji}</span>
//             </footer>
//         </div>
//     )
// }