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

export const eventDetailService = async (data: {
	access_token: string;
	id: string;
}) => {
	return Api.getEventDetails(data.access_token, data.id);
};

export const updateEventService = async (data: {
	access_token: string;
	orderData: any;
}) => {
	return Api.updateEvent(data.access_token, data.orderData);
};

export const deleteEventService = async (data: {
	access_token: string;
	id: string;
}) => {
	return Api.deleteEvent(data.access_token, data.id);
};

export const checkDateService = async (date: string)=>{
	return Api.checkDate(date)
}

export const getDatesService = async ()=>{
	return Api.getDates()
}

