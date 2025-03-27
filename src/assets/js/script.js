/**
 * 
 */
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("file-select").addEventListener("change", function () {
        document.getElementById("download-btn").disabled = !this.value;
    });
});