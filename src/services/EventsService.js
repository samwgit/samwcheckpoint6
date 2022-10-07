const { AppState } = require("../AppState.js")
const { api } = require("./AxiosService.js")

class EventsService {

  async getEvents(eventData) {
    const res = await api.get('/api/events', eventData)
    const event = new Event(res.data)
    AppState.events = [...AppState.events, event]
    AppState.activeEvent = event
  }
}

const eventsService = new EventsService()