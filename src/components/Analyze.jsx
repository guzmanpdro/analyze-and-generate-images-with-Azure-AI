import PropTypes from 'prop-types';

export function Analyze({ data }) {
  const thereIsData = (objectName) => {
    return (
      objectName &&
      Object.keys(objectName).length !== 0 &&
      objectName.constructor === Object
    );
  }

  return thereIsData(data) && (
    <section className="mt-8">
      <figure>
        <img
          src={data.url}
          alt={data.captionResult.text}
          className="max-w-xs h-auto mx-auto"
        />
        <figcaption className="text-center">
          <p className="uppercase text-lg">
            {data.captionResult.text}
          </p>
        </figcaption>
      </figure>
    </section>
  )
}

Analyze.propTypes = {
  data: PropTypes.shape({
    captionResult: PropTypes.shape({
      confidence: PropTypes.number,
      text: PropTypes.string
    }),
    metadata: PropTypes.shape({
      height: PropTypes.number,
      width: PropTypes.number
    }),
    modelVersion: PropTypes.string,
    url: PropTypes.string
  })
}
