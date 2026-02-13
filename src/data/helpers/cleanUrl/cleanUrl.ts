export const cleanUrl = (url: string) => ({
  protocol: (url.match(/^(https?:\/\/)/) || [])[0] || '',
  url: url.replace(/^(https?:\/\/)/, '').replace(/^www\./, '')
})
