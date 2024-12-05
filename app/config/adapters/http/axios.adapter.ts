import axios, { AxiosInstance } from "axios";
import HttpAdapter from "./http.adapter";

interface Options {
    baseUrl: string;
    params: Record<string, string>
}


class AxiosAdapter implements HttpAdapter {
    private axiosInstace: AxiosInstance;

    constructor(options: Options) {
        this.axiosInstace = axios.create({
            baseURL: options.baseUrl,
            params: options.params
        });
    };

    async get<T>(url: string, options?: Record<string, unknown>): Promise<T> {
        try {
            const { data } = await this.axiosInstace.get<T>(url, options);

            return data;
        } catch (error) {
            throw new Error(`Error fetching get: ${url}`);
        }
    }
}

export default AxiosAdapter;