import PropTypes from 'prop-types'
import './ListHeader.css'

const ListHeader = ({ content }) => {
  return (
    <div className="list-header">
      <h3 className="list-header__title">{content}</h3>
    </div>
  )
}

ListHeader.propTypes = {
  content: PropTypes.string.isRequired
}

export default ListHeader 