import React, { useCallback, useEffect } from 'react';
import Content from '../Content/Content';
import SideBar from '../SideBar/SideBar';
import { useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import { useHistory, useLocation } from 'react-router';

let socket;
const Chat = ({ chatService, username }) => {
  const [currentRoom, setCurrentRoom] = useState('list');
  const [activedRooms, setActivedRooms] = useState([]);

  const [messages, setMessages] = useState([]);

  const [users, setUsers] = useState();
  const [myChatList, setMyChatList] = useState([]);

  const history = useHistory();
  const BASE_URL = 'http://localhost:8080/';

  useEffect(() => {
    socket = io(BASE_URL);

    socket.emit('signin', { username });
  }, [BASE_URL]);

  const getRoomList = useCallback(async () => {
    const rooms = await chatService.getRoomList();
    return rooms;
  }, []);

  const getRoomUsers = useCallback(async (title) => {
    const room = await chatService.getRoom(title);
    return room.users;
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
  }, []);

  useEffect(() => {
    if (myChatList) {
      myChatList.forEach((room) => {
        if (room.title === currentRoom) {
          setMessages(room.messages);
        }
      });
    }
  }, []);

  useEffect(() => {
    chatService
      .getRoom(currentRoom)
      .then((data) => {
        setUsers(data.users);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    socket.on('user list', (userList, room) => {
      console.log('userlist ->' + userList);
      console.log(room, currentRoom);
      if (currentRoom === room) {
        setUsers(userList);
      }
    });
  }, []);
  const sendMessage = useCallback((message, sentRoom) => {
    if (message) {
      socket.emit('sendMessage', message, sentRoom, username);
    }
  }, []);

  const changeCurrentRoom = useCallback((title) => {
    setCurrentRoom(title);
  }, []);

  const onClickRoom = useCallback(async (title) => {
    let alreadyIn = false;
    const myRoomInfo = myChatList;
    console.log(myRoomInfo);
    console.log(title);
    myRoomInfo.forEach((room) => {
      if (room.title === title) alreadyIn = true;
    });
    if (!alreadyIn) {
      console.log('미참여방');
      await addToMyChatList(title);
      setMyChatList((mychatlist) => [...mychatlist, { title, messages: [] }]);
    }
    changeCurrentRoom(title);
  });
  // function onClickRoom(title) {
  //   console.log(title);

  //   let alreadyIn = false;
  //   setCurrentRoom(title);
  //   console.log(currentRoom);
  //   myChatList.forEach((chatroom) => {
  //     if (chatroom.title === title) alreadyIn = true;
  //   });

  //   if (!alreadyIn) {
  //     addMyChat(title);
  //     socket.emit('join', { room: title });
  //   }

  //   history.push(`/chat/${title}`);
  //   socket.emit('current room', currentRoom);
  // }

  const onRoomListBtn = async () => {
    setCurrentRoom('list');
    history.push('/chat');
    const roomlist = await getRoomList();
    setActivedRooms(roomlist);
    console.log(roomlist);
  };

  const onNewChatBtn = (title) => {
    setActivedRooms((activedRooms) => {
      return [...activedRooms, { title }];
    });
  };

  useEffect(() => {
    socket.on('message', (room, message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, []);

  return (
    <div className='app'>
      <SideBar
        roomList={myChatList}
        addMyChat={addMyChat}
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
      />
    </div>
  );
};
export default Chat;
