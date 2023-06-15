import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nombre = document.querySelector("[data-nombre]").value;
  const email = document.querySelector("[data-email]").value;
  console.log("Datos cliente", nombre, "Correo ", email);
  clientServices
    .crearCliente(nombre, email)
    .then(() => {
      console.log("LLamada a Registrar cliente");
      window.location.href =
        "/1836-CRUD_JS_Async-proyecto_base/screens/registro_completado.html";
    })
    .catch((err) => console.log(err));
});
