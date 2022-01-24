import React, { PureComponent } from 'react'
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import './Pallette.css'

class Pallette extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            paletteHue: 400 
        }

        this.changeHue = this.changeHue.bind(this);
    }

    changeHue = (hue) => {
        this.setState({ paletteHue: hue});
    }

    render() {
        const { paletteHue } = this.state
        const {colors } = this.props.palette
        return (
            <div className="pallette">
               <Navbar hue={paletteHue} changeHue={this.changeHue}/>
                <div className='pallette-colors'>
                    {colors[paletteHue].map(color => {
                        return <ColorBox name={color.name} color={color.hex} />
                    })}
                </div>
            </div>
        )
    }
}

export default Pallette