// Switch component. An on/off toggle that tracks its own state unless a checked prop is supplied.

import { useState } from "react"
import type { SwitchFormat } from "./Switch.types"
import styles from "./Switch.module.css"

export function Switch({ variant = 'standard', onClick, disabled = false, label, checked }: SwitchFormat)
{
  //switch default to 'internalOn' if 'checked' is not passed. 'undefined' ensure it reverts to the default state
  const [internalOn, setInternalOn] = useState(false)
  const isControlled = checked !== undefined                  
  const on = isControlled ? checked : internalOn

  // only updates its own state when uncontrolled. If a parent passed 'checked',
  // it just calls onClick and waits for the parent to send a new value down
  const toggle = () => {
    if (!isControlled) setInternalOn((prev) => !prev)
    onClick?.()
  }

  // [data-on] is a presence match piece of logic. If undefined, it is not matched with the
  // css class and that attribute is not rendered
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
