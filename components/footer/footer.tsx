import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {FooterStyles} from './footer.styles';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
	return (
		<FooterStyles>
			<div>
				<div className="footer">
					<div className="footer__links">
						<div className="footer__links-left">
							<a href="https://www.linkedin.com/in/fran-p%C3%A9rez-alberca-338a4b63/" target="_blank" rel="noopener noreferrer">
								<FontAwesomeIcon style={{ fontSize: '90px' }} icon={faLinkedin} />
							</a>
                            </div>
                            <div className='footer__copyright'>&#169; Fran Pérez Alberca</div>
                            <div className="footer__links-right">
							<a href="https://github.com/franpalberca" target="_blank" rel="noopener noreferrer">
								<FontAwesomeIcon icon={faGithub} style={{color: '#151619', fontSize: '80px' }} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</FooterStyles>
	);
};