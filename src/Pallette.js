import React, { PureComponent } from 'react'
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import './Pallette.css'

class Pallette extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            paletteHue: 400,
            format: 'hex'
        }

        this.changeHue = this.changeHue.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeHue = (hue) => {
        this.setState({ paletteHue: hue});
    }

    changeFormat = (format) => {
        this.setState({ format: format });
    }

    render() {
        const { paletteHue, format } = this.state
        const {colors, paletteName, emoji } = this.props.palette
        return (
            <div className="pallette">
               <Navbar hue={paletteHue} changeHue={this.changeHue} changeFormat={this.changeFormat} showSlider={true} />
                <div className='pallette-colors'>
                    {colors[paletteHue].map(color => {
                        return <ColorBox 
                                    key={color.id} 
                                    name={color.name} 
                                    color={color[format]} 
                                    id={color.id} 
                                    paletteId = {this.props.palette.id}
                                    showLink={true}
                                />
                    })}
                </div>
                <footer className='palette-footer'>{paletteName}
                    <span className='emoji'>{emoji}</span>
                </footer>
            </div>
        )
    }
}

export default Pallette