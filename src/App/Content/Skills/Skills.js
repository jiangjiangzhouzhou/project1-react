import React from 'react';
import styles from './Skills.module.css';
import s1 from '../assets/images/s1.png';
import s2 from '../assets/images/s2.png';
import s3 from '../assets/images/data.png';
import Skill from './components/Skill';

const SKILLS = [
    {
        type:'front-end',
        image:s1,
        message:'s1' ,
        content:'HTML, Javscript',
    }, {
        type: 'back-end',
        image:s2,
        message:'s2',
        content:'PHP, JAVA spring boot, C#',
    },{
        type: 'DATA',
        image:s3 ,
        message:'s3' ,
        content:'SAS, mySQL',
    }
];
const Skills = () => (
    <section className={styles.skills} id='skills'>
        <div className={styles.s__heading}>
            <h1>Skills</h1>
        </div>
        <div className={styles.s__d__container}>
            {SKILLS.map(({
                    type,
                    image,
                    message,
                    content,
                }) => (
                    <Skill 
                    type= {type} 
                    image={image} 
                    message={message} 
                    content={content}
                    />
            ))}
        </div>
    </section>
)

export default Skills