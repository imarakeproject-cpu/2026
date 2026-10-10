(function(){
  // Numéro et message (formatage automatique)
  const rawPhone = "+243979141747"; // fourni
  const phone = rawPhone.replace(/[^0-9]/g, "");
  const message = "Bonjour, je souhaite plus d'informations."; // message prérempli
  const encoded = encodeURIComponent(message);
  const waUrl = `https://wa.me/${phone}?text=${encoded}`;

  function createButton(){
    if(document.getElementById('whatsapp-button')) return;
    const btn = document.createElement('div');
    btn.id = 'whatsapp-button';
    btn.setAttribute('role','button');
    btn.setAttribute('aria-label','Contactez-nous via WhatsApp');
    btn.title = 'Contactez-nous via WhatsApp';
    // Logo WhatsApp (SVG)
    btn.innerHTML = `
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <path d="M20.52 3.48A11.74 11.74 0 0 0 12 0C5.373 0 .01 5.36.01 12 0 14.09.49 16.13 1.45 17.94L0 24l6.35-1.66A11.92 11.92 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.2-1.25-6.18-3.48-8.52zM12 21.5c-1.84 0-3.64-.5-5.18-1.44l-.37-.22-3.77.98.99-3.68-.24-.38A9.5 9.5 0 1 1 21.5 12 9.49 9.49 0 0 1 12 21.5z"/>
        <path d="M17.36 14.02c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15s-.77.97-.95 1.17c-.17.2-.35.22-.65.07a6.02 6.02 0 0 1-1.77-1.09c-.33-.3-.7-.33-.99-.12-.3.2-1.13.42-2.15-1.31-.8-1.37-.8-2.61-.02-3.62.67-.9 1.88-1.47 2.51-1.66.65-.2 1.26-.17 1.74.02.47.18 1.44.53 2.2.84.76.31 1.3.45 1.6.7.3.25.51.57.36.98-.15.4-.27.66-.48.96-.22.3-.46.64-.66.86-.2.21-.39.43-.21.78.18.35.8 1.3 1.72 2.1 1.19 1.06 1.4 1.86 1.24 2.15-.16.29-.47.42-.83.28z" fill="#fff"/>
      </svg>
    `;
    btn.addEventListener('click', function(){
      window.open(waUrl,'_blank');
    });
    document.body.appendChild(btn);
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', createButton);
  } else {
    createButton();
  }
})();
