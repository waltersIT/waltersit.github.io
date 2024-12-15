// Fetch the CSV file
fetch(path)
  .then(response => response.text())
  .then(data => {
    // Split the file content by line
    const lines = data.trim().split('\n');



    // Process each line to extract coordinates
    const coordinatesArray = lines.map(line => {
      const [lat, lon] = line.split(',').map(coord => parseFloat(coord.trim()));
      return [lat, lon];  // Return as an array
    });

    // Initialize the map
    let map = L.map('map').setView([39.630, -77.556], 5);

    // Load and display tile layer on the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
})
.catch(error => console.error('Error fetching the file:', error));