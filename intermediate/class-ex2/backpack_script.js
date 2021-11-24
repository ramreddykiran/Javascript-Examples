import Backpack from "./Backpack.js";

// params order: name,volume,color,pocketNum,strapLengthL,strapLengthR,isZipOpen
const everydayBackpack = new Backpack(
    "Everyday Backpack",
    30,
    "grey",
    5,
    35,
    35,
    false
);


console.log("everyday Backpack ", everydayBackpack);
everydayBackpack.isZipOpen = true;

const dailyBackpackContent = `
    
        <figure class="backpackImage">
            <img src="./backpack.jpg" alt="grey color everyday backpack" width="350px" height="400px">
        </figure>
        <h1>${everydayBackpack.name}</h1>
        <ul>
            <li>volume: <span>${everydayBackpack.volume}</span></li>
            <li>pocketNum: <span>${everydayBackpack.pocketNum}</span></li>
            <li>color: <span>${everydayBackpack.color}</span></li>
            <li>strapLengthLeft: <span>${everydayBackpack.strapLength.left}</span></li>
            <li>strapLengthRight: <span>${everydayBackpack.strapLength.right}</span></li>
            <li>ZipOpenStatus: <span>${everydayBackpack.isZipOpen ? "open" : "closed"}</span></li>
        </ul>
    `
const mainContent = document.querySelector(".mainContent");

const articleContent = document.createElement("article");
articleContent.classList.add("backpackDetails");
articleContent.setAttribute("id", "everydayBackpack");
articleContent.innerHTML = dailyBackpackContent;

mainContent.append(articleContent)

/**
 * adding navigation section to DOM
 */
const navConent = `
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Backpacks</a></li>
        <li><a href="#">Others</a></li>
        <li><a href="#">Contact</a></li>
`;

const navList = document.createElement("ul");
navList.innerHTML = navConent;

const mainNav = document.createElement("nav");
mainNav.classList.add("main-navigation");

mainNav.append(navList);

document.querySelector(".headerContent").append(mainNav);


