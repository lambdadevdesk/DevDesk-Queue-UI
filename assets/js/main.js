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
let sean = new TeamMember('Sean', 'Hockin', 'UI Design', 'shockin779', 'https://github.com/shockin779', 'assets/images/sean-hockin.jpg');
let christian = new TeamMember('Christian', 'MacDonald', 'UI Design', 'ChristianMacDonald', 'https://github.com/ChristianMacDonald', 'assets/images/sean-hockin.jpg');
let jeremy = new TeamMember('Jeremy', 'Morales', 'UI Design', 'performance-fleece', 'https://github.com/performance-fleece', 'assets/images/sean-hockin.jpg');
let suen = new TeamMember('Suen', 'O', 'Front-End Architect', 'Suen-O', 'https://github.com/Seun-O', 'assets/images/sean-hockin.jpg');
let mychal = new TeamMember('Mychal', 'Hall', 'Front-End Architect', 'mychal-hall', 'https://github.com/mychal-hall', 'assets/images/sean-hockin.jpg');
let xavier = new TeamMember('Xavier', 'Puentes', 'Back-End Architect', 'xpuentes', 'https://github.com/xpuentes', 'assets/images/sean-hockin.jpg');

let team = [sean, christian, jeremy, suen, mychal, xavier];


// Grab the members div
let membersSection = document.querySelector('.members');

//Check to make sure we are on the about us page
if(membersSection) {
    // Loop through each team member and add them to the about us page
    team.forEach(function(member) {

        let tempDiv = document.createElement('div');
        tempDiv.classList.add('team-member');
        tempDiv.innerHTML = `<img src="${member.image}" alt="Picture of team member ${member.firstName} ${member.lastName}">
        <div class="member-info">
            <h3>${member.firstName} ${member.lastName}</h3>
            <p>${member.role}</p>
            <p>Github Handle: <a href="${member.githubLink}" target="_blank">${member.githubUsername}</a></p>`;
    
        membersSection.append(tempDiv);
    })
}


// Grab the hamburger icon
let hamburger = document.querySelector('header i');

// Get header nav
let headerNav = document.querySelector('header nav');


hamburger.addEventListener('click', function(e) {
    headerNav.classList.toggle('hidden');
    headerNav.classList.toggle('visible');
});

// Grab email submit button
let emailButton = document.querySelector('.email-signup button');

emailButton.addEventListener('mouseenter', function(e) {
    e.target.style.opacity = 0.9;
})

emailButton.addEventListener('mouseleave', e => e.target.style.opacity = 1);