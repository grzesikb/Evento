import validator from "validator";

export class Validator {
	static async checkEmail(email: string): Promise<string | null>{
        let message: string | null = null;
        if(validator.isEmpty(email)){
            message = 'Email is required';
            return message;
        } else if(!validator.isEmail(email)){
            message = 'Invalid email';
            return message;
        }
		return message;
	}
}
