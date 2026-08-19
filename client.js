const { io } = require("socket.io-client");

const socket = io("http://localhost:80");

socket.on("connect", () => {
  console.log("Conectado ao servidor!");

  socket.emit(
    "validate",
    {
      userName: "thais",
      password: "123"
    },
    (resposta) => {
      console.log("Resposta do validate:", resposta);
    }
  );
});

socket.on("newUser", (users) => {
  console.log("Evento newUser recebido:", users);
});