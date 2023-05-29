import { Api } from '../tools/Api';

export const userEventsService = async (access_token: string) => {
	return Api.getUserEvents(access_token);
};
export const createEventService = async (data: {
	access_token: string;
	orderData: any;
}) => {
	console.log(data);
	return Api.createEvent(data.access_token, data.orderData);
};
