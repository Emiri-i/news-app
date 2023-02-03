export type NewsType = {
  id: string
  title: string
  description: string
  url: string
  imageUrl: string
  content: string
  publishedDate: string
  source: string
  author: string
}
export type returnedNewsDataType = {
  author: string | null
  content: string | null
  description: string | null
  publishedAt: string | null
  source: {
    id: string | null
    name: string | null
  }
  title: string | null
  url: string | null
  urlToImage: string | null
}
