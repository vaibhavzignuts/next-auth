export type Content = {
  id: number
  image: string
  title: string
  description: string
  platform: string
  type: 'image' | 'video' | 'text' | 'meme'
  aiGenerated: boolean
  createdAt: number
}
