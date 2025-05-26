document.addEventListener('DOMContentLoaded', () => {
 
  const map = L.map('map').setView([56.946285, 24.104297], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);


  L.marker([56.946285, 24.104297])
    .addTo(map)
    .bindPopup('Riga')
    .openPopup();
});

