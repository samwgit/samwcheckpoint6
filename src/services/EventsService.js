import { AppState } from '../AppState.js';
import { TowerEvent } from '../models/Event.js';
import { logger } from '../utils/Logger.js';
import { api } from "./AxiosService.js";

class EventsService {

  async getEvents(eventData) {
    AppState.events = []
    const res = await api.get('api/events', eventData)
    AppState.events = res.data.map(e => new TowerEvent(e))
  }

  // async deleteEvent(id) {
  //   const res = await api.delete(`api/events/${id}`)
  //   AppState.events.splice(AppState.events.findIndex(e => e.id == id), 1)
  // }


  async createEvent(editable) {
    const res = await api.post('api/events', editable)
    AppState.events.unshift(res.data)
    logger.log(res.data)
    return res.data
  }
}

export const eventsService = new EventsService()