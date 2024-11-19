import { supabase } from './supabaseClient';

async function signUp(email: string, password: string) {
    try {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: 'http://localhost:5173/confirm',
            },
        });

        if (error) {
            throw error;
        }

        return {
            success: true,
            user: data.user,
        };
    } catch (error) {
        return {
            success: false,
            error: error.message,
        };
    }
}

export default signUp;
