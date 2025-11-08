function autor(){
  Swal.fire({
      title: 'DAVID RAMÍREZ GRIÑO',
      text: 'Desarrollado por:',
      icon: 'success',
      confirmButtonText: 'OK'
  });
}

function comentario() {
  const area = document.getElementById("comentario");
  const texto = (area?.value || "").trim();

  if (!texto) {
    Swal.fire("Error", "Por favor escribe algo antes de enviar.", "error");
    return;
  }

  Swal.fire("¡Gracias!", "Tu comentario ha sido enviado correctamente.", "success");
  area.value = "";
}

window.addEventListener("scroll", function() {
  const btn = document.getElementById("subir");
  if (!btn) return;
  const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
  btn.style.display = (scrolled > 150) ? "block" : "none";
});

function subirArriba() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
