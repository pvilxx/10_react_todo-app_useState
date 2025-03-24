import PropTypes from 'prop-types'
import './ItemCard.css'

const ItemCard = ({ item }) => {
  const { title, description, status } = item
  
  const getTitleClassName = () => {
    const baseClass = 'item-card__title'
    
    switch (status) {
      case 'done':
        return `${baseClass} item-card__title--done`
      case 'in progress':
        return `${baseClass} item-card__title--in-progress`
      default:
        return baseClass
    }
  }
  
  const getStatusClassName = () => {
    const baseClass = 'item-card__status'
    
    switch (status) {
      case 'done':
        return `${baseClass} item-card__status--done`
      case 'in progress':
        return `${baseClass} item-card__status--in-progress`
      default:
        return `${baseClass} item-card__status--pending`
    }
  }
  
  return (
    <li className="item-card">
      <h4 className={getTitleClassName()}>{title}</h4>
      <p className="item-card__description">{description}</p>
      <span className={getStatusClassName()}>{status}</span>
    </li>
  )
}

ItemCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['pending', 'in progress', 'done']).isRequired
  }).isRequired
}

export default ItemCard 