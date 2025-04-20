function goToGuide() {
  const dropdown = document.getElementById("university-dropdown");
  const selected = dropdown.value;
  if (selected) {
    window.location.href = selected;
  } else {
    alert("Please select a university.");
  }
}