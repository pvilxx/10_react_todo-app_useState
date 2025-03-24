import { render, screen } from '@testing-library/react'
import ItemCard from '../components/ItemCard'

describe('ItemCard component', () => {
  test('renders an item with pending status correctly', () => {
    const pendingItem = {
      id: 1,
      title: 'Pending Task',
      description: 'This is a pending task',
      status: 'pending'
    }
    
    render(<ItemCard item={pendingItem} />)
    
    const title = screen.getByText('Pending Task')
    const status = screen.getByText('pending')
    
    expect(title).toBeInTheDocument()
    expect(title).not.toHaveClass('item-card__title--done')
    expect(title).not.toHaveClass('item-card__title--in-progress')
    
    expect(status).toBeInTheDocument()
    expect(status).toHaveClass('item-card__status--pending')
  })
  
  test('renders an item with in progress status correctly', () => {
    const inProgressItem = {
      id: 2,
      title: 'In Progress Task',
      description: 'This is an in progress task',
      status: 'in progress'
    }
    
    render(<ItemCard item={inProgressItem} />)
    
    const title = screen.getByText('In Progress Task')
    const status = screen.getByText('in progress')
    
    expect(title).toBeInTheDocument()
    expect(title).toHaveClass('item-card__title--in-progress')
    
    expect(status).toBeInTheDocument()
    expect(status).toHaveClass('item-card__status--in-progress')
  })
  
  test('renders an item with done status correctly', () => {
    const doneItem = {
      id: 3,
      title: 'Done Task',
      description: 'This is a done task',
      status: 'done'
    }
    
    render(<ItemCard item={doneItem} />)
    
    const title = screen.getByText('Done Task')
    const status = screen.getByText('done')
    
    expect(title).toBeInTheDocument()
    expect(title).toHaveClass('item-card__title--done')
    
    expect(status).toBeInTheDocument()
    expect(status).toHaveClass('item-card__status--done')
  })
}) 