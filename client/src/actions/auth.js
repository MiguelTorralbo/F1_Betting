import * as api from '../api/auth';

export const signin = async (formData) => {
    try {
        const {data} = await api.signin(formData);
        
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}


export const signup = async (formData) => {
    try {
        const {data} = await api.signup(formData);

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}