import axios from "axios";
import { UseEnvironmentVariables } from "./UseEnvironmentVariables";

export const get = async <T,>(
  uri: string,
  isSecure: boolean = true,
  isOverrideUrl: boolean = false
) => {
  // const { url, header } = getRequestArgs(uri, isSecure, isOverrideUrl);
  try {
    const response = await axios.get(UseEnvironmentVariables().apiUri + uri); //url, header);
    return { status: response.status, data: response.data };
  } catch (errorResponse) {
    return getErrors(errorResponse);
  }
};

const getErrors = (errorResponse: any) => {
  const status = errorResponse?.response?.status ?? 0;
  const data = errorResponse?.response?.data;
  return data ? { status, data } : { status, data: "Unknown network error" };
};
