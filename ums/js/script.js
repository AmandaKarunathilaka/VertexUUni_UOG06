var navLinks = document.getElementById("nav-links");
var nav = document.querySelector("nav");
var body = document.body;

function showMenu() {
    nav.classList.add("menu-open");
    body.classList.add("menu-open");
    // Prevent background scrolling
    body.style.overflow = "hidden";
}

function hideMenu() {
    nav.classList.remove("menu-open");
    body.classList.remove("menu-open");
    // Restore background scrolling
    body.style.overflow = "auto";
}

// Initialize navigation functionality
document.addEventListener("DOMContentLoaded", function() {
    // Close menu when clicking on navigation links
    const navLinksItems = document.querySelectorAll(".nav-links ul li a");
    navLinksItems.forEach(link => {
        link.addEventListener("click", function(e) {
            hideMenu();
            
            // Smooth scroll to section (if it's an anchor link)
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    // Add delay to allow menu to close first
                    setTimeout(() => {
                        targetSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 300);
                }
            }
        });
    });

    // Close menu when clicking on overlay (the ::before pseudo-element area)
    nav.addEventListener("click", function(e) {
        if (nav.classList.contains("menu-open") && e.target === nav) {
            hideMenu();
        }
    });

    // Handle escape key to close menu
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape" && nav.classList.contains("menu-open")) {
            hideMenu();
        }
    });

    // Handle window resize - close menu if window becomes larger
    window.addEventListener("resize", function() {
        if (window.innerWidth > 768 && nav.classList.contains("menu-open")) {
            hideMenu();
        }
    });
});

// type text effect
document.addEventListener("DOMContentLoaded", function() {
    const text = "Explore Our University";
    const speed = 100; // typing speed in ms
    let i = 0;
    const target = document.getElementById("typing-text");

    function typeWriter() {
        if (i < text.length) {
            target.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            // Add class to remove cursor after typing is complete
            
                target.classList.add('typing-complete');
            
        }
    }
    
    // Start typing effect
    typeWriter();
});

// article section 
const articles = [
    {
        id: 1,
        title: "Revolutionary AI Research Lab Opens",
        category: "research",
        excerpt: "VertexU launches state-of-the-art artificial intelligence research facility with industry partnerships.",
        content: "Our new AI Research Lab represents a significant milestone in VertexU's commitment to cutting-edge research. The facility features advanced computing resources, collaborative spaces, and partnerships with leading technology companies. Students and faculty will have access to the latest AI tools and methodologies, enabling groundbreaking research in machine learning, natural language processing, and computer vision.",
        icon: "ri-robot-line",
        date: "2024-08-15"
    },
    {
        id: 2,
        title: "Campus Sustainability Initiative",
        category: "campus",
        excerpt: "Green campus project reduces carbon footprint by 40% through innovative sustainable practices.",
        content: "VertexU's comprehensive sustainability initiative has achieved remarkable results in its first year. Through solar panel installations, waste reduction programs, and energy-efficient building upgrades, we've successfully reduced our carbon footprint by 40%. The initiative includes student-led environmental clubs, sustainable transportation options, and a campus-wide recycling program.",
        icon: "ri-leaf-line",
        date: "2024-08-10"
    },
    {
        id: 3,
        title: "New Online Learning Platform",
        category: "technology",
        excerpt: "Advanced LMS integration provides seamless digital learning experience for all students.",
        content: "Our new Learning Management System revolutionizes the digital learning experience at VertexU. Features include interactive virtual classrooms, AI-powered personalized learning paths, real-time collaboration tools, and comprehensive analytics for both students and instructors. The platform supports hybrid learning models and ensures accessibility across all devices.",
        icon: "ri-computer-line",
        date: "2024-08-05"
    },
    {
        id: 4,
        title: "Academic Excellence Awards",
        category: "academic",
        excerpt: "VertexU faculty receives national recognition for outstanding contributions to education.",
        content: "We're proud to announce that five VertexU faculty members have received national academic excellence awards this year. Their contributions span across various disciplines including engineering, computer science, and business administration. These awards recognize their innovative teaching methods, research contributions, and dedication to student success.",
        icon: "ri-award-line",
        date: "2024-07-30"
    },
    {
        id: 5,
        title: "Student Innovation Showcase",
        category: "campus",
        excerpt: "Annual showcase highlights creative projects and entrepreneurial ventures by VertexU students.",
        content: "The annual Student Innovation Showcase featured over 100 projects from across all faculties. Students presented everything from mobile apps solving local problems to sustainable engineering solutions. Several projects received funding from university incubators and external investors, demonstrating the practical impact of student creativity and innovation.",
        icon: "ri-lightbulb-line",
        date: "2024-07-25"
    },
    {
        id: 6,
        title: "Industry Partnership Program",
        category: "academic",
        excerpt: "Strategic partnerships with leading companies enhance practical learning opportunities.",
        content: "VertexU has established strategic partnerships with over 50 industry leaders to provide students with real-world learning experiences. These partnerships include internship programs, guest lectures, collaborative research projects, and direct recruitment opportunities. Students benefit from mentorship, practical skills development, and enhanced career prospects.",
        icon: "ri-building-line",
        date: "2024-07-20"
    }
];

// DOM Elements
const articlesGrid = document.getElementById('articlesGrid');
const filterButtons = document.querySelectorAll('.filter-btn'); // ADDED THIS LINE

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderArticles(articles);
    setupFilters();
});

// Setup filter functionality for all categories
function setupFilters() {
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter articles
            filterArticles(category);
        });
    });
}

// Filter articles by category
function filterArticles(category) {
    let filteredArticles;
    
    if (category === 'all') {
        filteredArticles = articles;
    } else {
        filteredArticles = articles.filter(article => article.category === category);
    }
    
    renderArticles(filteredArticles);
}

// Render articles in the grid
function renderArticles(articlesToRender) {
    if (!articlesGrid) return;
    
    articlesGrid.innerHTML = '';
    articlesToRender.forEach(article => {
        const articleCard = createArticleCard(article);
        articlesGrid.appendChild(articleCard);
    });
}

// Create individual article card
function createArticleCard(article) {
    const card = document.createElement('div');
    card.className = 'article-card';
    card.innerHTML = `
        <div class="article-image">
            <i class="${article.icon}"></i>
        </div>
        <div class="article-content">
            <span class="article-category">${article.category}</span>
            <h3>${article.title}</h3>
            <p>${article.excerpt}</p>
        </div>
    `;
    
    return card;
}

//input field validations
document.addEventListener("DOMContentLoaded", () => {
    // === LOGIN FORM ===
    const loginForm = document.querySelector(".login form");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const username = loginForm.querySelector('input[name="username"]').value.trim();
            const password = loginForm.querySelector('input[name="password"]').value.trim();

            if (username === "") {
                alert("Username is required.");
                loginForm.querySelector('input[name="username"]').focus();
                return;
            }

            if (password === "") {
                alert("Password is required.");
                loginForm.querySelector('input[name="password"]').focus();
                return;
            }

            // Hardcoded check:
            const hardcodedUsername = "admin";
            const hardcodedPassword = "password123";

            if (username === hardcodedUsername && password === hardcodedPassword) {
                // Login successful - show dialog
                alert("Login successful! Welcome, " + username + ".");
                // Redirect or do other actions here if needed
                // Example: window.location.href = "dashboard.html";
            } else {
                alert("Invalid username or password. Please try again.");
            }
        });

        // Show/hide password toggle
        const showPwdCheckbox = document.getElementById("showpwd");
        const pwdField = loginForm.querySelector('input[name="password"]');
        if (showPwdCheckbox) {
            showPwdCheckbox.addEventListener("change", () => {
                pwdField.type = showPwdCheckbox.checked ? "text" : "password";
            });
        }
    }

    // === SIGN UP FORM ===
    const signupForm = document.querySelector(".sign-up form");
    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const email = signupForm.querySelector("#email");
            const username = signupForm.querySelector("#username");
            const password = signupForm.querySelector("#password");

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email.value.trim())) {
                alert("Please enter a valid email.");
                email.focus();
                return;
            }

            if (username.value.trim().length < 3) {
                alert("Username must be at least 3 characters long.");
                username.focus();
                return;
            }

            if (password.value.trim().length < 6) {
                alert("Password must be at least 6 characters long.");
                password.focus();
                return;
            }

            // Submit form if valid
            signupForm.submit();
        });
    }

    // === FORGOT PASSWORD FORM ===
    const forgotPwdForm = document.querySelector(".forgot-pwd form");
    if (forgotPwdForm) {
        forgotPwdForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const inputs = forgotPwdForm.querySelectorAll("input[type='password']");
            const currentPwd = inputs[0];
            const newPwd = inputs[1];
            const confirmPwd = inputs[2];

            if (currentPwd.value.trim() === "") {
                alert("Current password is required.");
                currentPwd.focus();
                return;
            }

            if (newPwd.value.trim().length < 6) {
                alert("New password must be at least 6 characters long.");
                newPwd.focus();
                return;
            }

            if (newPwd.value !== confirmPwd.value) {
                alert("New password and confirm password do not match.");
                confirmPwd.focus();
                return;
            }

            // If all validations pass
            alert("Password reset successful!");
            // You can add your form submission logic here
            // forgotPwdForm.submit();
        });
    }
});

// calendar
document.addEventListener("DOMContentLoaded", function () {
      const calendarEl = document.getElementById("calendar");

      const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: "dayGridMonth",
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,listWeek"
        },
        height: "auto",
        events: [
          {
            title: "Semester Starts",
            start: "2025-08-01",
            color: "#007bff"
          },
          {
            title: "Midterm Exams",
            start: "2025-10-15",
            end: "2025-10-20",
            color: "#dc3545"
          },
          {
            title: "Assignment Due",
            start: "2025-09-20",
            color: "#ffc107"
          },
          {
            title: "Workshop: AI & ML",
            start: "2025-09-10",
            color: "#28a745"
          },
          {
            title: "Winter Break",
            start: "2025-12-20",
            end: "2026-01-05",
            color: "#6f42c1"
          },
          {
            title: "Holiday - Christmas",
            start: "2025-12-25",
            color: "#20c997"
          }
        ]
      });

      calendar.render();
    });
    

/*------Course section json load, and search course*/
let allCourses = [];

document.addEventListener("DOMContentLoaded", () => {
    fetch("../data/courses.json")
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok: " + response.status);
            return response.json();
        })
        .then(courses => {
            allCourses = courses;
            renderCourses(allCourses);
            setupSearch();
        })
        .catch(error => console.error("Error loading course data:", error));
});

function renderCourses(courseList) {
    const container = document.getElementById("courseContainer");
    container.innerHTML = "";

    if (courseList.length === 0) {
        container.innerHTML = "<p>No courses found.</p>";
        return;
    }

    courseList.forEach(course => {
        const card = document.createElement("div");
        card.className = "course-card";
        card.innerHTML = `
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <a href="${course.link}" class="read-more">Read More</a>
        `;
        container.appendChild(card);
    });
}

function setupSearch() {
    const searchInput = document.getElementById("courseSearch");
    const clearBtn = document.getElementById("clearSearchBtn");
    const searchBtn = document.getElementById("searchBtn");

    function filterAndRender() {
        const query = searchInput.value.trim().toLowerCase();
        const filtered = allCourses.filter(course =>
            course.title.toLowerCase().includes(query)
        );
        renderCourses(filtered);
    }

    searchInput.addEventListener("input", filterAndRender);
    searchBtn.addEventListener("click", filterAndRender);

    clearBtn.addEventListener("click", () => {
        searchInput.value = "";
        renderCourses(allCourses);
    });
}

