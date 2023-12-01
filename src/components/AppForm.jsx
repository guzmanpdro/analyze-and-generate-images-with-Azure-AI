import PropTypes from 'prop-types';

import { useState } from "react"
import { validateField } from "../helpers"

export function AppForm({ onSubmit }) {
  const [analyzeButtonText, setAnalyzeButtontext] = useState('Analizar')
  const [generateButtonText, setGenerateButtonText] = useState('Generar')
  const [fieldError, setFieldError] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = new FormData(event.target)
    const inputText = form.get('input-text')

    if (event.nativeEvent.submitter.name === 'analyze') {
      const thereIsError = validateField(inputText)
      setFieldError(thereIsError)
      if (thereIsError) return

      onSubmit(inputText, event, setAnalyzeButtontext)
    }

    if (event.nativeEvent.submitter.name === 'generate') {
      onSubmit(inputText, event, setGenerateButtonText)
    }
  }

  return (
    <form className="mb-7" onSubmit={handleSubmit}>
      <div className="mb-4 flex flex-col">
        <label className="text-lg flex flex-col justify-center gap-3">
          Inserte la URL de una imagen o escriba un texto para generar una imagen
          <input
            type="text"
            name="input-text"
            className="border border-gray-400 p-2 rounded-lg text-sky-950"
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
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {analyzeButtonText}
        </button>
        <button
          name="generate"
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {generateButtonText}
        </button>
      </div>
    </form>
  )
}

AppForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
