import { Api } from '../tools/Api';

export const signUpService = async (data: any) => {
	console.log(data);
	return Api.signup(data);
};
export const signInService = async (data: any) => {
	return Api.signin(data);
};
export const refreshService = async (refresh_token: string) => {
	console.log(refresh_token);
	return Api.refresh(refresh_token);
};
export const identifyService = async (access_token: string) => {
	return Api.identify(access_token);
};