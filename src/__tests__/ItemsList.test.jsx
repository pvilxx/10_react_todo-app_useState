import { render, screen } from '@testing-library/react'
import ItemsList from '../components/ItemsList'

describe('ItemsList component', () => {
  test('renders list of items correctly', () => {
    const mockItems = [
      { id: 1, title: 'Task 1', description: 'Description 1', status: 'pending' },
      { id: 2, title: 'Task 2', description: 'Description 2', status: 'in progress' }
    ]
    
    render(<ItemsList itemsList={mockItems} />)
    
    expect(screen.getByText('Task 1')).toBeInTheDocument()
    expect(screen.getByText('Description 1')).toBeInTheDocument()
    expect(screen.getByText('Task 2')).toBeInTheDocument()
    expect(screen.getByText('Description 2')).toBeInTheDocument()
  })
  
  test('shows empty message when no items', () => {
    render(<ItemsList itemsList={[]} />)
    expect(screen.getByText('No tasks found')).toBeInTheDocument()
  })
}) 