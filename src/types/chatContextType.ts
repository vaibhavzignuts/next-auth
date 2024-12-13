import { platformTypes } from './constantTypes'

export type FormType = {
  prompt: string
}

export type ChatMessage = {
  messageId: string
  message: string | null
  type: 'image' | 'video' | 'text' | 'meme' | null
  role: 'ai' | 'user'
  metadata: any | null
  created_at: number
  created_by: string | null
  isLoading?: boolean
}

type NewsItem = {
  url: string
  title: string
  content: string
}

interface Session {
  id: string
  name: string
  userId: string
  prompt: string
  news: NewsItem[]
  is_active: boolean
  created_at: string
  created_by: string
  updated_at: string
  updated_by: string
  deleted_at: string | null
  deleted_by: string | null
  is_deleted: boolean
  messages: ChatMessage[]
}

interface MetadataType {
  news: string // e.g., 'diwali'
  title: string // e.g., 'Happy Diwali'
  tone: string // e.g., 'exciting'
  platform: platformTypes // e.g., 'instagram'
  content_type: string // e.g., 'image, text'
  preferences: string // defaulting to an empty string, can be a string describing preferences
  search_engine: string // defaulting to an empty string, can specify a search engine
  source: string // defaulting to an empty string, can specify a source
  contextChanged: boolean // renamed to camelCase and changed to boolean
}

export interface GetChatByIdResponseTypes {
  data: Session
}
export interface CreateSessionResponseTypes {
  data: {
    createdAt: string
    updatedAt: string
    id: string
    isActive: boolean
    isDeleted: boolean
    type: 'image' | 'video' | 'text' | 'meme' | null
    message: null
    metadata: MetadataType | null
    userId: string
    name: string
    role: 'ai' | 'user'
    sessionId: string
    createdBy: null
    updatedBy: null
    deletedAt: null
    deletedBy: null
  }
}

export type HistoryType = {
  name: string
  userId: string
  sessionId: string | null
  news: string | null
  prompt: string
  id: string
  isActive: boolean
  createdAt: string
  createdBy: string
  updatedAt: string
  updatedBy: string
  deletedAt: string | null
  deletedBy: string | null
  isDeleted: boolean
}

export interface UserHistoryType {
  data: HistoryType[]
}

export type PreviewDataType = {
  imageUrl: string
  caption: string
  title: string
  type: 'image' | 'video' | 'text' | 'meme'
}

export type GuestHistoryType = {
  sessionId: string
  name: string
  createdAt: string
}
