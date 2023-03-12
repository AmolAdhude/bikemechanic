// Define global variables for storing form data
let brand = '';
let model = '';
let services = [];
let date = '';
let email = '';
let phone = '';

// Get references to form elements
const brandSelect = document.querySelector('#brand');
const modelSelect = document.querySelector('#model');
const serviceCheckboxes = document.querySelectorAll('input[name="service"]');
const dateInput = document.querySelector('#date');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');

// Set up event listeners for step navigation buttons
document.querySelector('#step1 button[type="button"]').addEventListener('click', function() {
  toggleStep('#step1', '#step2');
  updateModelList();
});
document.querySelector('#step2 button[type="button"]:nth-of-type(1)').addEventListener('click', function() {
  toggleStep('#step2', '#step1');
});
document.querySelector('#step2 button[type="button"]:nth-of-type(2)').addEventListener('click', function() {
  toggleStep('#step2', '#step3');
});
document.querySelector('#step3 button[type="button"]').addEventListener('click', function() {
  toggleStep('#step3', '#step2');
});

// Set up event listener for form submission
document.querySelector('#myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission behavior
  // Get form data and store it in global variables
  brand = brandSelect.value;
  model = modelSelect.value;
  services = Array.from(serviceCheckboxes).filter((checkbox) => checkbox.checked).map((checkbox) => checkbox.value);
  date = dateInput.value;
  email = emailInput.value;
  phone = phoneInput.value;
  // Do something with the form data, e.g. send it to a server
  console.log({
    brand,
    model,
    services,
    date,
    email,
    phone,
  });
});

// Helper function to toggle between form steps
function toggleStep(hideStep, showStep) {
  document.querySelector(hideStep).style.display = 'none';
  document.querySelector(showStep).style.display = 'block';
}

// Helper function to update the model select list based on the selected brand
function updateModelList() {
  const brand = brandSelect.value;
  const models = getModelsForBrand(brand);
  modelSelect.innerHTML = '';
  for (let model of models) {
    const option = document.createElement('option');
    option.value = model;
    option.textContent = model;
    modelSelect.appendChild(option);
  }
}

// Helper function to get a list of models for a given brand
function getModelsForBrand(brand) {
  switch (brand) {
    case 'Toyota':
      return ['Camry', 'Corolla', 'Rav4', 'Highlander', 'Sienna'];
    case 'Honda':
      return ['Civic', 'Accord', 'CR-V', 'Odyssey', 'Pilot'];
    case 'Ford':
      return ['F-150', 'Explorer', 'Escape', 'Mustang', 'Ranger'];
    case 'BMW':
      return ['3 Series', '5 Series', '7 Series', 'X3', 'X5'];
    case 'Mercedes':
      return ['C-Class', 'E-Class', 'S-Class', 'GLC', 'GLE'];
    default:
      return [];
  }
}
