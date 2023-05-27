import Image from 'next/image'
import styles from './page.module.css'
import photo from "./photo.jpg"
import About from './About';


const Home = () => {
  return (
        <div>
            <Image src={photo} alt="face photo" className={styles.photoava}/>
            <h1 className={styles.phototext}>PORTFOLIO</h1>
            <About></About>
        </div>
        
    );
};



export default Home; 
