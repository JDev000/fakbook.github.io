
const body = document.body;
const gridContainer = document.querySelector('.grid-container');
const navMenu = document.querySelector('#nav-menu');
const asideBar = document.querySelector('#aside-bar');
const Followers = document.querySelector('#followers');
const userName = document.querySelector('#username');
const Content = document.querySelector('#content');
const postImg = document.querySelector('#post-img');
const settingsBtn = document.querySelector('#settings-btn');
const settingsModal = document.querySelector('#settings_Modal');
const saveBtn = document.querySelector('#save-btn');

navMenu.addEventListener('click', () => {
    asideBar.style.left = (asideBar.style.left === '0') ? '100%' : '0';
});

asideBar.addEventListener('click', event => {

    if (event.target === asideBar) {
        asideBar.style.left = '100%';

    }
});


let val = parseInt(Followers.innerText, 0);


setInterval(() => {
    const live = Followers.innerHTML = `${Math.floor(Math.random() * 1000000)} <em>live count</em`;

}, 1000)

document.addEventListener('DOMContentLoaded', () => {
    const post = [
        {
            userList: "marko_mendez",
            content: "Just posted my first coding tutorial. Check it out and let me know what you think! #CodingTutorial #LearnToCode",
            imgUrl: getRandomLoremPicsumUrl()
        },
        {
            userList: "Jin_Lunatic",
            content: "Exploring the world of artificial intelligence today. The possibilities are endless!",
            imgUrl: getRandomLoremPicsumUrl()
        },
        {
            userList: "Franko_Sero",
            content: "Social media is both a blessing and a curse. How do you find a balance? #DigitalLife",
            imgUrl: getRandomLoremPicsumUrl()
        },
        {
            userList: "Rex_Oni",
            content: "Shoutout to @Jerome_Edica for the awesome collaboration on our latest project. Teamwork makes the dream work!",
            imgUrl: getRandomLoremPicsumUrl()
        },
        {
            userList: "John_Perez",
            content: "Coding is not just a skill; it's a superpower! 💻✨",
            imgUrl: getRandomLoremPicsumUrl()
        },
        {
            userList: "Lena_Code",
            content: "Spent the day debugging. Found the bug, squashed it, feeling accomplished! #CodingLife",
            imgUrl: getRandomLoremPicsumUrl()
        },
        // ... (additional posts)
        {
            userList: "Natalie_Coder",
            content: "Just hit a coding milestone. Celebrating with a cup of coffee! ☕️🎉 #Milestone",
            imgUrl: getRandomLoremPicsumUrl()
        },
        {
            userList: "Alex_Creative",
            content: "In the coding zone. Do not disturb. #FocusedCoder",
            imgUrl: getRandomLoremPicsumUrl()
        },
        {
            userList: "Taylor_Bytes",
            content: "Just joined a coding challenge. Let the coding games begin! 💻🎮 #CodingChallenge",
            imgUrl: getRandomLoremPicsumUrl()
        },
        {
            userList: "Aria_CodingQueen",
            content: "Coding humor of the day: Why do programmers prefer dark mode? Less light, fewer bugs! 😂🌑 #DarkModeHumor",
            imgUrl: getRandomLoremPicsumUrl()
        }
    ];

    function getRandomLoremPicsumUrl() {
        const randomImageId = Math.floor(Math.random() * 1000) + 1;
        return `https://picsum.photos/800/400?random=${randomImageId}`;
    }

    const randomPostIndex = Math.floor(Math.random() * post.length);

    userName.textContent = `@${post[randomPostIndex].userList}`;
    Content.textContent = post[randomPostIndex].content;
    postImg.src = post[randomPostIndex].imgUrl;

    // console.log(userName, postContent, postImageSrc);



});




settingsBtn.addEventListener('click', () => {
    settingsModal.style.top = '50%';
})

saveBtn.addEventListener('click', () => {
    settingsModal.style.top = '150%';

})



// if ("Notification" in window) {
//     // Request permission for the browser to show notifications
//     Notification.requestPermission().then(function (permission) {
//         if (permission === "granted") {
//             // Create and show a notification when the website loads
//             new Notification("Fakbook has new update!", {
//                 body: "Developed by Jerome Edica",
//                 icon: "https://cdn-icons-png.flaticon.com/512/3771/3771464.png" // Replace with the path to your notification icon
//             });
//         }
//     });
// }