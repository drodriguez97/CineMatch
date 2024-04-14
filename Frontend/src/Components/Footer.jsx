import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-green-500 p-8 flex justify-between items-center mx-auto">
            <div className="flex items-center space-x-4 container" >
                <a href="mailto:your.email@example.com" className="text-white">
                    <FaEnvelope />
                </a>

                <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="text-white">
                    <FaLinkedin />
                </a>

                <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" className="text-white">
                    <FaGithub />
                </a>
            </div>
            <p className="text-white font-roboto">CineMatch 2024</p>
        </footer>
    )
}

export default Footer;