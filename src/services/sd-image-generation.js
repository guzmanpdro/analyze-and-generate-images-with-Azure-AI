const SD_KEY = import.meta.env.VITE_SD_API_KEY

const apiUrl = 'https://stablediffusionapi.com/api/v3/text2img'

export async function generateImage(input) {
  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "key": SD_KEY,
      "prompt": input,
      "negative_prompt": null,
      "width": "512",
      "height": "512",
      "samples": "4",
      "num_inference_steps": "20",
      "safety_checker": "yes",
      "enhance_prompt": "yes",
      "seed": null,
      "guidance_scale": 7.5,
      "multi_lingual": "yes",
      "panorama": "no",
      "self_attention": "no",
      "upscale": "no",
      "embeddings_model": null,
      "webhook": null,
      "track_id": null
    }),
  });
  
  const result = await res.json()
  if (result.status === 'error') {
    throw new Error(result.message);
  }
  const { output } = result
  return output
}