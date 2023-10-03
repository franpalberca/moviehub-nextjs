import styles from './footer.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
	return (
			<div>
				<div className={styles.footer}>
					<div className={styles.footer__links}>
						<div className={styles.footer__links__left}>
							<a href="https://www.linkedin.com/in/fran-p-alberca/" target="_blank" rel="noopener noreferrer">
								<FontAwesomeIcon style={{ fontSize: '90px' }} icon={faLinkedin} />
							</a>
                            </div>
                            <div className={styles.footer__copyright}>&#169; Fran Pérez Alberca</div>
                            <div className={styles.footer__links__right}>
							<a href="https://github.com/franpalberca" target="_blank" rel="noopener noreferrer">
								<FontAwesomeIcon icon={faGithub} style={{color: '#151619', fontSize: '80px' }} />
							</a>
						</div>
					</div>
				</div>
			</div>
	);
};