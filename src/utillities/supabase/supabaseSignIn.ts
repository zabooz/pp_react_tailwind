import { supabase } from './supabaseClient';

async function signIn(email: string, password: string) {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            throw error;
        }
        return {
            success: true,
            user: data.user,
            weakPassword: data.weakPassword

        };
    } catch (error) {
        return {
            success: false,
            error: error.message,
        };
    }
}

export default signIn;
