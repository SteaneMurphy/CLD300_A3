import type { ImageFormat } from "./Image.types"
import styles from "./Image.module.css"

export function Image({ src, alt, fit = 'cover', radius = 'none', width, height }: ImageFormat)
{
  return(
    <img
      className={`${styles.image} ${styles[fit]} ${styles[radius]}`}
      src={src}
      alt={alt}
      style={{ width, height }}
      loading="lazy"
    />
  )
}

export default Image;
