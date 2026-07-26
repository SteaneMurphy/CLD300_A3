import { useState } from "react"
import type { SwitchFormat } from "./Switch.types"
import styles from "./Switch.module.css"

export function Switch({ variant = 'standard', onClick, disabled = false, label, checked }: SwitchFormat)
{
  const [internalOn, setInternalOn] = useState(false)
  const isControlled = checked !== undefined
  const on = isControlled ? checked : internalOn

  const toggle = () => {
    if (!isControlled) setInternalOn((prev) => !prev)
    onClick?.()
  }

  return(
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      className={`${styles.switch} ${styles[variant]}`}
      data-on={on || undefined}
      disabled={disabled}
      onClick={toggle}
    >
      <span className={styles.knob} />
    </button>
  )
}

export default Switch;
