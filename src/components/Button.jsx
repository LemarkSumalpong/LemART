/**
 * @copyright 2025 Lemark Sumalpong
 * @license Apache-2.0
 */

import propTypes from "prop-types";

const ButtonPrimary = ({
    href,
    target='self',
    label,
    icon,
    classes
}) => {

   if (href){
    return (
        <a 
        href= {href}
        target= {target}
        className= {"btn btn-primary " + classes}
        >
            {label}

            {icon ?
             <span className="material-symbols-rounded"
             aria-hidden="true">
                {icon}    
             </span>
             : undefined
            }
        </a>
    )
   } else {
     return (
        <button className={`btn btn-primary ${classes}`}>
            {label}

            {icon ?
             <span className="material-symbols-rounded"
             aria-hidden="true">
                {icon}    
             </span>
             : undefined
            }
        </button>
    )
   }
}

ButtonPrimary.propTypes = {
    label: propTypes.string.isRequired,
    href: propTypes.string,
    target: propTypes.string,
    icons: propTypes.string,
    classes: propTypes.string
}
/**
 * Secondary button
 */

const ButtonOutline = ({
    href,
    target='self',
    label,
    icon,
    classes
}) => {

   if (href){
    return (
        <a 
        href= {href}
        target= {target}
        className= {"btn btn-outline " + classes}
        >
            {label}

            {icon ?
             <span className="material-symbols-rounded"
             aria-hidden="true">
                {icon}    
             </span>
             : undefined
            }
        </a>
    )
   } else {
     return (
        <button className={`btn btn-outline ${classes}`}>
            {label}

            {icon ?
             <span className="material-symbols-rounded"
             aria-hidden="true">
                {icon}    
             </span>
             : undefined
            }
        </button>
    )
   }
}

ButtonOutline.propTypes = {
    label: propTypes.string.isRequired,
    href: propTypes.string,
    target: propTypes.string,
    icons: propTypes.string,
    classes: propTypes.string
}
export {ButtonPrimary, ButtonOutline}
