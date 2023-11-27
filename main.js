
const navMenu = document.querySelector('#nav-menu');
const asideBar = document.querySelector('#aside-bar');
const Followers = document.querySelector('#followers');


navMenu.addEventListener('click', () => {
    asideBar.style.left = (asideBar.style.left === '0') ? '100%' : '0';
});

asideBar.addEventListener('click', event => {
 
    if (event.target === asideBar) {
        asideBar.style.left = '100%';
        
    }
});


let val = parseInt(Followers.innerText, 0);


setInterval(()=>{
    const live = Followers.innerHTML = `${Math.floor(Math.random() *1000000)} <em>live count</em`;
    
},1000)
