let Rooms = [
  {
    id: 1,
    title: 'room1',
    users: ['coco', 'user33'],
    messages: [
      { user: 'jiyoung', message: 'hello' },
      { user: 'hye', message: 'wow hello' },
      { user: 'coco', message: 'chat room 1' },
    ],
  },
  {
    id: 2,
    title: 'room2',
    users: [],
    messages: [
      { user: 'jiyoung', message: 'hello' },

      { user: 'coco', message: 'chat room 1' },
      { user: 'jiyoung', message: 'room1?' },

      { user: 'coco', message: 'no room2 sorry' },
    ],
  },
  {
    id: 3,
    title: 'room3',
    users: [],
    messages: [
      { user: 'hye', message: 'wow hello' },
      { user: 'coco', message: 'chat room 3' },
    ],
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
}
export async function createRoom(title, user) {
  Rooms = [
    ...Rooms,
    {
      id: Date.now(),
      title,
      users: [user],
      messages: [],
    },
  ];
  return Rooms;
}
