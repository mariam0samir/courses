let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');
let carousel = document.querySelector('.carousel');
let list = document.querySelector('.list');
let runingTime=document.querySelector('.runingTime')

// carousel
let timeAutoSet=7000
nextBtn.onclick = function () {
    showslider('next');
};

prevBtn.onclick = function () {
    showslider('prev');
};

setInterval(() => {
    nextBtn.click();
}, 4000);


function showslider(type) {

    let items = document.querySelectorAll('.item');

    if (type === 'next') {
        list.appendChild(items[0]);
        carousel.classList.add('next');
    } else {
        list.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }

   
    setTimeout(() => {
        carousel.classList.remove('next');
        carousel.classList.remove('prev');
    }, 500); 
}

// control pages and taps
let tabs = document.querySelectorAll(".tab");
let pages = document.querySelectorAll(".page");
let nav = document.querySelector("nav");
let spa=document.querySelector('nav span')

tabs.forEach(tab => {
  tab.onclick = function () {

    pages.forEach(page => page.classList.remove("active"));

    let pageId = tab.getAttribute("data-target");
    document.getElementById(pageId).classList.add("active");

    if (pageId === "homePage") {
      nav.classList.remove("dark");
      spa.classList.remove("dark");
    } else {
      nav.classList.add("dark");
      spa.classList.remove("dark");
    }
  };
});

// show courses

const courses = [
  {
    "id": 1,
    "title": "Complete Web Development ",
    "description": "Master HTML, CSS, JS, APIs and build real projects.",
    "image": "https://images.unsplash.com/photo-1526378722484-bd91ca387e72",
    "videos": [
      { "url": "videos/web1.mp4", "title": "Intro to Web"  },
      { "url": "videos/web2.mp4","title": "HTML Full Course"},
      { "url": "videos/web3.mp4", "title": "CSS Full Course"}
    ]
  },
  {
    "id": 2,
    "title": "JavaScript Zero to Hero",
    "description": "Deep dive into ES6, DOM, Async, APIs, OOP and more.",
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    "videos": [
      { "url": "videos/js1.mp4","title": "JavaScript Basics" },
      {  "url": "videos/js2.mp4", "title": "Functions Explained" },
      { "url": "videos/js3.mp4",  "title": "Async Programming"}
    ]
  },
  {
    "id": 3,
    "title": "React for Beginners",
    "description": "Learn React components, props, hooks and states.",
    "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    "videos": [
      {  "url": "videos/react1.mp4","title": "React Intro"  },
      {  "url": "videos/react2.mp4","title": "Components"  },
      {  "url": "videos/react3.mp4", "title": "Hooks" }
    ]
  },
  {
    "id": 4,
    "title": "React Advanced",
    "description": "Master Redux, Context API, Router, Optimization.",
    "image": "https://images.unsplash.com/photo-1551033406-611cf9a28f67",
    "videos": [
      {  "url": "videos/redux1.mp4","title": "Redux Intro"  },
      {   "url": "videos/redux2.mp4","title": "React Router" },
      { "url": "videos/redux3.mp4","title": "Performance Tips"  }
    ]
  },
  {
    "id": 5,
    "title": "Full Node.js API Masterclass",
    "description": "Learn Express, MongoDB, JWT Auth and REST APIs.",
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475",
    "videos": [
      {   "url": "videos/node1.mp4", "title": "Node Basics"},
      {"url": "videos/node2.mp4" ,"title": "Express Routing"  },
      {   "url": "videos/node3.mp4","title": "MongoDB + Mongoose" }
    ]
  },
  {
    "id": 6,
    "title": "Python Complete Course",
    "description": "Learn Python from zero with real applications.",
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    "videos": [
      { "title": "Python Intro", "url": "videos/py1.mp4" },
      { "title": "Loops & Functions", "url": "videos/py2.mp4" },
      { "title": "OOP", "url": "videos/py3.mp4" }
    ]
  },
  {
    "id": 7,
    "title": "Data Analysis with Python",
    "description": "Pandas, NumPy, Matplotlib and data visualization.",
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    "videos": [
      { "title": "Pandas Basics", "url": "videos/data1.mp4" },
      { "title": "NumPy Arrays", "url": "videos/data2.mp4" },
      { "title": "Visualization", "url": "videos/data3.mp4" }
    ]
  },
  {
    "id": 8,
    "title": "Machine Learning Fundamentals",
    "description": "Learn ML models, training, testing, and algorithms.",
    "image": "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2",
    "videos": [
      { "title": "ML Intro", "url": "videos/ml1.mp4" },
      { "title": "Regression Models", "url": "videos/ml2.mp4" },
      { "title": "Classification", "url": "videos/ml3.mp4" }
    ]
  },
  {
    "id": 9,
    "title": "UI/UX Design Basics",
    "description": "Learn Figma, wireframing and design principles.",
    "image": "https://images.unsplash.com/photo-1557838923-2985c318be48",
    "videos": [
      { "title": "Figma Basics", "url": "videos/ui1.mp4" },
      { "title": "Wireframes", "url": "videos/ui2.mp4" },
      { "title": "Prototyping", "url": "videos/ui3.mp4" }
    ]
  },
  {
    "id": 10,
    "title": "CyberSecurity Essentials",
    "description": "Learn ethical hacking and protection techniques.",
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    "videos": [
      { "title": "Security Basics", "url": "videos/sec1.mp4" },
      { "title": "OWASP", "url": "videos/sec2.mp4" },
      { "title": "Pentesting", "url": "videos/sec3.mp4" }
    ]
  },
  {
    "id": 11,
    "title": "Database Masterclass",
    "description": "Learn SQL, MySQL, schemas and database design.",
    "image": "https://images.unsplash.com/photo-1516972810927-80185027ca84",
    "videos": [
      { "title": "SQL Basics", "url": "videos/sql1.mp4" },
      { "title": "Joins", "url": "videos/sql2.mp4" },
      { "title": "Design", "url": "videos/sql3.mp4" }
    ]
  },
  {
    "id": 12,
    "title": "Flutter for Beginners",
    "description": "Build mobile apps using Dart and Flutter.",
    "image": "https://images.unsplash.com/photo-1551650975-87deedd944c3",
    "videos": [
      { "title": "Flutter Intro", "url": "videos/flutter1.mp4" },
      { "title": "Widgets", "url": "videos/flutter2.mp4" },
      { "title": "State Management", "url": "videos/flutter3.mp4" }
    ]
  },
  {
    "id": 13,
    "title": "Android Development",
    "description": "Build apps using Java and Android Studio.",
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    "videos": [
      { "title": "Android Intro", "url": "videos/and1.mp4" },
      { "title": "Activities", "url": "videos/and2.mp4" },
      { "title": "Fragments", "url": "videos/and3.mp4" }
    ]
  },
  {
    "id": 14,
    "title": "iOS Development with Swift",
    "description": "Learn Swift, Xcode, UIViews and build iOS apps.",
    "image": "https://images.unsplash.com/photo-1531482615713-2afd69097998",
    "videos": [
      { "title": "Swift Intro", "url": "videos/swift1.mp4" },
      { "title": "Storyboards", "url": "videos/swift2.mp4" },
      { "title": "Networking", "url": "videos/swift3.mp4" }
    ]
  },
  {
    "id": 15,
    "title": "C# and .NET Essentials",
    "description": "Learn C#, OOP, and build .NET applications.",
    "image": "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
    "videos": [
      { "title": "C# Basics", "url": "videos/c1.mp4" },
      { "title": "OOP C#", "url": "videos/c2.mp4" },
      { "title": ".NET Projects", "url": "videos/c3.mp4" }
    ]
  },
  {
    "id": 16,
    "title": "Artificial Intelligence Basics",
    "description": "Understand the foundations of AI and algorithms.",
    "image": "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f",
    "videos": [
      { "title": "AI Concepts", "url": "videos/ai1.mp4" },
      { "title": "Search Algorithms", "url": "videos/ai2.mp4" },
      { "title": "Neural Networks", "url": "videos/ai3.mp4" }
    ]
  },
  {
    "id": 17,
    "title": "Photoshop for Beginners",
    "description": "Learn photo editing and graphic design.",
    "image": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa",
    "videos": [
      {  "url": "videos/ps1.mp4", "title": "Tools Overview"},
      { "url": "videos/ps2.mp4",  "title": "Layers"},
      {  "url": "videos/ps3.mp4","title": "Retouching" }
    ]
  }
]



let coursesPage = document.getElementById("coursesPage");
let courseDetailsPage = document.getElementById("courseDetailsPage");
let coursesContainer = document.getElementById("coursesContainer");
let detailsTitle = document.getElementById("detailsTitle");
let videosContainer = document.getElementById("videosContainer");
let backToCourses = document.getElementById("backToCourses");


function loadCourses() {
  coursesContainer.innerHTML = "";

  courses.forEach(course => {
    let card = document.createElement("div");
    card.className = "card";
   

 card.innerHTML = `
  <img src="${course.image}">
  <div class="card-info">
    <h3>${course.title}</h3>
    <p>${course.description}</p>
  </div>
`;

    

    card.onclick = () => openCourseDetails(course);

    coursesContainer.appendChild(card);
  });
}

// courses detailes
function openCourseDetails(course) {
  coursesPage.classList.remove("active");
  courseDetailsPage.classList.add("active");

  detailsTitle.textContent = course.title;

  videosContainer.innerHTML = "";
  course.videos.forEach(video => {
    videosContainer.innerHTML += `
      <div class="videoBox">
        <video controls src="${video.url}"></video>
        <h4>${video.title}</h4>
      </div>
    `;
  });
}




loadCourses();


document.addEventListener("click", () => {
  document.getElementById("backToCourses").addEventListener("click", () => {
    document.getElementById("courseDetailsPage").style.display = "none";
    document.getElementById("coursesPage").style.display = "block";
    
  });
});


// back
document.addEventListener("click", () => {
  document.querySelector('.main-tab').addEventListener("click", () => {
    document.getElementById("courseDetailsPage").style.display = "none";
    document.getElementById("coursesPage").style.display = "none";
    
  });
});

const toggleBtn = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

toggleBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

