import React, { PureComponent } from 'react'
import ColorBox from './ColorBox';
import './Pallette.css'

class Pallette extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="pallette">
                <div className='pallette-colors'>
                    {this.props.colors.map(color => {
                        return <ColorBox name={color.name} color={color.color} />
                    })}
                </div>
            </div>
        )
    }
}

export default Pallette