'use strict';

const headerItem = React.createElement;

class HeaderBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
            <nav>
            <a href="index.html">Home</a>
            <a href="about.html">About Us</a>
            <a href="acot.html">A Cup of Tea</a>
            <a href="videos.html">Videos</a>
            <a href="classes.html">Classes</a>
            <a href="story.html">Sifu's Story</a>
            <a href="contact.html">Contact Us</a>
            </nav>
        </div>
    )
    }
}

const headerContainer = document.getElementById('react-header-container')
ReactDOM.render(headerItem(HeaderBar), headerContainer);