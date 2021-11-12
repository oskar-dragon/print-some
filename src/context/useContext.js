import React from "react";

const { Provider, Consumer } = React.createContext();

function ContextProvider({ children }) {
  return <Provider>{children}</Provider>;
}

export { ContextProvider, Consumer as ContextConsumer };
