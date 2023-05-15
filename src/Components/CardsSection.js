import React from 'react'
import './CardsSection.css'
import Card from './Card'


function CardsSection() {
    const cards = [
        {
            thumb: 'Images/Cards/uAlberta.png',
            src: "Images/Cards/ux-designer-web-designer.webp",
            title: "User Research for User Experience Design",
            content: "The Museum of Modern Art"

        },
        {
            thumb: 'Images/Cards/uAlberta.png',
            src: "Images/Cards/geometry.jpg",
            title: "Modern Psychology",
            content: "The Museum of Modern Art"

        },
        {
            thumb: 'Images/Cards/uAlberta.png',
            src: "Images/Cards/uiux.png",
            title: "Introduction to Philosophy",
            content: "Duke University"

        },
        {
            thumb: 'Images/Cards/uAlberta.png',
            src: "Images/Cards/thinking.jpg",
            title: "Advance on Seeing through Photographs",
            content: "Duke University"

        },
        {
            thumb: 'Images/Cards/uAlberta.png',
            src: "Images/Cards/Web-Design-Dev-Overview.jpg",
            title: "Think again I: How to understand Arguments",
            content: "The Museum of Modern Art"

        },
        {
            thumb: 'Images/Cards/uAlberta.png',
            src: "Images/Cards/shutterstock_622216766-750x375.jpg",
            title: "Advanced Web Development",
            content: "The Museum of Modern Art"

        },
        {
            thumb: 'Images/Cards/uAlberta.png',
            src: "Images/Cards/philosophy-image.jpg",
            title: "Introduction to Robotics",
            content: "The Museum of Modern Art"

        },
        {
            thumb: 'Images/Cards/uAlberta.png',
            src: "Images/Cards/Blog-Image-48-750x392.png",
            title: "Introduction to Logic and Critical Thinking",
            content: "The Museum of Modern Art"

        },
        {
            thumb: 'Images/Cards/uAlberta.png',
            src: "Images/Cards/UX_design_principles_jpg_-EtzLc2m.avif",
            title: "Modern and Contemporary Art and Design",
            content: "The Museum of Modern Art"

        }
    ]

    return (
        <div className='card-section'>
            <h1 className='bolder text-center cardHeading my-4'>Top Featured Courses</h1>
            <div className='row justify-content-center'>
                <div className='col-10'>
                    <div className='row justify-content-center mb-3'>
                        <div className='col-3 d-flex justify-content-end p-0'>
                            <Card src={cards[0].src} title={cards[0].title} content={cards[0].content} thumb={cards[0].thumb} />
                        </div>
                        <div className='col-3 d-flex justify-content-center p-0'>
                            <Card src={cards[1].src} title={cards[1].title} content={cards[1].content} thumb={cards[1].thumb} />
                        </div>
                        <div className='col-3 d-flex justify-content-start p-0'>
                            <Card src={cards[2].src} title={cards[2].title} content={cards[2].content} thumb={cards[2].thumb} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-10'>
                    <div className='row justify-content-center mb-3'>
                        <div className='col-3 d-flex justify-content-end p-0'>
                            <Card src={cards[3].src} title={cards[3].title} content={cards[3].content} thumb={cards[3].thumb} />
                        </div>
                        <div className='col-3 d-flex justify-content-center p-0'>
                            <Card src={cards[4].src} title={cards[4].title} content={cards[4].content} thumb={cards[4].thumb} />
                        </div>
                        <div className='col-3 d-flex justify-content-start p-0'>
                            <Card src={cards[5].src} title={cards[5].title} content={cards[5].content} thumb={cards[5].thumb} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-10'>
                    <div className='row justify-content-center mb-3'>
                        <div className='col-3 d-flex justify-content-end p-0'>
                            <Card src={cards[6].src} title={cards[6].title} content={cards[6].content} thumb={cards[6].thumb} />
                        </div>
                        <div className='col-3 d-flex justify-content-center p-0'>
                            <Card src={cards[7].src} title={cards[7].title} content={cards[7].content} thumb={cards[7].thumb} />
                        </div>
                        <div className='col-3 d-flex justify-content-start p-0'>
                            <Card src={cards[8].src} title={cards[8].title} content={cards[8].content} thumb={cards[8].thumb} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardsSection