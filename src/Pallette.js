import React, { PureComponent } from 'react'

class Pallette extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        console.log(this.props.colors);
        return (
            <div className="pallette">
                <div className='color-box'></div>
            </div>
        )
    }
}

export default Pallette