import axios from "axios";
import { BASE_URL } from "../utils/constant";

export const participantAxios = axios.create({
    baseURL: `${BASE_URL}/api/participant`, 
  });