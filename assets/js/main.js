class TeamMember {
    constructor(firstName, lastName, role, githubUsername, githubLink, image) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.githubUsername = githubUsername;
        this.githubLink = githubLink;
        this.image = image;
    }
}



//Create team members
let sean = new TeamMember('Sean', 'Hockin', 'UI Design', 'shockin779', 'https://github.com/shockin779', '../images/sean-hockin.jpg');
let christian = new TeamMember('Christian', 'MacDonald', 'UI Design', 'ChristianMacDonald', 'https://github.com/ChristianMacDonald', '../images/sean-hockin.jpg');
let jeremy = new TeamMember('Jeremy', 'Morales', 'UI Design', 'performance-fleece', 'https://github.com/performance-fleece', '../images/sean-hockin.jpg');
let suen = new TeamMember('Suen', 'O', 'Front-End Architect', 'Suen-O', 'https://github.com/Seun-O', '../images/sean-hockin.jpg');
let mychal = new TeamMember('Mychal', 'Hall', 'Front-End Architect', 'mychal-hall', 'https://github.com/mychal-hall', '../images/sean-hockin.jpg');
let xavier = new TeamMember('Xavier', 'Puentes', 'Back-End Architect', 'xpuentes', 'https://github.com/xpuentes', '../images/sean-hockin.jpg');

let team = [sean, christian, jeremy, suen, mychal, xavier];

// Grab the hamburger icon
let hamburger = document.querySelector('header i');

// Get header nav
let headerNav = document.querySelector('header nav');


hamburger.addEventListener('click', function(e) {
    headerNav.classList.toggle('hidden');
    headerNav.classList.toggle('visible');
});