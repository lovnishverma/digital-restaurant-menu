document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.querySelector('.carousel-inner');
    const images = [
        "https://cdn.glitch.global/e9c71af1-92e9-47c4-bc4c-89216db142ae/1.png?v=1717395779074",
        "https://cdn.glitch.global/e9c71af1-92e9-47c4-bc4c-89216db142ae/2.png?v=1717395775009",
        "https://cdn.glitch.global/e9c71af1-92e9-47c4-bc4c-89216db142ae/3.png?v=1717395779368",
        "https://cdn.glitch.global/e9c71af1-92e9-47c4-bc4c-89216db142ae/4.png?v=1717395794335",
        "https://cdn.glitch.global/e9c71af1-92e9-47c4-bc4c-89216db142ae/5.png?v=1717395810521",
        "https://cdn.glitch.global/e9c71af1-92e9-47c4-bc4c-89216db142ae/6.png?v=1717395800214",
        "https://cdn.glitch.global/e9c71af1-92e9-47c4-bc4c-89216db142ae/7.png?v=1717395803834",
        "https://cdn.glitch.global/e9c71af1-92e9-47c4-bc4c-89216db142ae/8.png?v=1717395811040",
        "https://cdn.glitch.global/e9c71af1-92e9-47c4-bc4c-89216db142ae/9.png?v=1717395819267"
    ];

    imageContainer.innerHTML = images.map((src, index) => `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <img src="${src}" class="d-block w-100" alt="Image ${index + 1}">
        </div>
    `).join('');
});
