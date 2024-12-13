export type platformTypes = 'instagram' | 'linkedin' | 'reddit' | 'x' | 'none' | 'facebook'
export type toneTypes =
  | 'Polite'
  | 'Witty'
  | 'Enthusiastic'
  | 'Friendly'
  | 'Informational'
  | 'Funny'
  | 'Formal'
  | 'Informal'
  | 'Humorous'
  | 'Serious'
  | 'Optimistic'
  | 'Motivating'
  | 'none'

export type platformArrayTypes = {
  name: string
  value: platformTypes
  icon: string
}

export type toneTypeArrayTypes = {
  name: string
  value: toneTypes
}
