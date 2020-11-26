let icon = document.getElementById('icon-image');
icon.setAttribute('href', 'original.png');

/** @type HTMLInputElement */
let file = document.getElementById('file');
file.addEventListener('change', (e) => {
    if (file.files.length === 0) return;
    let selectedFile = file.files[0];
    let fileUrl = URL.createObjectURL(selectedFile);
    icon.setAttribute('href', fileUrl);
}, false);