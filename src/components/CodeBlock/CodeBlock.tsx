import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import type { CodeBlockFormat } from './CodeBlock.types'
import styles from './CodeBlock.module.css'

SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('tsx', tsx)

const codeTheme = {
  ...oneDark,
  'class-name': { color: '#7ee787' },
  'attr-name': { color: '#79c0ff' },
  'attr-value': { color: '#ffa657' },
}

export function CodeBlock({ code, language = 'tsx' }: CodeBlockFormat)
{
  return(
    <SyntaxHighlighter
      language={language}
      style={codeTheme}
      className={styles.block}
      customStyle={{ margin: 0 }}
    >
      {code}
    </SyntaxHighlighter>
  )
}

export default CodeBlock;
