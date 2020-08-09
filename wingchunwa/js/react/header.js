'use strict';

const headerItem = React.createElement;

class HeaderBar extends React.Component {
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

const headerContainer = document.getElementById('header-bar-container')
ReactDOM.render(headerItem(HeaderBar), headerContainer);