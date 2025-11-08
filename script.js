document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const response = document.getElementById("responseMessage");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!name || !email || !message || !emailRegex.test(email)) {
  response.textContent = "Por favor, completa todos los campos correctamente.";
  response.style.color = "red";
  return;
}

  // Simulación de envío POST
  fetch("https://formspree.io/f/xgvrwkqo", {
   
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, message })
  })
  .then(res => {
    if (res.ok) {
      response.textContent = "¡Mensaje enviado con éxito!";
      response.style.color = "green";
      document.getElementById("contactForm").reset();
    } else {
      throw new Error("Error en el envío");
    }
  })
  .catch(() => {
    response.textContent = "Hubo un problema al enviar el mensaje.";
    response.style.color = "red";
  });
});
