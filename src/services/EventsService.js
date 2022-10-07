import { AppState } from '../AppState.js';
import { Event } from '../models/Event.js';
import { api } from "./AxiosService.js";

class EventsService {

  async getEvents(eventData) {
    AppState.events = []
    const res = await api.get('api/events', eventData)
    AppState.events = res.data.map(e => new Event(e))
  }

  async deleteEvent(id) {
    const res = await api.delete(`api/events/${id}`)
    AppState.events.splice(AppState.events.findIndex(e => e.id == id), 1)
  }


  async createEvent(formData) {
    const res = await api.post('api/events', formData)
    AppState.post = new Event(res.data)
  }
}

export const eventsService = new EventsService()