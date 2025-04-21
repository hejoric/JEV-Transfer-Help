function goToGuide() {
  const dropdown = document.getElementById("university-dropdown");
  const selected = dropdown.value;

  if (selected) {
    // Redirect to the selected university's page
    window.location.href = selected;
  } else {
    alert("Please select a university.");
  }
}

document.getElementById('transcript-upload').addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (file && file.name.endsWith('.pdf')) {
    document.getElementById('parsed-output').style.display = 'block';
  } else {
    alert('Please upload a valid PDF file.');
    e.target.value = ''; // reset file input
  }
});
