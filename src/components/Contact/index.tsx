import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Icon, IconProp } from '@fortawesome/fontawesome-svg-core';
import './styles.css';

export default function Contact() {
    return (
        <section id="contact">
            <h2>Contact</h2>
            <div>
                <a className='linkedin' href="https://www.linkedin.com/in/joaoggbs/" target='_blank'><FontAwesomeIcon icon={faLinkedinIn as IconProp} /></a>
                <a className='whatsapp' href="https://api.whatsapp.com/send?phone=5512988150491"><FontAwesomeIcon icon={faWhatsapp as IconProp} /></a>
                <a className='github' href="https://github.com/joaogabgr"><FontAwesomeIcon icon={faGithub as IconProp} /></a>
            </div>
        </section>
    );
}
