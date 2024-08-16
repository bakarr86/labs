// #4. adding menu interaction
var menuLinks = [
    {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
  ];


const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = `<h1>DOM Manipulation</h1>.`;
mainEl.classList.add("flex-ctr");

// create menu bar
const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

topMenuEl.classList.add("flex-around");

// iterate through the menu
menuLinks.forEach((link) => {
  const anchorEl = document.createElement("a");
  anchorEl.setAttribute("href", link.href);
  anchorEl.textContent = link.text;
  topMenuEl.appendChild(anchorEl);
});

/*...... Second Part .....*/

// #3. creating the submenu
const subMenuEl = document.querySelector('#sub-menu');
subMenuEl.style.height ='100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';


// #4. adding menu interaction
// Select and cache all <a> elements inside of topMenuEl in variable topMenuLinks
const topMenuLinks =  topMenuEl.querySelectorAll('a');
topMenuEl.addEventListener('click', (e) => 
{
    e.preventDefault();
    if (e.target.tagName !=='A')
    return;
    console.log(e.target.textContent);

//  #4.1  add event listener to add "active" class to <a></a>
// removing "active" class
topMenuLinks.forEach( (link) => {
    link.classList.remove('active');
    // console.log(link);
    });   
//  adding active class
 //e.target.classList.add('active');

 // #5. add menu interaction ---- LAST CODE 
// if(topMenuLinks){
    // check if the clicked item is already active
    //if(!e.target.classList.contains('active')){
        // test console
      //  console.log(`${e.target.textContent.toUpperCase()} This anchor contains active`);
        // check if clicked <a> has a sublink
       //add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
  if (e.target.classList.contains("active")) {
    e.target.classList.remove("active");
  } else {
    e.target.classList.add("active");
  }
        const buildSubmenu = (subLinks) => {

          subMenuEl.innerHTML = '';
        
        
          subLinks.forEach(sublink => {
              const newSubLink = document.createElement('a');
              newSubLink.setAttribute('href', sublink.href);
              newSubLink.innerHTML = sublink.text;
              subMenuEl.appendChild(newSubLink);
          });
        }
        
        let linkObj = {};
        menuLinks.forEach((link) => {
          if (link.text === e.target.textContent && link.subLinks) {
            linkObj = link;
            return;
          }
        });    
        if (e.target.classList.contains("active") && linkObj.subLinks) {
          subMenuEl.style.top = "100%";
        }
        // b. Otherwise, set the CSS top property of subMenuEl to 0.
        else {
          subMenuEl.style.top = "0";
        }
        if (e.target.classList.contains("active") && linkObj.subLinks) {
          buildSubmenu(linkObj.subLinks);
        }
        // If the ABOUT link is clicked, an <h1>About</h1> should be displayed.
        if (e.target.textContent === "about") {
          mainEl.innerHTML = `<h1>about</h1>.`;
        }

 
      })
      subMenuEl.addEventListener("click", (event) => {
        // call the event object's preventDefault() method
        event.preventDefault();
        // immediately return if the element clicked was not an <a> element
        if (event.target.tagName.toLowerCase() !== "a") return;
        // log the content of the <a> to verify the handler is working
        console.log(event.target);
        // 2. Set the CSS top property of subMenuEl to 0
        subMenuEl.style.top = "0";
        // 3. Remove the active class from each <a> element in topMenuLinks.
        topMenuLinks.forEach((link) => link.classList.remove("active"));
        // 4. Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl.
        
        // Style <h1> to make all words capitalized
        mainEl.innerHTML = "<h1>" + event.target.textContent + '</h1>';
      });
    //subMenuEl.addEventListener('click', ( event )=>{ 
      //event.preventDefault()
    
      //if (!event.target.matches('a')) {
        //  return; 
      //}

    //})  

