const VISION_KEY = import.meta.env.VITE_VISION_KEY
const VISION_ENDPOINT = import.meta.env.VITE_VISION_ENDPOINT

const apiUrl = `${VISION_ENDPOINT}/computervision/imageanalysis:analyze?api-version=2023-02-01-preview&features=caption&language=en`

export async function analyzeImage(imageUrl) {
  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Ocp-Apim-Subscription-Key': VISION_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url: imageUrl }),
  });
  const resJSON = await res.json();
  const data = {url: imageUrl, ...resJSON};
  if (data.error) {
    throw new Error(data.error.message);
  }
  return data;
}