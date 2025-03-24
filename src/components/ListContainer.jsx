import PropTypes from 'prop-types'
import ListHeader from './ListHeader'
import ItemsList from './ItemsList'
import './ListContainer.css'

const ListContainer = ({ todosList }) => {
  return (
    <div className="list-container">
      <ListHeader content="Todo List" />
      <ItemsList itemsList={todosList} />
    </div>
  )
}

ListContainer.propTypes = {
  todosList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      status: PropTypes.oneOf(['pending', 'in progress', 'done']).isRequired
    })
  ).isRequired
}

export default ListContainer 