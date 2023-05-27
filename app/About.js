import Image from 'next/image'
import styles from './page.module.css'
import photo from "./photo.jpg"
import Button from './Button';


const About = () => {
    return (
      <div className={styles.about}>
        <h2>About me</h2>
        <p className={styles.p}><b><i>Kiril Saenko</i></b></p>
        <p className={styles.p}><i>Software developer</i></p>
        <p className={styles.p}>I am a software developer and a dedicated follower of the tech startup scene. My ultimate goal is to create and launch innovative digital products. I firmly believe in fostering a growth mindset and placing users at the center of my designs, always striving to solve problems effectively. Throughout my professional journey, I have honed my coding skills to craft exceptional user experiences, while also delving into design to gain a deeper understanding of the human aspect within these applications.</p>
        <div className={styles.buttonpro}>
        <Button title="Projects" link="/projects" /></div>
      </div>
    );
  };

  export default About;