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
    <section>
      <figure>
        <img
          src={data.url}
          alt={data.captionResult.text}
          className="max-w-xs h-auto mx-auto mb-3 rounded-lg"
        />
        <figcaption className="text-center font-bold">
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
