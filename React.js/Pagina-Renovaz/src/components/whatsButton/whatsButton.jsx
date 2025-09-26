import "./whatsButton.css";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5562995635794"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
}

export default WhatsAppButton;