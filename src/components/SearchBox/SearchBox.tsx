// SearchBox component. A bordered field holding a clickable search icon and a text input.

import { useState } from 'react'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import Input from '../Input/Input'
import Stack from '../Stack/Stack'
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
    <Stack direction="row" gap="sm" align="center" className={styles.searchBox}>
      {iconPosition === 'left' && searchButton}

      <Stack className={styles.field}>
        <Input
          type="search"
          variant="bare"
          value={value}
          onChange={setValue}
          placeholder={placeholder}
          label={placeholder}
        />
      </Stack>

      {iconPosition === 'right' && searchButton}
    </Stack>
  )
}

export default SearchBox
