import { AppState } from "../AppState.js"
import { Account } from "../models/Account.js"
import { TowerEvent } from "../models/Event.js"
import { api } from "./AxiosService.js"






class EventDetailsService {
  async getEventById(eventId) {
    const res = await api.get(`/api/events/${eventId}`)
    AppState.activeEvent = new TowerEvent(res.data)
  }
}


export const eventDetailsService = new EventDetailsService()