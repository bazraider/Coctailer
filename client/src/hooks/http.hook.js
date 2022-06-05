import { useState, useCallback } from "react"

const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    setLoading(true)
    try {
      if (body) {
        body = JSON.stringify(body)
        headers['Content-Type'] = 'application/json'
      }
      
      const response = await fetch(url, {method, body, headers})
      const data = await response.json()

      if (!response.ok) {
        setError(data)
        throw new Error(data.message || 'Что-то пошло не так')
      }
      
      setLoading(false)
      
      return data
      
    } catch (error) {
      setLoading(false)
      throw error
    }
  }, [])

  const clearError = () => setError(null)

  return {loading, request, error, clearError}
}

export {useHttp}
