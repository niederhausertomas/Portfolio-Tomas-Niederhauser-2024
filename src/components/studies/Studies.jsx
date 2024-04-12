import React from 'react';
import './Studies.css';

const Studies = () => {
    const appliedStudies = [
        {
            name: "Coder House",
            description: "React.js"
        },
        {
            name: "Coder House",
            description: "Javascript"
        },
        {
            name: "Coder House",
            description: "HTML and CSS, Web development"
        },
        {
            name: "National Technical University of Argentina (UTN)",
            description: "University technique in programming, first full year"
        },
    ];

    return (
        <div className='container'>
            <div className='timeline'>
                {appliedStudies.map((study, index) => (
                    <div
                        id={`study-${index}`}
                        className={`child`}
                        key={index}
                    >
                        <div className='content'>
                            <h4 className='studiTitles'>{study.name}</h4>
                            <p>{study.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Studies;
