import axios, { AxiosInstance } from 'axios';

export class Api {
	private static axiosInstance: AxiosInstance;

	public static async initAxios() {
		Api.axiosInstance = axios.create({
			baseURL: 'http://localhost:8000',
		});
	}

	static async signup(data: any) {
		return Api.axiosInstance.post('/user/', data, {
			headers: { 'Access-Control-Allow-Origin': '*' },
		});
	}
	static async signin(data: any) {
		return Api.axiosInstance.post('/auth/login/', data, {
			headers: { 'Access-Control-Allow-Origin': '*' },
		});
	}
	static async refresh(refresh_token: string) {
		return Api.axiosInstance.get('/auth/refreshToken/', {
			headers: {
				'Access-Control-Allow-Origin': '*',
				Authorization: `Bearer ${refresh_token}`,
			},
		});
	}
	static async identify(access_token: string) {
		return Api.axiosInstance.get('/user/me/', {
			headers: {
				'Access-Control-Allow-Origin': '*',
				Authorization: `Bearer ${access_token}`,
			},
		});
	}
}
