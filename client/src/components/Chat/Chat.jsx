import React, { useCallback, useEffect } from 'react';
import Content from '../Content/Content';
import SideBar from '../SideBar/SideBar';
import { useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import { useHistory, useLocation } from 'react-router';

let socket;
const Chat = ({ chatService, username }) => {
  const [currentRoom, setCurrentRoom] = useState();
  const [activedRooms, setActivedRooms] = useState([]);

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState();
  const [sendRoom, setSendRoom] = useState();
  const [users, setUsers] = useState();
  const [myChatList, setMyChatList] = useState([]);

  const history = useHistory();
  const BASE_URL = 'http://localhost:8080/';

  useEffect(() => {
    socket = io(BASE_URL);

    socket.emit('signin', { username });
    setCurrentRoom('list');
  }, [BASE_URL]);

  const getRoomList = useCallback(async () => {
    const rooms = await chatService.getRoomList();
    return rooms;
  }, []);

  const getRoomUsers = useCallback(async (title) => {
    const room = await chatService.getRoom(title);
    return room;
  }, []);
  const getMyChatRoom = useCallback(async (username) => {
    const myChatRooms = await chatService.getMyRooms(username);
    return myChatRooms;
  }, []);

  const addToMyChatList = useCallback(async (title) => {
    chatService.joinRoom(username, title);
  }, []);
  async function addMyChat(title) {
    chatService
      .joinRoom(username, title)
      .then((data) => setMyChatList(data))
      .catch((err) => console.error(err));
  }
  useEffect(async () => {
    const rooms = await getRoomList();
    setActivedRooms(rooms);
  }, []);

  useEffect(async () => {
    const mychatlist = await getMyChatRoom(username);
    setMyChatList(mychatlist.rooms);
  }, [currentRoom]);

  useEffect(() => {
    console.log(currentRoom);
    if (myChatList) {
      myChatList.forEach((room) => {
        if (room.title === currentRoom) {
          setMessages(room.messages);
        }
      });
    }
  }, [currentRoom, myChatList]);
  const getMessages = useCallback(
    async (title) => {
      let messages;
      myChatList.forEach((chat) => {
        if (chat.title === title) {
          messages = chat.messages;
        }
      });

      return messages;
    },

    [currentRoom]
  );

  useEffect(() => {
    chatService
      .getRoom(currentRoom)
      .then((data) => {
        setUsers(data.users);
      })
      .catch((error) => console.error(error));
  }, []);

  const sendMessage = useCallback((message, sentRoom) => {
    if (message) {
      socket.emit('sendMessage', message, sentRoom, username);
    }
  }, []);
  const changeMessages = useCallback((messages) => {
    setMessages(messages);
  }, []);
  const onClickRoom = useCallback(async (title) => {
    let alreadyIn = false;
    const myRoomInfo = myChatList;

    myRoomInfo.forEach((room) => {
      if (room.title === title) alreadyIn = true;
    });
    if (!alreadyIn) {
      console.log('미참여방');
      await addToMyChatList(title);
      setMyChatList((mychatlist) => [...mychatlist, { title, messages: [] }]);
      socket.emit('user list', { title });
    }
    const roominfo = await getRoomUsers(title);
    console.log(roominfo.users);
    setUsers(roominfo);
    setCurrentRoom(title);
  });

  const onRoomListBtn = async () => {
    setCurrentRoom('list');
    history.push('/chat');
    const roomlist = await getRoomList();
    setActivedRooms(roomlist);
  };

  const onNewChatBtn = useCallback(async (title) => {
    setActivedRooms((activedRooms) => {
      return [...activedRooms, { title }];
    });
    await chatService.postRoom(username, title);
    onClickRoom(title);
  }, []);

  const addNewMessage = useCallback((message, title) => {
    myChatList.forEach((room) => {
      if (room.title === title) {
        console.log(room.messages);
      }
    });
  });

  useEffect(() => {
    socket.on('message', (message) => {
      setMessage(message);
    });
    socket.on('users', (room) => {
      console.log(room);
      setUsers(room);
    });
  }, []);

  return (
    <div className='app'>
      <SideBar
        roomList={myChatList}
        addMyChat={addMyChat}
        message={message}
        currentRoom={currentRoom}
        onClickRoom={onClickRoom}
        onRoomListBtn={onRoomListBtn}
        onNewChatBtn={onNewChatBtn}
        username={username}
        chatService={chatService}
        setMessages={setMessages}
      />
      <Content
        roomList={activedRooms}
        currentRoom={currentRoom}
        onClickRoom={onClickRoom}
        addMyChat={addMyChat}
        user={username}
        sendMessage={sendMessage}
        messages={messages}
        users={users}
        setMessages={setMessages}
        getMessages={getMessages}
        myChatList={myChatList}
        message={message}
        sendRoom={sendRoom}
        getRoomUsers={getRoomUsers}
      />
    </div>
  );
};
export default Chat;
