import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-green-500 p-8 flex justify-between items-center mx-auto">
            <div className="flex items-center space-x-4 container" >
                <a href="mailto:drod101997@gmail.com" className="text-white">
                    <FaEnvelope />
                </a>

                <a href="https://www.linkedin.com/in/daniel-rodriguez-5ab034245/" target="_blank" rel="noopener noreferrer" className="text-white">
                    <FaLinkedin />
                </a>

                <a href="https://github.com/drodriguez97" target="_blank" rel="noopener noreferrer" className="text-white">
                    <FaGithub />
                </a>
            </div>
            <p className="text-white font-roboto">CineMatch 2024</p>
        </footer>
    )
}

export default Footer;