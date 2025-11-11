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

export interface Event {
  id: string
  title: string
  date: string // ISO format
  time?: string
  city: string
  side: EventSide
  type: EventType
  venue: string
  tags: string[]
  description?: string
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
