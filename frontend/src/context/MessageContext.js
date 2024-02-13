import { createContext, useReducer } from "react";

export const MessageContext = createContext();

export const messageReducer = (state, action) => {
  switch (action.type) {
    case "SET_MESSAGES":
      if (!action.payload.title === undefined) {
        console.log("Receive commande response");
      }
      return {
        messages: action.payload,
      };

    case "ADD_MESSAGE":
      return {
        messages: [action.payload, ...state.messages],
      };
    default:
      return state;
  }
};

export const MessagesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(messageReducer, {
    messages: null,
  });

  return (
    <div>
      <MessageContext.Provider value={{ ...state, dispatch }}>
        {children}
      </MessageContext.Provider>
    </div>
  );
};
