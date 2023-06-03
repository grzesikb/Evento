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
	static async checkEmail(email: string){
		return Api.axiosInstance.get('/user/checkEmail',{
			params: {email},
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

	static async getUserEvents(access_token: string) {
		return Api.axiosInstance.get('/order/my/', {
			headers: {
				'Access-Control-Allow-Origin': '*',
				Authorization: `Bearer ${access_token}`,
			},
		});
	}

	static async createEvent(access_token: string, data: any) {
		console.log(data);
		return Api.axiosInstance.post('/order/', data, {
			headers: {
				'Access-Control-Allow-Origin': '*',
				Authorization: `Bearer ${access_token}`,
			},
		});
	}

	static async getEventDetails(access_token: string, id: string) {
		return Api.axiosInstance.get('/order/' + id, {
			headers: {
				'Access-Control-Allow-Origin': '*',
				Authorization: `Bearer ${access_token}`,
			},
		});
	}

	static async updateEvent(access_token: string, data: any) {
		return Api.axiosInstance.post('/order/update/', data, {
			headers: {
				'Access-Control-Allow-Origin': '*',
				Authorization: `Bearer ${access_token}`,
			},
		});
	}

	static async deleteEvent(access_token: string, id: string) {
		return Api.axiosInstance.delete('/order/' + id, {
			headers: {
				'Access-Control-Allow-Origin': '*',
				Authorization: `Bearer ${access_token}`,
			},
		});
	}

	static async createGuestList(access_token: string, data: any) {
		return Api.axiosInstance.post('/guestList/', data, {
			headers: {
				'Access-Control-Allow-Origin': '*',
				Authorization: `Bearer ${access_token}`,
			},
		});
	}

	static async getGuests(access_token: string, id: string) {
		return Api.axiosInstance.get('/order/' + id + '/guest_list', {
			headers: {
				'Access-Control-Allow-Origin': '*',
				Authorization: `Bearer ${access_token}`,
			},
		});
	}

	static async addGuest(access_token: string, data: any) {
		return Api.axiosInstance.post('/guest/', data, {
			headers: {
				'Access-Control-Allow-Origin': '*',
				Authorization: `Bearer ${access_token}`,
			},
		});
	}
}
