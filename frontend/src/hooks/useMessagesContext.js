import { MessageContext } from '../context/MessageContext';
import { useContext } from 'react';

export const useMessagesContext = () => {
    const context = useContext(MessageContext)

    if (!context) {
        throw new Error('useMessagesContext must be used within a MessagesContextProvider')
    }

    return context
}
