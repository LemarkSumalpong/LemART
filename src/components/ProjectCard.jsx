/**
 * @copyright 2025 Lemark Sumalpong
 * @license Apache-2.0
 */

import propTypes from "prop-types"

const ProjectCard = ({
    imgSrc,
    title,
    tags,
    projectLink,
    classes
}) => {
  return (
    <div className={"relative p-4 round-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/50 ring-1 ring-inset ring-zinc-50/5 transition-colors" + classes}>
        <figure className="img-box aspect-square rounded-lg 
        mb-4 ">
            <img
            src = {imgSrc}
            alt = {title}
            loading = 'lazy'
            className = "img-cover"
            />
        </figure>
        <div className="">
            <div>
                <h3 className="title-1">
                    {title}
                </h3>
                <div className="">
                    {tags.map((label, key) =>(
                        <span 
                        key={key}     
                        className=""
                        >
                            {label}
                        </span>

                    ))}
                </div>
            </div>

            <div className="">
                <span
                 className="material-symbols-rounded"
                 aria-hidden= "true"
                 > 
                    arrow_outward
                 </span>
            </div>

        </div>

        <a 
        href={projectLink}
        target='_blank'
        className=""
        >           
        </a>

    </div>
  )
}

ProjectCard.propTypes = {
    imgSrc: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    tags: propTypes.array.isRequired,
    projectLink: propTypes.string,
    classes: propTypes.string
}

export default ProjectCard