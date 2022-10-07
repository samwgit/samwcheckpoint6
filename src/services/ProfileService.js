import { Account } from "../models/Account.js";
import { api } from "../services/AxiosService.js";
import { AppState } from "../AppState.js";


class ProfileService {
  async getProfileById(id) {
    const res = await api.get(`/api/profiles/${id}`)
    AppState.activeProfile = new Account(res.data)
  }
}

export const profileService = new ProfileService();