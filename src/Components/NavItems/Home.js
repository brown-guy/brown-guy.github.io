import React from 'react'
import CardsSection from '../CardsSection'
import Featured from "../Featured";
import NewsLetter from "../NewsLetter";

import Banner from '../Banner';


function Home() {
    const student = {
        firstName: 'Kimmy',
        lastName: 'Vo',
        designation: 'Junior Designer',
        course: 'Modern and Contemporary Art and Design',
        organization: 'The Museum of Modern Art',
        thumbnail: 'Images/21.svg',
        studentPic: 'Images/graduationCrop.jpg',
        topLeft: 'Images/top-left.jpg',
        feedback: `Take courses from the world's best instructors and universites. Courses include
         recorded auto-graded and peer-reviewed assignments, video lectures, and
         community discussion forums. When you complete a course, you'll be eligible to
         receive a shareable electronic Course Certificate for a small fee`
    }
    return (
        <div>
            <Banner />
            <CardsSection />

            <br />
            <br />
            <Featured student={student} />
            <br />

            <NewsLetter />

        </div>
    )
}

export default Home