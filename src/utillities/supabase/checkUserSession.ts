
import { supabase } from './supabaseClient';

export const checkUserSession = async () => {

    const token = JSON.parse(localStorage.getItem('sb-127-auth-token') || '{}')

    if (!token) {
        return null;
    }
    const accessToken = token.access_token;
    const refreshToken = token.refresh_token;

    if (accessToken && refreshToken) {
        const { data, error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
        });

        if (error) {
            console.log('Session Error:', error);
            return null;
        }

        return data.user; 
    }

    return null; 
};
