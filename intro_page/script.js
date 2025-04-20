function goToGuide() {
  const dropdown = document.getElementById("university-dropdown");
  const selected = dropdown.value;
  if (selected) {
    window.location.href = selected;
  } else {
    alert("Please select a university.");
  }
}
function toggleTips() {
  const tips = document.getElementById('securityTips');
  tips.classList.toggle('show');
}

document.addEventListener('click', (event) => {
  const tips = document.getElementById('securityTips');
  const btn = document.querySelector('.security-btn');
  
  if (event.target.classList.contains('close-btn') || 
      (!tips.contains(event.target) && event.target !== btn)) {
    tips.classList.remove('show');
  }
});