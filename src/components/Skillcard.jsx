/**
 * @copyright 2025 Lemark Sumalpong
 * @license Apache-2.0
 */

import propTypes from "prop-types";

const Skillcard = ({
    imgSrc,
    label,
    desc,
    classes
}) => {
  return (
    <div className={'flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors' + classes }>
        <figure className="">
            <img 
            src={imgSrc}          
            width={32}
            height={32}
            alt={label}

            />
        </figure>
        <div>
            <h3>{label}</h3>

            <p className="">
                {desc}
            </p>
        </div>
    </div>
   
  )
}

Skillcard.propTypes ={
    imgSrc: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    desc: propTypes.string.isRequired,
    classes: propTypes.string
}

export default Skillcard
