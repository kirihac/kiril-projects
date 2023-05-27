"use client"
import styles from './page.module.css'
import Project from '@/app/Project.js'
import project1 from "./images/project1.jpg"
import project2 from "./images/project2.jpg"
import project3 from "./images/project3.jpg"
import project4 from "./images/project4.jpg"


export default function Projects() {
  return (
    <main>
       <div className={styles.proj}>
            <Project
                title="1 page Gaming Platform"
                photo={project1}
                description="The first FrontEnd homework "
                link="https://github.com/kirihac/FrontEndHomework"
            />

            <Project
                title="Theme changer "
                photo={project2}
                description="A simple site that can change the theme using Java Script "
                link="https://github.com/kirihac/WebHomework2"
            />

            <Project
                title="Modal window"
                photo={project3}
                description="A simple site that uses Javascript to open a modal window "
                link="https://github.com/kirihac/FrontEnd-Modal"
            />

            <Project
                title="HTTP Request"
                photo={project4}
                description="A simple site that uses Javascript to make an HTTP request"
                link="https://github.com/kirihac/FrontEndRequest"
            />
        </div>
    </main>
  )
}
