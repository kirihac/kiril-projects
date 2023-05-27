import React from 'react';
import Link from 'next/link';
import styles from './page.module.css'
import {FaOldRepublic} from 'react-icons/fa'
import Button from './Button';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
        <Link href="/" ><FaOldRepublic className={styles.logo} /></Link>
        <Button title="PROJECTS" link="/projects" />
        <Button title="CONTACTS" link="/contact" />
    </nav>
  );
};

export default NavBar;