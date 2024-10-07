import { Socket } from "dgram";
import { Server } from "socket.io";

const io = new Server({
    cors:{
        origin: "http://localhost:5173",

    }
});

let onlineUser = [];

const addUser = (userId, socketId) => {
    const userExits = onlineUser.find((user) => user.userId === userId);
    if (!userExits) {
        onlineUser.push({userId, socketId})
    }
};

const removeUser = (socketid) => {
    onlineUser = onlineUser.filter((user) => user.socketId);
}

const getUser = (userId) => {
    return onlineUser.find((user) => user.userId === userId);
}

io.on("connection", (socket) => {
    socket.on("newUser", (userId) => {
        addUser(userId, socket.id)
    })
    socket.on("disconnect", ()=> {
        removeUser(socket.id)
    })
});

io.listen("4000")