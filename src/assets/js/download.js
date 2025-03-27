/**
 * 
 */
	
document.getElementById('file-select').addEventListener('change', function () {
    let downloadBtn = document.getElementById('download-btn');
    if (this.value) {
        downloadBtn.removeAttribute('disabled');
        downloadBtn.onclick = function () {
            window.location.href = this.value; // Simulate download
        };
    } else {
        downloadBtn.setAttribute('disabled', true);
    }
});
