import type { Event, TranslatedText, Locale } from '~/types/event'

export const useTranslatedEvent = () => {
  const { locale } = useI18n()

  /**
   * Get translated text based on current locale
   */
  const getTranslatedText = (text: TranslatedText): string => {
    const currentLocale = locale.value as Locale
    return text[currentLocale] || text.fr
  }

  /**
   * Get event with translated fields based on current locale
   */
  const getLocalizedEvent = (event: Event) => {
    return {
      ...event,
      title: getTranslatedText(event.title),
      description: getTranslatedText(event.description)
    }
  }

  /**
   * Get array of events with translated fields
   */
  const getLocalizedEvents = (events: Event[]) => {
    return events.map(event => getLocalizedEvent(event))
  }

  return {
    getTranslatedText,
    getLocalizedEvent,
    getLocalizedEvents
  }
}
