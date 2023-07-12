import axios from "axios";
import { baseUrl } from "./apiEndpoints";

const connectApi = axios.create({ baseURL: baseUrl });

export default connectApi;
