import axios from 'axios'
import { getUrlWithCustomer } from 'data/helpers'

const baseURL = getUrlWithCustomer(process.env.PUBLIC_API_BASE_URL || '')

const httpClient = axios.create({
  baseURL,
  headers: {
    Authorization : 'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJUaW1lZmxvdyIsInN1YiI6IkpXVCBUb2tlbiIsInVzZXJuYW1lIjoib3N3YWxkbyIsImF1dGhvcml0aWVzIjoiUk9MRV9BRE1JTixST0xFX1VTRVIiLCJpYXQiOjE3MzcxNzYxNTEsImV4cCI6MTczNzIwNjE1MX0.dJhFArISYROCLJ5gOu7R9HbKg8CmDbKxyx45WXuFQ4k'
  }
})

export default httpClient
