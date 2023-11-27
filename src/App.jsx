import { useState } from "react"
import { analyzeImage } from "./services/azure-image-analysis"
import { generateImage } from "./services/sd-image-generation"
import { validateField, isConfigured } from "./helpers"
import { Analyze } from "./components/Analyze"
import { ImageResult } from "./components/ImageResult"

function App() {
  const [analyzeButtonText, setAnalyzeButtontext] = useState('Analizar')
  const [generateButtonText, setGenerateButtonText] = useState('Generar')
  const [fieldError, setFieldError] = useState(null)
  const [result, setResult] = useState(null)
  const [imageGenerated, setImageGenerated] = useState([])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = new FormData(event.target)
    const inputText = form.get('input-text')

    if (event.nativeEvent.submitter.name === 'analyze') {
      const thereIsError = validateField(inputText)
      setFieldError(thereIsError)
      if (thereIsError) return

      setAnalyzeButtontext('Analizando...')
      const result = await analyzeImage(inputText)
      setResult(result)
      setAnalyzeButtontext('Analizar')
    }

    if (event.nativeEvent.submitter.name === 'generate') {
      setGenerateButtonText('Generando...')
      const image = await generateImage(inputText)
      setImageGenerated(image)
      setGenerateButtonText('Generar')
    }
  }

  if (!isConfigured()) {
    return (
      <div className="text-center py-8 max-w-3xl mx-auto flex flex-col justify-center place-content-center">
        <header>
          <h1 className="text-5xl mb-6">Analisa y Genera Imágenes</h1>
        </header>
        <main>
          <p>Para poder usar esta aplicación es necesario configurar las variables de entorno.</p>
          <p>Por favor, revisa el archivo <code>.env.example</code> y configura las variables de entorno.</p>
        </main>
      </div>
    )
  }

  return (
    <div className="text-center py-8 max-w-3xl mx-auto flex flex-col justify-center place-content-center">
      <header>
        <h1 className="text-5xl">Analisa y Genera Imágenes</h1>

        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <label className="text-lg flex flex-col justify-center">
              Inserte la URL de una imagen o escriba un texto para generar una imagen
              <input
                type="text"
                name="input-text"
                className="border border-gray-400 p-2 rounded place-self-center"
                placeholder="URL o Texto"
                autoComplete="off"
              />
            </label>
            {fieldError && <p className="text-red-500">{fieldError}</p>}
          </div>

          <div className="flex gap-4 justify-center">
            <button
              name="analyze"
              type="submit"
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {analyzeButtonText}
            </button>
            <button
              name="generate"
              type="submit"
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {generateButtonText}
            </button>
          </div>
        </form>
      </header>

      <main>
        <Analyze data={result} />
        <ImageResult imageGenerated={imageGenerated} />
      </main>
    </div>
  )
}

export default App
