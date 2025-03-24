import '@testing-library/jest-dom'

// Setup global test environment
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
} 