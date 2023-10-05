'use client'
import { useRouter } from 'next/navigation';
import styles from './button.module.css'

const Button = () => {
    const router = useRouter()
	 const handleBackwards = () => {
		router.back();
	};

    return (
    <button className={styles.button} onClick={handleBackwards}>
        &#9754;
    </button>
    )
}

export default Button

