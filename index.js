function calculateTriangleArea() {
    // Get input values
    const baseInput = document.getElementById('baseInput');
    const heightInput = document.getElementById('heightInput');
  
    const base = parseFloat(baseInput.value);
    const height = parseFloat(heightInput.value);
  
    // Check if the inputs are valid numbers
    if (isNaN(base) || isNaN(height)) {
      alert('Please enter valid numbers for base and height.');
      return;
    }
  
    // Calculate the area of the triangle
    const area = (base * height) / 2;
  
    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Area of the triangle: ${area.toFixed(2)}`;
  }
  