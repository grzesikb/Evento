import { Api } from '../tools/Api';

export const createGuestListService = (data: {
	access_token: string;
	orderData: { order_id: string };
}) => {
	return Api.createGuestList(data.access_token, data.orderData);
};

export const getGuestsService = (data: {
	access_token: string;
	id: string;
}) => {
	return Api.getGuests(data.access_token, data.id);
};
