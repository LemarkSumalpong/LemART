/**
 * @copyright 2025 Lemark Sumalpong
 * @license Apache-2.0
 */

import Skillcard from "./Skillcard";

const skillItem = [
    {
      imgSrc: '/images/figma.svg',
      label: 'Figma',
      desc: 'Design tool'
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
  ];

const Skills = () => {
  return (
    <section className="section">
        <div className="container">
            <h2 className="headline-2 reveal-up">
                Tools I used
            </h2>
            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
            Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
            </p>
            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">

                {
                    skillItem.map(({imgSrc, label, desc}, key) =>
                    (
                       < Skillcard 
                            imgSrc= {imgSrc}
                            label= {label}
                            desc= {desc}
                            classes="reveal-up"
                       />
                    ))
                }
            </div>
        </div>


    </section>
  )
}

export default Skills