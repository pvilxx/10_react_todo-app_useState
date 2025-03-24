import PropTypes from 'prop-types'
import './Subheader.css'

const Subheader = ({ subtitle }) => {
  return (
    <div className="subheader">
      <h2 className="subheader__title">{subtitle}</h2>
    </div>
  )
}

Subheader.propTypes = {
  subtitle: PropTypes.string.isRequired
}

export default Subheader 