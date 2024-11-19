import { User } from '@supabase/supabase-js';
import { createContext, useContext } from 'react';

// Typisierung des Context-Werts
type UserContextType = {
    user: User | null; 
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
};
