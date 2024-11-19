import { supabase } from './supabaseClient';

const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
        console.error(error);
        return false;
    }
    return true;
};

export default signOut;
