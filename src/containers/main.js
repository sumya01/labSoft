import React, { Component } from 'react';

import Aux from '../hoc/Aux';
import Registration from '../components/doctors/registration';

class PathologyMain extends Component {
    render(){
        return (
            <Aux>
                <Registration />
            </Aux>
        )
    }
}

export default PathologyMain;
