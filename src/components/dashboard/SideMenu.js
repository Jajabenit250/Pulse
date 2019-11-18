import React, { Component } from 'react';
import logo from '../../images/logoPulse.png';
import './styles.css';

class SideMenu extends Component {

    render() {

        // this where the side menu component is implemented
        return (
            <div className="side-menu">
                <img src={logo} alt="Logo" className="img-dashboard" />
                <div className="info">
                    <div className="avatar"></div>
                    <h2>John Doe</h2>
                    <p>john.doe@gmail.com</p>
                    <div className="btn__container"><button className="btn-dashboard">Sign out</button></div>
                </div>
            </div>
        )
    }
}

export default SideMenu