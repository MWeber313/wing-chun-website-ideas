'use strict';

const footerItem = React.createElement;

class FooterBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
        <div>
            <p>Join us on Facebook</p>
            <p>Follow us on Twitter</p>
            <p>Check us out on YouTube</p>
            <p>
                Fei Mong Wing Chun &copy; Ed Dumancas <br/>
                Website built and designed by <a href="#">Mackenzie Weber</a> 
            </p>
        </div>
        )

    }
}

const footerContainer = document.getElementById('react-footer-container')
ReactDOM.render(footerItem(FooterBar), footerContainer);