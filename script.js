document.getElementById('registroForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Evita el envío del formulario

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const edad = document.getElementById('edad').value;

  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = `
    <h2>Datos Registrados:</h2>
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Edad:</strong> ${edad}</p>
  `;
});
