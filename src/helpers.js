export function validateField(field) {
  const validExtensions = /\.(jpg|jpeg|png|webp|avif)$/i;
  if (field === '') {
    return 'Debes rellenar este campo';
  }

  if (!isUrl(field) || !validExtensions.test(field)) {
    return 'Debes introducir una URL válida';
  }
}

function isUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}