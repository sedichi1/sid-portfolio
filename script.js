function sendMail(event) {
  event.preventDefault();

  const params = {
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_y0hcqx7", "template_zesgaev", params)
    .then(() => {
      alert("Message sent successfully!");
    })
    .catch((err) => {
      console.error("Failed to send message", err);
      alert("Failed to send message. Please try again.");
    });
}
