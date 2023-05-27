import React from 'react';
import Link from 'next/link';
import styles from './page.module.css'

const Button = ({ title, link }) => {
  return (
    <div>
      
        <Link href={link} className={styles.buttonstyle}>
          {title}
        </Link>
      
    </div>
  );
};

export default Button;