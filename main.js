function mostrarSecciones() {
  const secciones = document.getElementById('secciones');
  const overlay = document.getElementById('heroOverlay');
  secciones.classList.add('active');
  overlay.classList.add('hidden');
}

function cerrarSecciones() {
  const secciones = document.getElementById('secciones');
  const overlay = document.getElementById('heroOverlay');
  secciones.classList.remove('active');
  overlay.classList.remove('hidden');
}

function toggleResena(element) {
  const resena = element.querySelector('.resena');
  resena.classList.toggle('open');
}
