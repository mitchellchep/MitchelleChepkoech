// Create your Header component here
const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <a href="#app"><h3 className="header-name"> Mitchell Chepkoech</h3></a>
            </div>
            <div className="header-container">
                <div className="nav-item"><a href="#about">About</a></div>
                <div className="nav-item"><a href="#projects">Projects</a></div>
                <div className="nav-item"><a href="#skills">Skills</a></div> 
            </div>   
        </div> 
    )
}

export default Header;