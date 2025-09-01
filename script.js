let currentProject = null;
let currentIndex = 0;

function openModal(project) {
    currentProject = project;
    currentIndex = 0;

    document.getElementById("modalTitle").innerText = project.title;
    updateMedia();
    updateThumbnails();
    document.getElementById("modal").style.display = "block";
}

function updateMedia() {
    const sliderMedia = document.getElementById("sliderMedia");
    sliderMedia.innerHTML = "";

    if (!currentProject || !currentProject.media.length) return;

    const src = currentProject.media[currentIndex];
    let mediaElem;

    if (/\.(mp4|webm|ogg)$/i.test(src)) {
        mediaElem = document.createElement("video");
        mediaElem.src = src;
        mediaElem.controls = true;
        mediaElem.autoplay = true;
    } else {
        mediaElem = document.createElement("img");
        mediaElem.src = src;
        mediaElem.alt = currentProject.title;
    }

    sliderMedia.appendChild(mediaElem);
    updateNavButtons();
}

function updateThumbnails() {
    const thumbnailContainer = document.getElementById("thumbnailGallery");
    thumbnailContainer.innerHTML = "";

    currentProject.media.forEach((src, idx) => {
        const thumb = document.createElement("img");
        thumb.src = src;
        thumb.alt = `Thumbnail ${idx + 1}`;
        thumb.classList.add("thumbnail");
        if (idx === currentIndex) thumb.classList.add("active");

        thumb.onclick = () => {
            currentIndex = idx;
            updateMedia();
            updateThumbnails();
        };

        thumbnailContainer.appendChild(thumb);
    });
}

function updateNavButtons() {
    const navLeft = document.getElementById("navLeft");
    const navRight = document.getElementById("navRight");

    navLeft.style.display = currentIndex > 0 ? "block" : "none";
    navRight.style.display = currentIndex < currentProject.media.length - 1 ? "block" : "none";
}

// Navigation buttons event listeners
document.getElementById("navLeft").addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateMedia();
        updateThumbnails();
    }
});

document.getElementById("navRight").addEventListener("click", () => {
    if (currentIndex < currentProject.media.length - 1) {
        currentIndex++;
        updateMedia();
        updateThumbnails();
    }
});

// Close Modal event listener
document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
});
