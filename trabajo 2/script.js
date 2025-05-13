function mostrarMensaje() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const nombreCompleto = ${nombre} ${apellido}.toUpperCase();
    document.getElementById('mensaje').textContent = Bienvenido, ${nombreCompleto}!;
  }