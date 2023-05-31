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

    static async checkPassword(password: string, register: boolean): Promise<string | null>{
        let message: string | null = null;
        if(validator.isEmpty(password)){
            message = 'Password is required';
            return message;
        } else if(register && !validator.isStrongPassword(password)){
            message = 'Weak password';
            return message;
        }
        return message;
    }

    static async checkRepeatPassword(password: string, repeatPassword: string): Promise<string | null>{
        let message: string | null = null;
        if(validator.isEmpty(repeatPassword)){
            message = 'repeatPassword is required';
            return message;
        } else if(password !== repeatPassword){
            message = 'passwords are not equal';
            return message;
        }
        return message;
    }
}
