/**
 * 
 */
/**<!-- JavaScript for Drag & Drop & Subject Selection -->*/

    const dropZone = document.getElementById("drop-zone");
    const fileInput = document.getElementById("fileInput");
    const browseButton = document.getElementById("browseButton");
    const uploadButton = document.getElementById("uploadButton");
    const filePath = document.getElementById("filePath");
    const subjectSelect = document.getElementById("subjectSelect");
    const customSubjectDiv = document.getElementById("customSubjectDiv");
    const customSubject = document.getElementById("customSubject");

    // Drag & Drop Events
    dropZone.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZone.classList.add("active");
    });

    dropZone.addEventListener("dragleave", () => {
        dropZone.classList.remove("active");
    });

    dropZone.addEventListener("drop", (e) => {
        e.preventDefault();
        dropZone.classList.remove("active");

        let files = e.dataTransfer.files;
        if (files.length > 0) {
            fileInput.files = files;
            filePath.value = files[0].name;
            uploadButton.disabled = false;
        }
    });

    // File selection via button
    browseButton.addEventListener("click", () => {
        fileInput.click();
    });

    fileInput.addEventListener("change", () => {
        if (fileInput.files.length > 0) {
            filePath.value = fileInput.files[0].name;
            uploadButton.disabled = false;
        }
    });

    // Subject selection logic
    subjectSelect.addEventListener("change", () => {
        if (subjectSelect.value === "other") {
            customSubjectDiv.style.display = "block";
            customSubject.required = true;
        } else {
            customSubjectDiv.style.display = "none";
            customSubject.required = false;
        }
    });