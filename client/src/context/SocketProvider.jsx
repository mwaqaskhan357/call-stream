// import React, { createContext, useMemo, useContext } from "react";
// import { io } from "socket.io-client";

// const SocketContext = createContext(null);

// export const useSocket = () => {
//   const socket = useContext(SocketContext);
//   return socket;
// };

// export const SocketProvider = (props) => {
//   const socket = useMemo(() => io("localhost:8000"), []);

//   return (
//     <SocketContext.Provider value={socket}>
//       {props.children}
//     </SocketContext.Provider>
//   );
// };

import React, { createContext, useContext, useMemo, useState } from 'react';
import { io } from 'socket.io-client';
const socketContext = createContext(null);

export const useSocket = () => {
  const socket = useContext(socketContext);
  return socket;
};

export const SocketProvider = (props) => {
  const [callerId] = useState('690751');
  const socket = useMemo(
    () =>
      io(
        'https://www.api.codewithmaster.com',

        {
          transports: ['websocket', 'polling', 'flashsocket'],
          query: { callerId },
        }
      ),
    []
  );

  return (
    <socketContext.Provider value={socket}>
      {props.children}
    </socketContext.Provider>
  );
};
