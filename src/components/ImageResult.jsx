import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid'

export function ImageResult({ imageGenerated }) {
  const thereAreImages = imageGenerated.length > 0
  const imageResultItems = imageGenerated.map(image => {
    const itemKey = uuidv4()
    return (
      <li key={itemKey}>
        <figure>
          <img
            id={itemKey}
            src={image}
            alt='Imagen Generada por IA'
            className="max-w-xs h-auto mx-auto"
          />
        </figure>
      </li>
    )
  })

  return thereAreImages && (
    <section className="mt-8">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {imageResultItems}
      </ul>
    </section>
  )
}

ImageResult.propTypes = {
  imageGenerated: PropTypes.arrayOf(PropTypes.string)
}