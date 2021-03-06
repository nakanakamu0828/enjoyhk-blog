import PropTypes from "prop-types"
import React from "react"

const InfoStandardSolidIcon = ({ className }) => {
  return (
    <svg
      className={className}
      version="1.1"
      viewBox="0 0 36 36"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>info-standard-solid</title>
      <path
        className="clr-i-solid clr-i-solid-path-1"
        d="M18,2.1a16,16,0,1,0,16,16A16,16,0,0,0,18,2.1Zm-.1,5.28a2,2,0,1,1-2,2A2,2,0,0,1,17.9,7.38Zm3.6,21.25h-7a1.4,1.4,0,1,1,0-2.8h2.1v-9.2H15a1.4,1.4,0,1,1,0-2.8h4.4v12h2.1a1.4,1.4,0,1,1,0,2.8Z"
      />
      <rect x="0" y="0" width="36" height="36" fillOpacity="0"/>
    </svg>
  )
}

InfoStandardSolidIcon.propTypes = {
  className: PropTypes.string
}

InfoStandardSolidIcon.defaultProps = {
  className: ''
}

export default InfoStandardSolidIcon
