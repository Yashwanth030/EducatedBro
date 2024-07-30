document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded event fired');
    fetchBooks();
    addStaticResources();
    addInteractiveTools();
    addForums();
    addTeacherResources();
});

async function fetchBooks() {
    console.log('fetchBooks called');
    try {
        const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=education');
        const data = await response.json();
        const resourceList = document.getElementById('resource-list');

        data.items.forEach(item => {
            const book = document.createElement('div');
            book.className = 'book';
            book.innerHTML = `
                <h3>${item.volumeInfo.title}</h3>
                <p>${item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Unknown Author'}</p>
                <p>${item.volumeInfo.publishedDate}</p>
            `;
            resourceList.appendChild(book);
        });
    } catch (error) {
        console.error('Error fetching books:', error);
    }
}

function addStaticResources() {
    console.log('addStaticResources called');
    const resourceList = document.getElementById('resource-list');
    const resources = [
        { title: 'Khan Academy    (Click me)    ', description: 'Free online courses, lessons & practice.', link: 'https://www.khanacademy.org/' },
        { title: 'Coursera    (Click me)  ', description: 'Online courses from top universities and companies.', link: 'https://www.coursera.org/' },
        { title: 'edX    (Click me)'  , description: 'Access 2000 free online courses from 140 leading institutions worldwide.', link: 'https://www.edx.org/' },
        { title: 'GeeksforGeeks    (Click me)  ', description: 'Computer languages to Interview level learn.', link: 'https://www.geeksforgeeks.org/' },
        { title: 'Wikipedia    (Click me)  ', description: 'It is free online encyclopedia.', link: 'https://www.wikipedia.org/' },
        { title: 'W3 School    (Click me)  ', description: 'The web developer information Website and online web tutorials', link: 'https://www.w3schools.com/' }
    ];

    resources.forEach(resource => {
        const resourceItem = document.createElement('div');
        resourceItem.className = 'resource';
        resourceItem.innerHTML = `
            <h3><a href="${resource.link}" target="_blank">${resource.title}</a></h3>
            <p>${resource.description}</p>
        `;
        resourceList.appendChild(resourceItem);
    });
}

function addInteractiveTools() {
    console.log('addInteractiveTools called');
    const toolsDiv = document.getElementById('tools');
    const tools = [
        { name: 'Quizlet    (Click me)  ', description: 'Flashcards, learning tools, and study games.', link: 'https://quizlet.com/' },
        { name: 'Geogebra    (Click me)  ', description: 'Interactive Geometry, Algebra, Statistics and Calculus application.', link: 'https://www.geogebra.org/' },
        { name: 'Kahoot!    (Click me)  ', description: 'Game-based learning platform for engaging quizzes.', link: 'https://kahoot.com/' },
        { name: 'HackerRank    (Click me)  ', description: 'Market-leading coding test and interview solution for hiring developers', link: 'https://www.hackerrank.com/' },
        { name: 'CodeChef    (Click me)  ', description: 'Compile and run your code.', link: 'https://www.codechef.com/' }
    ];

    tools.forEach(tool => {
        const toolItem = document.createElement('div');
        toolItem.className = 'tool';
        toolItem.innerHTML = `
            <h3><a href="${tool.link}" target="_blank">${tool.name}</a></h3>
            <p>${tool.description}</p>
        `;
        toolsDiv.appendChild(toolItem);
    });
}

function addForums() {
    console.log('addForums called');
    const forumPosts = [
        { title: 'How to manage online classes effectively', content: 'Share your tips and strategies for managing online classes.', link: 'https://www.educate-me.co/blog/online-class-management' },
        { title: 'Best educational resources for kids', content: 'Discuss and share the best resources available for kids.', link: 'https://www.lifewire.com/best-free-learning-websites-for-kids-4800405' },
        { title: 'Learning new languages', content: 'Tips and resources for learning new languages.', link: 'https://www.mondly.com/' }
    ];

    const forumsContainer = document.getElementById('forum-posts');
    forumPosts.slice(0, 15).forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.className = 'forum-post';
        postDiv.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <a href="${post.link}" target="_blank">Read more</a>
        `;
        forumsContainer.appendChild(postDiv);
    });
}

function addTeacherResources() {
    console.log('addTeacherResources called');
    const resources = [
        { title: 'Classroom Management Tips', description: 'Effective tips for managing a classroom environment.', link: 'https://www.weareteachers.com/classroom-management-techniques/' },
        { title: 'Interactive Teaching Methods', description: 'Learn about interactive teaching methods to engage students.', link: 'https://jimmyesl.com/interactive-learning/' },
        { title: 'Online Teaching Platforms', description: 'Comparison of various online teaching platforms.', link: 'https://www.cheggindia.com/earn-online/part-time-online-teaching-platforms-in-india/' }
    ];

    const teacherResourcesContainer = document.getElementById('teacher-resources');
    resources.slice(0, 15).forEach(resource => {
        const resourceDiv = document.createElement('div');
        resourceDiv.className = 'teacher-resource';
        resourceDiv.innerHTML = `
            <h3>${resource.title}</h3>
            <p>${resource.description}</p>
            <a href="${resource.link}" target="_blank">Click here</a>
        `;
        teacherResourcesContainer.appendChild(resourceDiv);
    });
}
