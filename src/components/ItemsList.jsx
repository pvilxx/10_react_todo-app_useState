import PropTypes from 'prop-types'
import ItemCard from './ItemCard'
import './ItemsList.css'

const ItemsList = ({ itemsList }) => {
  return (
    <ul className="items-list">
      {itemsList.length > 0 ? (
        itemsList.map(item => (
          <ItemCard key={item.id} item={item} />
        ))
      ) : (
        <li className="items-list__empty">No tasks found</li>
      )}
    </ul>
  )
}

ItemsList.propTypes = {
  itemsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      status: PropTypes.oneOf(['pending', 'in progress', 'done']).isRequired
    })
  ).isRequired
}

export default ItemsList 