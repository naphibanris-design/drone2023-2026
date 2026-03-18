// script.js

function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const fileContent = e.target.result;
            console.log('File content:', fileContent);
            // Code to handle the file content
        };
        reader.readAsText(file);
    } else {
        console.log('No file selected.');
    }
}

// Event listener for file input
document.getElementById('uploadBtn').addEventListener('click', uploadFile);