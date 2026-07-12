import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  it('renders its children as the label', () => {
    render(<Button>Save</Button>)
    expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument()
  })

  it('applies variant and size classes, defaulting to primary/md', () => {
    render(<Button>Default</Button>)
    const button = screen.getByRole('button', { name: 'Default' })
    expect(button).toHaveClass('btn', 'btn--primary', 'btn--md')
  })

  it('honours an explicit variant and size', () => {
    render(
      <Button variant="secondary" size="lg">
        Big
      </Button>,
    )
    expect(screen.getByRole('button', { name: 'Big' })).toHaveClass(
      'btn--secondary',
      'btn--lg',
    )
  })

  it('calls onClick when clicked', async () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Click me</Button>)

    await userEvent.click(screen.getByRole('button', { name: 'Click me' }))

    expect(onClick).toHaveBeenCalledOnce()
  })

  it('does not fire onClick while disabled', async () => {
    const onClick = vi.fn()
    render(
      <Button disabled onClick={onClick}>
        Nope
      </Button>,
    )

    await userEvent.click(screen.getByRole('button', { name: 'Nope' }))

    expect(onClick).not.toHaveBeenCalled()
  })
})
