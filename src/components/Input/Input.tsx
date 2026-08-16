// Input component. Renders a controlled text field whose value is owned by the parent.

import type { InputFormat } from './Input.types'
import styles from './Input.module.css'

export function Input({
  value,
  onChange,
  type = 'text',
  variant = 'default',
  placeholder,
  label,
}: InputFormat) {
  return (
    <input
      className={`${styles.input} ${styles[variant]}`}
      type={type}
      value={value}
      placeholder={placeholder}
      aria-label={label}
      onChange={(event) => onChange(event.target.value)}
    />
  )
}

export default Input
