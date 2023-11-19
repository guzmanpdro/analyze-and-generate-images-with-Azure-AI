function App() {
  const [analyzeButtonText, setAnalyzeButtontext] = useState('Analizar')
  const [generateButtonText, setGenerateButtonText] = useState('Generar')

  return (
    <div className="text-center">
      <h1 className="text-6xl">Analisa y Genera Imágenes</h1>

      <form className="mt-6">
        <div className="flex flex-col gap-4">
          <label className="text-lg">
            Inserte la URL de una imagen o escriba un texto para generar una imagen
            <input
              type="text"
              name="input-text"
              className="border border-gray-400 p-2 rounded"
              placeholder="URL o Texto"
            />
          </label>
        </div>

        <div className="flex gap-4 justify-center">
          <button
            name="analyze"
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-700   text-white font-bold py-2 px-4 rounded"
          >
            {analyzeButtonText}
          </button>
          <button
            name="generate"
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-700   text-white font-bold py-2 px-4 rounded"
          >
            {generateButtonText}
          </button>
        </div>
      </form>
    </div>
  )
}

export default App
