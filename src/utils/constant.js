import io from "socket.io-client";
export const BASE_URL = "http://localhost:5000";
// export const BASE_URL = "https://gedexoquizserver.auxxweb.in"

export const socket = io.connect(BASE_URL);
