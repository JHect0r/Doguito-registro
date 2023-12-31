const listaClientes = () =>
  fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

const crearCliente = (nombre, email) => {
  console.log("Cliente Registrado");
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email, id: uuid.v4() }),
  });
};

const eliminarCliente = (id) => {
  console.log(id);
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE",
  });
};

export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
};
