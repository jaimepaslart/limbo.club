import { events as allEvents } from '~/data/events'
import type { Event, EventFilters } from '~/types/event'

export const useEvents = () => {
  const { getTranslatedText } = useTranslatedEvent()

  const filterEvents = (filters: EventFilters): Event[] => {
    let filtered = [...allEvents]

    if (filters.side) {
      filtered = filtered.filter(event => event.side === filters.side)
    }

    if (filters.type) {
      filtered = filtered.filter(event => event.type === filters.type)
    }

    if (filters.city) {
      filtered = filtered.filter(event =>
        event.city.toLowerCase().includes(filters.city!.toLowerCase())
      )
    }

    if (filters.search) {
      const search = filters.search.toLowerCase()
      filtered = filtered.filter(event => {
        const title = getTranslatedText(event.title).toLowerCase()
        const description = getTranslatedText(event.description).toLowerCase()
        return title.includes(search) ||
          description.includes(search) ||
          event.venue.toLowerCase().includes(search) ||
          event.city.toLowerCase().includes(search)
      })
    }

    if (filters.dateRange) {
      const now = new Date()
      filtered = filtered.filter(event => {
        const eventDate = new Date(event.date)

        switch (filters.dateRange) {
          case 'upcoming':
            return eventDate >= now
          case 'weekend': {
            const weekEnd = new Date(now)
            weekEnd.setDate(now.getDate() + 7)
            return eventDate >= now && eventDate <= weekEnd
          }
          case 'month': {
            const monthEnd = new Date(now)
            monthEnd.setMonth(now.getMonth() + 1)
            return eventDate >= now && eventDate <= monthEnd
          }
          default:
            return true
        }
      })
    }

    // Sort by date
    filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

    return filtered
  }

  const getEventById = (id: string): Event | undefined => {
    return allEvents.find(event => event.id === id)
  }

  const getFeaturedEvents = (): Event[] => {
    return allEvents.filter(event => event.featured).slice(0, 3)
  }

  const getUpcomingEvents = (limit: number = 10): Event[] => {
    const now = new Date()
    return allEvents
      .filter(event => new Date(event.date) >= now)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, limit)
  }

  return {
    events: allEvents,
    filterEvents,
    getEventById,
    getFeaturedEvents,
    getUpcomingEvents
  }
}
