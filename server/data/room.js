let Rooms = [
  {
    id: 1,
    title: 'room1',
    users: ['jiyoung', 'hye', 'coco'],
    messages: [
      { user: 'jiyoung', message: 'hello' },
      { user: 'hye', message: 'wow hello' },
      { user: 'coco', message: 'chat room 1' },
    ],
  },
  {
    id: 2,
    title: 'room2',
    users: ['jiyoung', 'coco'],
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
    users: ['hye', 'coco'],
    messages: [
      { user: 'hye', message: 'wow hello' },
      { user: 'coco', message: 'chat room 3' },
    ],
  },
];

export function getRooms() {
  let list = [];
  Rooms.map((room) => {
    list.push({ id: room.id, title: room.title });
  });
  return list;
}

export function getRoom(title) {
  const room = Rooms.find((room) => room.title === title);
  return room;
}
export async function getRoomById(id) {
  const filterd = Rooms.find((room) => room.id === id);

  return filterd;
}

export function createRoom(title, user) {
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
