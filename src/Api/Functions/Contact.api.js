import axiosInstance from "../AxiosInstance/AxiosInstance";
import { endpoints } from "../Endpoints/Endpoints";

export const contactPost = async (data) => {
  const response = await axiosInstance.post(endpoints.cms.contact, data);
  return response?.data;
};
