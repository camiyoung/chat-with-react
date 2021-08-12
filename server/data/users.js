let users = [
  {
    username: 'jiyoung',
    rooms: [
      { title: 'room1', messages: [{ sender: 'user1', text: 'hello' }] },
      {
        title: 'room2',
        messages: [
          { sender: 'user1', text: 'hello' },
          { sender: 'user2', text: 'yeah' },
        ],
      },
    ],
  },
];

export async function getUser(username) {
  const finduser = users.find((user) => user.username === username);
  return finduser;
}
export function getUsers() {
  return users;
}

export function signUp(username) {
  const exsitedUser = users.find((user) => user.username === username);

  if (!exsitedUser) {
    users.push({ username, rooms: [] });
  }
}

export async function joinRoom(username, title) {
  const user = await getUser(username);
  user.rooms.push({ title, message: [] });
}

export function roomsByUser(username) {
  let myRoomList;
  if (users) {
    const user = users.find((user) => user.username === username);
    if (user && user.rooms) {
      myRoomList = user.rooms;
    }
  }

  return myRoomList;
}
