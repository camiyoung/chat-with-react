import React, { useCallback, useEffect } from 'react';
import Content from '../Content/Content';
import SideBar from '../SideBar/SideBar';
import { useState } from 'react';
import io from 'socket.io-client';

import { useHistory } from 'react-router';

let socket;
const Chat = ({ chatService, username, baseURL }) => {
  const [currentRoom, setCurrentRoom] = useState();
  const [activedRooms, setActivedRooms] = useState([]);

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState();

  const [users, setUsers] = useState();
  const [myChatList, setMyChatList] = useState([]);

  const history = useHistory();

  useEffect(() => {
    socket = io(baseURL);

    socket.emit('signin', { username });
    setCurrentRoom('list');
  }, [username, baseURL]);

  const getRoomList = useCallback(async () => {
    const rooms = await chatService.getRoomList();
    return rooms;
  }, [chatService]);

  const getRoomUsers = useCallback(
    async (title) => {
      const room = await chatService.getRoom(title);
      return room;
    },
    [chatService]
  );
  const getMyChatRoom = useCallback(
    async (username) => {
      const myChatRooms = await chatService.getMyRooms(username);
      return myChatRooms;
    },
    [chatService]
  );

  const addToMyChatList = useCallback(
    async (title) => {
      return chatService.joinRoom(username, title);
    },
    [chatService, username]
  );
  async function addMyChat(title) {
    chatService
      .joinRoom(username, title)
      .then((data) => setMyChatList(data))
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    (async function () {
      const rooms = await getRoomList();
      setActivedRooms(rooms);
    })();
  }, [getRoomList]);

  useEffect(() => {
    (async function () {
      const mychatlist = await getMyChatRoom(username);
      setMyChatList(mychatlist.rooms);
    })();
  }, [currentRoom, getMyChatRoom, username]);

  useEffect(() => {
    if (myChatList) {
      myChatList.forEach((room) => {
        if (room.title === currentRoom) {
          setMessages(room.messages);
        }
      });
    }
  }, [currentRoom, myChatList]);

  useEffect(() => {
    if (currentRoom !== 'list' && currentRoom !== undefined) {
      console.log(currentRoom);
      chatService
        .getRoom(currentRoom)
        .then((data) => {
          setUsers(data.users);
        })
        .catch((error) => console.error(error));
    }
  }, [chatService, currentRoom]);

  const sendMessage = useCallback(
    (message, sentRoom) => {
      if (message) {
        socket.emit('sendMessage', message, sentRoom, username);
      }
    },
    [username]
  );

  const onClickRoom = useCallback(
    async (title) => {
      let alreadyIn = false;
      const myRoomInfo = myChatList;

      myRoomInfo.forEach((room) => {
        if (room.title === title) alreadyIn = true;
      });
      if (!alreadyIn) {
        const info = await addToMyChatList(title);
        setMyChatList((mychatlist) => [...mychatlist, { title, messages: [] }]);
        socket.emit('user list', { title, users: info.users });
        socket.emit('join', title);
        console.log(info);
        setUsers(info.users);
      }
      const roominfo = await getRoomUsers(title);
      setUsers(roominfo);
      setCurrentRoom(title);
    },
    [myChatList, addToMyChatList, getRoomUsers]
  );

  const onRoomListBtn = async () => {
    setCurrentRoom('list');
    history.push('/chat');
    const roomlist = await getRoomList();
    setActivedRooms(roomlist);
  };

  const onNewChatBtn = useCallback(
    async (title) => {
      setActivedRooms((activedRooms) => {
        return [...activedRooms, { title }];
      });
      await chatService.postRoom(username, title);
      onClickRoom(title);
    },
    [chatService, onClickRoom, username]
  );

  useEffect(() => {
    socket.on('message', (message) => {
      setMessage(message);
    });
    socket.on('users', (room) => {
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
        myChatList={myChatList}
        message={message}
      />
    </div>
  );
};
export default Chat;
