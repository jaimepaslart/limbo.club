export type EventSide = 'nord' | 'sud'

export type EventType =
  | 'concert'
  | 'expo'
  | 'festival'
  | 'cinema'
  | 'atelier'
  | 'theatre'
  | 'danse'
  | 'conference'

export type Locale = 'fr' | 'eu' | 'es'

export interface TranslatedText {
  fr: string
  eu: string
  es: string
}

export interface Event {
  id: string
  title: TranslatedText
  date: string // ISO format
  time?: string
  city: string
  side: EventSide
  type: EventType
  venue: string
  tags: string[]
  description: TranslatedText
  url?: string
  price?: string
  featured?: boolean
}

export interface EventFilters {
  side?: EventSide
  type?: EventType
  city?: string
  search?: string
  dateRange?: 'upcoming' | 'weekend' | 'month'
}

export interface QuizAnswers {
  ambiance?: string
  moment?: string
  side?: EventSide | 'peu-importe'
  budget?: string
  eventType?: EventType
}
