// SearchBox component. A bordered field holding a clickable search icon and a text input.

import { useState } from 'react'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import Input from '../Input/Input'
import styles from './SearchBox.module.css'
import type { SearchBoxFormat } from './SearchBox.types'

export function SearchBox({
  placeholder,
  icon,
  iconPosition = 'left',
  onSearch,
}: SearchBoxFormat) {
  const [value, setValue] = useState('')

  const searchButton = (
    <Button variant="ghost" size="sm" onClick={() => onSearch?.(value)}>
      <Icon src={icon} size="md" label="Search" />
    </Button>
  )

  return (
    <div className={styles.searchBox}>
      {iconPosition === 'left' && searchButton}

      <div className={styles.field}>
        <Input
          type="search"
          variant="bare"
          value={value}
          onChange={setValue}
          placeholder={placeholder}
          label={placeholder}
        />
      </div>

      {iconPosition === 'right' && searchButton}
    </div>
  )
}

export default SearchBox
