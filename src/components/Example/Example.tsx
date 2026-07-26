// Example component. Pairs a live component preview with the code that produces it.

import CodeBlock from "../CodeBlock/CodeBlock"
import type { ExampleFormat } from "./Example.types"
import styles from "./Example.module.css"

export function Example({ code, language, children }: ExampleFormat)
{
  return(
    <div className={styles.example}>
      <div className={styles.preview}>
        {children}
      </div>
      <CodeBlock code={code} language={language} squareTop />
    </div>
  )
}

export default Example;
