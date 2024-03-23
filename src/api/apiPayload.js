const getObjectKeys = (obj, index) => {
  const keys = Object.keys(obj)
  return keys[index]
}

export const apiPayload = (url, method, payload = null, contentType = null) => {
  const jsonPayload = {
    url,
    method,
    headers: {},
  }

  if (!contentType) {
    jsonPayload.headers.Accept = 'application/json'
    jsonPayload.headers['Content-Type'] = 'application/json'
  } else {
    jsonPayload.headers['Content-Type'] = contentType
  }

  if (payload !== null) {
    const formData = new FormData()
    switch (contentType) {
      case 'attachment':
        // eslint-disable-next-line no-restricted-syntax
        for (const key of Object.keys(payload)) {
          const primaryKey = getObjectKeys(payload[key], 0)
          formData.append(`[${key}][${primaryKey}]`, payload[key][primaryKey])
        }
        jsonPayload.data = formData
        break
      default:
        jsonPayload.data = payload
        break
    }
  }
  return jsonPayload
}
