import React from 'react';
import Radium from 'radium';
// import colors from '../colors';
// import mediaQueries from '../mediaQueries';

const styles = {
    menuBar: {
        zIndex: 20,
        display: 'block',
        height: 60,
        backgroundColor: 'black',
        boxShadow: '2px 5px 5px 0 rgba(0, 0, 0, .12)',
        textAlign: 'center',
    },
    menuBarSpan: {
        display: 'inline-block',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        fontWeight: 300,
        fontSize: '2em',
        lineHeight: 60,
    },
    hambMenu: {
        position: 'relative',
        width: 40,
        height: 45,
        float: 'left',
        transition: '.5s ease-in-out',
        cursor: 'pointer',
        background: 'white',
    },
    // hambMenuSpan: {
    //     position: 'absolute',
    //     height: 5,
    //     width: '100%',
    //     verticalAlign: 'middle',
    //     margin: '20px 0 0 15px',
    //     background: 'white',
    //     borderRadius: 8,
    //     opacity: 1,
    //     left: 0,
    //     transform: 'rotate(0deg)',
    //     transition: '.25s ease-in-out',
    //     padding: 0,
    // },
    hambClicker: {
        content: '',
        height: 48,
        width: 55,
        position: 'absolute',
        top: 8,
        left: 8,
        cursor: 'pointer',
        zIndex: 9,
    },
    // hambMenuSpan1: {
    //     top: 0,
    // },
    // hambMenuSpan2: {
    //     top: 10,
    // },
    // hambMenuSpan3: {
    //     top: 10,
    // },
    // hambMenuSpan4: {
    //     top: 20,
    // },
    // hambMenuIsOpenSpan1: {
    //     top: 18,
    //     width: '0%',
    //     left: '50%',
    //     opacity: 0,
    // },
    // hambMenuIsOpenSpan2: {
    //     transform: 'rotate(45deg)',
    // },
    // hambMenuIsOpenSpan3: {
    //     transform: 'rotate(-45deg)',
    // },
    // hambMenuIsOpenSpan4: {
    //     top: 18,
    //     width: '0%',
    //     left: '50%',
    //     opacity: 0,
    // },
    menu: {
        position: 'absolute',
        height: 'calc(100vh - 60px)',
        width: 210,
        backgroundColor: 'white',
        transform: 'translateX(-100%)',
        transition: 'transform 300ms',
    },
    ul: {
        marginTop: 0,
        padding: 0,
        color: 'black',
        listStyle: 'none',
        textAlign: 'left',
    },
    li: {
        padding: '30px 0 20px 20px',
        fontSize: '1.5em',
    },
    fa: {
        color: 'black',
        paddingRight: 8,
    },
    link: {
        textDecoration: 'none',
        color: 'black',
    },
    menuIsOpen: {
        transform: 'none',
    }
}


// @media screen and(max - width: 420px)
//     .menubar span
// font - size: 1.2em



class MenuLinks extends React.Component {
    constructor(props) {
        super(props);
        // Any number of links can be added here
        this.state = {
            links: [{
                text: 'Author',
                link: 'https://github.com/Lakston',
                icon: 'fa-pencil-square-o'
            }, {
                text: 'Github page',
                link: 'https://github.com/Lakston',
                icon: 'fa-github'
            }, {
                text: 'Twitter',
                link: 'https://twitter.com/Fab_is_coding',
                icon: 'fa-twitter'
            }]
        }
    }
    render() {
        let links = this.state.links.map((link, i) => <li ul style={styles.li} key={i} ref={i + 1}><i aria-hidden="true" style={styles.fa}></i><a href={link.link} target="_blank">{link.text}</a></li>);
        
        return (
            <div style={this.props.menuStatus === 'isopen' ? [styles.menu, styles.menuIsOpen] : styles.menu} id='menu'>
                <ul style={styles.ul}>
                    {links}
                </ul>
            </div>
        )
    }
}

class SlideMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this._menuToggle = this._menuToggle.bind(this);
        this._handleDocumentClick = this._handleDocumentClick.bind(this);
    }
    componentDidMount() {
        document.addEventListener('click', this._handleDocumentClick, false);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this._handleDocumentClick, false);
    }
    _handleDocumentClick(e) {
        if (!this.refs.root.contains(e.target) && this.state.isOpen === true) {
            this.setState({
                isOpen: false
            });
        };
    }
    _menuToggle(e) {
        e.stopPropagation();
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        let menuStatus = this.state.isOpen ? 'isopen' : '';

        return (
            <div ref="root">
                <div style={styles.menuBar}>
                    <div style={styles.hambClicker} onClick={this._menuToggle}></div>
                    <div style={styles.hambMenu}><span></span><span></span><span></span><span></span></div>
                    <div className="title">
                        <span>Awesome Title</span>
                    </div>
                </div>
                <MenuLinks menuStatus={menuStatus} />
            </div>
        )
    }
}

export default Radium(SlideMenu)