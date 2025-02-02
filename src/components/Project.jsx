/**
 * @copyright 2025 Lemark Sumalpong
 * @license Apache-2.0
 */
import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/',
      title: 'In Progress',
      tags: ['WIP'],
      projectLink: ''
    },
    {
      imgSrc: '/images/',
      title: 'In Progress',
      tags: ['WIP'],
      projectLink: ''
    },
    {
      imgSrc: '',
      title: 'In Progress',
      tags: ['WIP'],
      projectLink: ''
    },
    {
      imgSrc: '/images/',
      title: 'In Progress',
      tags: ['WIP'],
      projectLink: ''
    },
    {
      imgSrc: '/images/',
      title: 'In Progress',
      tags: ['WIP'],
      projectLink: ''
    },
    {
      imgSrc: '/images/',
      title: 'In Progress',
      tags: ['WIP'],
      projectLink: ''
    },
  ];
  
const Project = () => {
  return (
    <section 
    id="project"
    className="section"
    >
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                My Portfolio
            </h2>
            <div className=" grid gap-x-4 gap-y-5
             grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
               {works.map(({imgSrc, title, tags, projectLink}, key) =>(
                <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                classes="reveal-up"
                />
               )
            )}
            </div>
        </div>
    </section>
   
  )
}

export default Project
