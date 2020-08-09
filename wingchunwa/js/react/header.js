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
                <a href="../index.html">Home</a>
                <a href="html/about.html">About Us</a>
                <a href="html/acot.html">A Cup of Tea</a>
                <a href="html/videos.html">Videos</a>
                <a href="html/classes.html">Classes</a>
                <a href="html/story.html">Sifu's Story</a>
                <a href="html/contact.html">Contact Us</a>
            </nav>
        </div>
    )
    }
}

const headerContainer = document.getElementById('react-header-container')
ReactDOM.render(headerItem(HeaderBar), headerContainer);