// Button component. Renders a button element styled by the variant and size props.

import type { ButtonFormat } from "./Button.types"
import styles from "./Button.module.css"

export function Button({
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  onClick,
  children,
}: ButtonFormat)
{
  return(
    <button
      type={type}
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;
