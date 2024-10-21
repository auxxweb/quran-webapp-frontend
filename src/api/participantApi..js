import { participantAxios } from "../config/participantAxios";

// GET Participant details
export const getParticipantDetailsHandler = async (id) => {
  const response = await participantAxios.get(`/${id}`);
  return response.data;
};

// GET Question details
export const getQuestionDetailsHandler = async ( resultId,questionId ) => {
  const response = await participantAxios.get(`/question/${resultId}/${questionId}`);
  return response.data;
};
// GET Zone details
export const getZoneDetailsHandler = async (zoneId) => {
  const response = await participantAxios.get(`/zone/${zoneId}`);
  return response.data;
};
