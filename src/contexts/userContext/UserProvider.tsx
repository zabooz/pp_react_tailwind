import { ReactNode, useState, useMemo, useEffect } from 'react';
import { UserContext } from './userContext';
import { User } from '@supabase/supabase-js';
import { checkUserSession } from '@/utillities/supabase/checkUserSession';

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUserSession = async () => {
            const sessionUser = await checkUserSession(); 
            setUser(sessionUser); 
        };
        fetchUserSession(); 
    }, []); 

    const value = useMemo(() => ({ user, setUser }), [user, setUser]);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
