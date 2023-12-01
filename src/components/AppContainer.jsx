import PropTypes from 'prop-types';

export function AppContainer({ children }) {
  return (
    <div className="bg-appBgImage bg-no-repeat bg-cover min-h-screen flex flex-col pt-10 px-4 text-center text-sky-50">
      <header className='mb-7'>
        <h1 className="text-2xl font-extrabold text-sky-400">
          Analiza y Genera Imágenes
        </h1>
      </header>
      {children}
    </div>
  )
}

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
};