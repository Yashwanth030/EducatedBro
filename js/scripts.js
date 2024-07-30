document.addEventListener("DOMContentLoaded", () => {
    const resourceList = document.getElementById('resource-list');

    // Example resource data
    const resources = [
        { title: 'E-Book 1', description: 'An introductory e-book on Mathematics.' },
        { title: 'Video Lecture', description: 'A video lecture on Physics basics.' },
        { title: 'Interactive Tutorial', description: 'An interactive tutorial on coding.' }
    ];

    resources.forEach(resource => {
        const resourceItem = document.createElement('div');
        resourceItem.className = 'resource-item';
        resourceItem.innerHTML = `
            <h3>${resource.title}</h3>
            <p>${resource.description}</p>
        `;
        resourceList.appendChild(resourceItem);
    });
});
