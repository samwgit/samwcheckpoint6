import { AppState } from "../AppState.js"
import { Account } from "../models/Account.js"
import { api } from "./AxiosService.js"






class EventDetailsService {
  async getEventById(id) {
    const res = await api.get(`/api/events/${id}`)
    AppState.activeEvent = new Event(res.data)
  }
}


export const eventDetailsService = new EventDetailsService()