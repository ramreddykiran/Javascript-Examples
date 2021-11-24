
import backpackArray from "./components/Backpack-data.js";

const backpackContent = backpackArray
        .map( (backpack) => {
            //creating new article tag/element
            let backpackArticle = document.createElement("article");
            backpackArticle.classList.add("backpack");
            
            //Set article ID to the backpack.id property
            backpackArticle.setAttribute("id", backpack.id);

            // Set the innerHTML of backpackArticle using the backpack object.
            backpackArticle.innerHTML = `
            <figure class="backpack_image">
                <img src="${backpack.image.location}" alt="${backpack.image.location}" loading="lazy" width="${backpack.image.widthInPixels}" height="${backpack.image.heightInPixels}">
            </figure>
            <h1 class="backpack__name">${backpack.name}</h1>
            <ul class="backpack_features">
                <li class="feature backpack_volume">Volume:
                    <span> ${backpack.volume}l</span>
                </li>
                <li class="feature backpack_color">Color:
                    <span> ${backpack.color}</span>
                </li>
                <li class="feature backpack_age">Age:
                    <span> ${backpack.backpackAge()} days old</span>
                </li>
                <li class="feature backpack_pockets">Number of pockets:
                    <span> ${backpack.pocketNum}</span>
                </li>
                <li class="feature backpack_strap">Left strap length:
                    <span> ${backpack.strapLength.left} inches</span>
                </li>
                <li class="feature backpack_strap">Right strap length:
                    <span> ${backpack.strapLength.right} inches</span>
                </li>
                <li class="feature backpack_lid">Lid status:
                    <span> ${backpack.lidOpen ? "open" : "closed"}</span>
                </li>
            </ul>
            `;
    // Return the backpackArticle to the content array.
    return backpackArticle;
});
// Get the main
const main = document.querySelector(".mainContent");

// Loop through the content array to append each backpack article.
backpackContent.forEach((backpack) => {
    main.append(backpack);
});
  
 
