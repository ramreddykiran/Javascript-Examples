import Backpack from "./Backpack.js";
import Image from "./Image.js";

/**
 * parameters oder : id,name,volume,color,pocketNum,strapLengthL,strapLengthR,lidOpen,dateAcquired,image
 */
// Create laptop Backpack object
const greyBackpack = new Backpack(
    "pack01",
    "Laptop Backpack",
    30,
    "grey",
    15,
    26,
    26,
    false,
    "December 5, 2018 15:00:00 PST",
    new Image("./images/grey-backpack.jpg", "grey color laptop purpose laptop", "350px", "400px")
    
  );
  
  // Create college student Backpack object
  const cyanBackpack = new Backpack(
    "pack02",
    "College student Backpack",
    8,
    "Cyan",
    4,
    10,
    10,
    false,
    "October 16, 2019 15:00:00 PST",
    new Image("./images/cyan-backpack.jpeg", "cyan color college student backpack","350px","400px")
  );

  // Create office purpose Backpack object
  const yellowBackpack = new Backpack(
    "pack03",
    "Office purpose Backpack",
    15,
    "Yellow",
    3,
    12,
    12,
    false,
    "October 16, 2020 15:00:00 PST",
    new Image("./images/yellow-backpack.jpeg", "yellow color office purpose backpack","400px","300px")
    
  );

  const backpackArray = [greyBackpack, cyanBackpack, yellowBackpack];
  export default backpackArray;