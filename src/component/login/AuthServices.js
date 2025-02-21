import { authPostService } from "../../utilis/globalApiServices";

const adminLogin = async (data) => {
    try {
        const res = await authPostService('/login', data)
        return res;
    } catch (error) {
        console.error("Error in adminLogin:", error);
        throw error;
    }
}

const adminRegister = async (data) => {
    try {
        const res = await authPostService('/register', data)
        return res;
    } catch (error) {
        console.error("Error in adminLogin:", error);
        throw error;
    }
}

export const AuthService = {
    adminLogin,
    adminRegister
   
}