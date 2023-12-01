import { useState } from "react"
import { analyzeImage } from "./services/azure-image-analysis"
import { generateImage } from "./services/sd-image-generation"
import { isConfigured } from "./helpers"
import {
  Analyze,
  AppContainer,
  AppForm,
  ImageResult,
  NotificationError
} from "./components"

function App() {
  const [result, setResult] = useState(null)
  const [imageGenerated, setImageGenerated] = useState([])

  const handleFormSubmit = async (inputText, event, setTextButton) => {
    event.preventDefault()

    if (event.nativeEvent.submitter.name === 'analyze') {
      setTextButton('Analizando...')
      const AnalyzeResult = await analyzeImage(inputText)
      setResult(AnalyzeResult)
      setTextButton('Analizar')
    }

    if (event.nativeEvent.submitter.name === 'generate') {
      setTextButton('Generando...')
      const generateResult = await generateImage(inputText)
      setImageGenerated(generateResult)
      setTextButton('Generar')
    }
  }

  return (
    <AppContainer>
      {isConfigured()
        ? <AppForm onSubmit={handleFormSubmit} />
        : <NotificationError />
      }
      <Analyze data={result} />
      <ImageResult imageGenerated={imageGenerated} />
    </AppContainer>
  )
}

export default App
