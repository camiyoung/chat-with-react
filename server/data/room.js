let Rooms = [
  {
    title: 'room1',
    users: ['jiyoung', 'user1'],
    id: 1,
  },
  {
    title: 'room3',
    users: ['jiyoung', 'user2'],
    id: 2,
  },
];
export function setMessage(title, user, message) {
  Rooms.forEach((room) => {
    if (room.title === title) {
      room.messages.push({ user, message });
    }
  });
  return { user, message };
}

export function getRooms() {
  return Rooms;
}

export async function getRoom(title) {
  const room = Rooms.find((room) => room.title === title);
  return room;
}
export async function getRoomById(id) {
  const filterd = Rooms.find((room) => room.id === id);

  return filterd;
}

export async function addUserToRoom(username, title) {
  let alreadyIn = false;
  const room = Rooms.find((room) => room.title === title);
  if (room) {
    room.users.forEach((user) => {
      if (user === username) alreadyIn = true;
    });
    if (!alreadyIn) room.users.push(username);
  }
  return room;
}
export async function createRoom(title, user) {
  Rooms = [
    ...Rooms,
    {
      title,
      users: [user],
      id: Date.now(),
    },
  ];
  return Rooms;
}
