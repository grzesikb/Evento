import { Api } from '../tools/Api';

export const editUserProfileService = async (data: {
	access_token: string;
	userData: any;
}) => {
	return Api.editUserProfile(data.access_token, data.userData);
};

export const changePasswordService = async (data: {
	access_token: string;
	userData: any;
}) => {
	return Api.changePassword(data.access_token, data.userData);
};
