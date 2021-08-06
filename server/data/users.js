let users = [{ username: 'jiyoung', rooms: [] }];

async function getUser(username) {
  const finduser = users.find((user) => user.username === username);
  return finduser;
}
export function getUsers() {
  return users;
}

export function signUp(username) {
  let exsitedUser = false;
  users.map((user) => {
    if (user.username === username) {
      exsitedUser = true;
    }
  });

  if (!exsitedUser) {
    users.push({ username, rooms: [] });
  }
}

export async function joinRoom(username, title) {
  const user = await getUser(username);
  let existed = false;
  user.rooms &&
    user.rooms.map((room) => {
      if (room.title === title) existed = true;
    });

  if (!existed) user.rooms.push({ title });

  return user.rooms;
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
