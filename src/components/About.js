// Create your About component here
import IMG from '../assets/Detective.png';

const About = () => {
    return (
        <div id="about" className="about">
                    <h1 className="about-heading">About Me</h1>
                    <div className="about-info">

                        <p className="about-desc">Hello! I'm Mitchell Chepkoech. I am a software architect with a passion for building scalable and efficient applications. 
                        My expertise lies in designing robust architectures and leading development teams to deliver high-quality software solutions.</p>
                        <div className="about-img">
                            <div className="about-img-wrapper">
                            <img src={IMG} alt="Detective" />
                        </div>
                    </div>
                    </div>
        </div>

    )
}
export default About;