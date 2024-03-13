// the main script file of the app that loads and manages most of the data

// structure that allows to arrange and store the given products data
class Product {
  constructor(title, color, description, price, image, id) {
    this.title = title;
    this.color = color;
    this.description = description;
    this.price = price;
    this.image = image;
    this.id = id;
  }
}

// arrays that contain the given product data in JSON format
const hoodiesJ = [
  [
    "UCLan Hoodie",
    "Purple",
    "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
    " Only £39.99",
    "images/items/hoodies/hoodie (1).jpg",
  ],
  [
    "UCLan Hoodie",
    "Light Blue",
    "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
    " Only £39.99",
    "images/items/hoodies/hoodie (2).jpg",
  ],
  [
    "UCLan Hoodie",
    "Green",
    "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
    " Only £39.99",
    "images/items/hoodies/hoodie (3).jpg",
  ],
  [
    "UCLan Hoodie",
    "Dark Grey",
    "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
    " Only £39.99",
    "images/items/hoodies/hoodie (4).jpg",
  ],
  [
    "UCLan Hoodie",
    "Black",
    "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
    " Only £39.99",
    "images/items/hoodies/hoodie (5).jpg",
  ],
  [
    "UCLan Hoodie",
    "Salmon",
    "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
    " Only £39.99",
    "images/items/hoodies/hoodie (6).jpg",
  ],
  [
    "UCLan Hoodie",
    "Burgundy",
    "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
    " Only £39.99",
    "images/items/hoodies/hoodie (7).jpg",
  ],
  [
    "UCLan Hoodie",
    "Light Grey",
    "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
    " Only £39.99",
    "images/items/hoodies/hoodie (8).jpg",
  ],
  [
    "UCLan Hoodie",
    "Slate Blue",
    "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
    " Only £39.99",
    "images/items/hoodies/hoodie (9).jpg",
  ],
  [
    "UCLan Hoodie",
    "Orange",
    "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
    " Only £39.99",
    "images/items/hoodies/hoodie (10).jpg",
  ],
  [
    "UCLan Hoodie",
    "Teal",
    "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
    " Only £39.99",
    "images/items/hoodies/hoodie (11).jpg",
  ],
  [
    "UCLan Hoodie",
    "Navy",
    "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
    " Only £39.99",
    "images/items/hoodies/hoodie (12).jpg",
  ],
  [
    "UCLan Hoodie",
    "Orange",
    "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
    " Only £39.99",
    "images/items/hoodies/hoodie (13).jpg",
  ],
  [
    "UCLan Hoodie",
    "Creame",
    "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
    " Only £39.99",
    "images/items/hoodies/hoodie (14).jpg",
  ],
  [
    "UCLan Hoodie",
    "Lime",
    "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
    " Only £39.99",
    "images/items/hoodies/hoodie (15).jpg",
  ],
  [
    "UCLan Hoodie",
    "Off Blue",
    "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
    " Only £39.99",
    "images/items/hoodies/hoodie (16).jpg",
  ],
  [
    "UCLan Hoodie",
    "Red",
    "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
    " Only £39.99",
    "images/items/hoodies/hoodie (17).jpg",
  ],
  [
    "UCLan Hoodie",
    "Charcoal",
    "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
    " Only £39.99",
    "images/items/hoodies/hoodie (18).jpg",
  ],
  [
    "UCLan Hoodie",
    "Navy Blue",
    "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
    " Only £39.99",
    "images/items/hoodies/hoodie (19).jpg",
  ],
  [
    "UCLan Hoodie",
    "Lighter Grey",
    "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
    " Only £39.99",
    "images/items/hoodies/hoodie (20).jpg",
  ],
  [
    "UCLan Hoodie",
    "New Blue",
    "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
    " Only £39.99",
    "images/items/hoodies/hoodie (21).jpg",
  ],
  [
    "UCLan Hoodie",
    "Forest Green",
    "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
    " Only £39.99",
    "images/items/hoodies/hoodie (22).jpg",
  ],
  [
    "UCLan Hoodie",
    "Ocean Blue",
    "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
    " Only £39.99",
    "images/items/hoodies/hoodie (23).jpg",
  ],
  [
    "UCLan Hoodie",
    "Pink",
    "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
    " Only £39.99",
    "images/items/hoodies/hoodie (24).jpg",
  ],
  [
    "UCLan Hoodie",
    "Orange New",
    "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
    " Only £39.99",
    "images/items/hoodies/hoodie (25).jpg",
  ],
  [
    "UCLan Hoodie",
    "Black",
    "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
    " Only £39.99",
    "images/items/hoodies/hoodie (26).jpg",
  ],
  [
    "UCLan Hoodie",
    "Light Off Grey",
    "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
    " Only £39.99",
    "images/items/hoodies/hoodie (27).jpg",
  ],
  [
    "UCLan Hoodie",
    "Rusty Red",
    "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
    " Only £39.99",
    "images/items/hoodies/hoodie (28).jpg",
  ],
  [
    "UCLan Hoodie",
    "Slate Grey",
    "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
    " Only £39.99",
    "images/items/hoodies/hoodie (29).jpg",
  ],
  [
    "UCLan Hoodie",
    "Bright Green",
    "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
    " Only £39.99",
    "images/items/hoodies/hoodie (30).jpg",
  ],
  [
    "UCLan Hoodie",
    "Bright Pink",
    "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
    " Only £39.99",
    "images/items/hoodies/hoodie (31).jpg",
  ],
  [
    "UCLan Hoodie",
    "Burgundy New",
    "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
    " Only £39.99",
    "images/items/hoodies/hoodie (32).jpg",
  ],
  [
    "UCLan Hoodie",
    "Navy New",
    "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
    " Only £39.99",
    "images/items/hoodies/hoodie (33).jpg",
  ],
  [
    "UCLan Hoodie",
    "Bright Green",
    "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
    " Only £39.99",
    "images/items/hoodies/hoodie (34).jpg",
  ],
];
const jumpersJ = [
  [
    "UCLan Logo Jumper",
    "Purple",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (1).jpg",
  ],
  [
    "UCLan Logo Jumper",
    "Rusty Red",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (2).jpg",
  ],
  [
    "UCLan Logo Jumper",
    "Water Blue",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (3).jpg",
  ],
  [
    "UCLan Logo Jumper",
    "White",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (4).jpg",
  ],
  [
    "UCLan Logo Jumper",
    "Pink",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (5).jpg",
  ],
  [
    "UCLan Logo Jumper",
    "Black",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (6).jpg",
  ],
  [
    "UCLan Logo Jumper",
    "Old Blue",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (7).jpg",
  ],
  [
    "UCLan Logo Jumper",
    "Dark Grey ",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (8).jpg",
  ],
  [
    "UCLanLogo Jumper",
    "Red",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (9).jpg",
  ],
  [
    "UCLan Logo Jumper",
    "Brown",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (10).jpg",
  ],
  [
    "UCLan Logo Jumper",
    "Green",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (11).jpg",
  ],
  [
    "UCLan Logo Jumper",
    "Dark Red",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (12).jpg",
  ],
  [
    "UCLan Logo Jumper",
    "Yellow",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (13).jpg",
  ],
  [
    "UCLan Logo Jumper",
    "Light Grey",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (14).jpg",
  ],
  [
    "UCLan Logo Jumper",
    "Light Green",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (15).jpg",
  ],
  [
    "UCLan Logo Jumper",
    "Old Red",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (16).jpg",
  ],
  [
    "UCLan Logo Jumper",
    "Light Purple",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (17).jpg",
  ],
  [
    "UCLan Logo Jumper",
    "Slate Blue",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (18).jpg",
  ],
  [
    "UCLan Logo Jumper",
    "Real Red",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (19).jpg",
  ],
  [
    "UCLan Logo Jumper",
    "Old Pink",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (20).jpg",
  ],
  [
    "UCLan Logo Jumper",
    "Slate Grey",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (21).jpg",
  ],
  [
    "UCLan Logo Jumper",
    "Bright Green",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (22).jpg",
  ],
  [
    "UCLan Logo Jumper",
    "Teal",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (23).jpg",
  ],
  [
    "UCLan Logo Jumper",
    "Sky Blue",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (24).jpg",
  ],
  [
    "UCLan Logo Jumper",
    "Sunshine Pink",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (25).jpg",
  ],
  [
    "UCLan Logo Jumper",
    "Bronze",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (26).jpg",
  ],
  [
    "UCLan Logo Jumper",
    "Olive Green",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (27).jpg",
  ],
  [
    "UCLan Logo Jumper",
    "Bright White Green",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (28).jpg",
  ],
  [
    "UCLan Logo Jumper",
    "Navy Blue",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (29).jpg",
  ],
  [
    "UCLan Logo Jumper",
    "Rusty Orange",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (30).jpg",
  ],
  [
    "UCLan Logo Jumper",
    "Bright Orange",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (31).jpg",
  ],
  [
    "UCLan Logo Jumper",
    "Sky Purple",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (32).jpg",
  ],
  [
    "UCLan Logo Jumper",
    "Really Red",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (33).jpg",
  ],
  [
    "UCLan Logo Jumper",
    "Plum Purple",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (34).jpg",
  ],
  [
    "UCLan Logo Jumper",
    "Dark Purple",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (35).jpg",
  ],
  [
    "UCLan Logo Jumper",
    "Vibrant Red",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (36).jpg",
  ],
  [
    "UCLan Logo Jumper",
    "Ocean Blue",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (37).jpg",
  ],
  [
    "UCLan Logo Jumper",
    "Creame",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (38).jpg",
  ],
  [
    "UCLan Logo Jumper",
    "Lighter Blue",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (39).jpg",
  ],
  [
    "UCLan Logo Jumper",
    "Light Grey",
    "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
    " Only £29.99",
    "images/items/jumpers/jumper (40).jpg",
  ],
];
const tshirtsJ = [
  [
    "UCLan Logo Tshirt",
    "Navy Blue New",
    "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
    " Only £19.99",
    "images/items/tshirt/tshirt (1).jpg",
  ],
  [
    "UCLan Logo Tshirt",
    "Rusty Red New",
    "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
    " Only £19.99",
    "images/items/tshirt/tshirt (2).jpg",
  ],
  [
    "UCLan Logo Tshirt",
    "Burgundy",
    "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
    " Only £19.99",
    "images/items/tshirt/tshirt (3).jpg",
  ],
  [
    "UCLan Logo Tshirt",
    "Pink",
    "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
    " Only £19.99",
    "images/items/tshirt/tshirt (4).jpg",
  ],
  [
    "UCLan Logo Tshirt",
    "Teal",
    "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
    " Only £19.99",
    "images/items/tshirt/tshirt (5).jpg",
  ],
  [
    "UCLan Logo Tshirt",
    "Black",
    "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
    " Only £19.99",
    "images/items/tshirt/tshirt (6).jpg",
  ],
  [
    "UCLan Logo Tshirt",
    "Old Red",
    "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
    " Only £19.99",
    "images/items/tshirt/tshirt (7).jpg",
  ],
  [
    "UCLan Logo Tshirt",
    "Grey",
    "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
    " Only £19.99",
    "images/items/tshirt/tshirt (8).jpg",
  ],
  [
    "UCLan Logo Tshirt",
    "Red",
    "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
    " Only £19.99",
    "images/items/tshirt/tshirt (9).jpg",
  ],
  [
    "UCLan Logo Tshirt",
    "Brown",
    "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
    " Only £19.99",
    "images/items/tshirt/tshirt (10).jpg",
  ],
  [
    "UCLan Logo Tshirt",
    "Pdark Purple",
    "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
    " Only £19.99",
    "images/items/tshirt/tshirt (11).jpg",
  ],
  [
    "UCLan Logo Tshirt",
    "Yellow",
    "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
    " Only £19.99",
    "images/items/tshirt/tshirt (12).jpg",
  ],
  [
    "UCLan Logo Tshirt",
    "Mustard Yellow",
    "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
    " Only £19.99",
    "images/items/tshirt/tshirt (13).jpg",
  ],
  [
    "UCLan Logo Tshirt",
    "Dark Grey",
    "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
    " Only £19.99",
    "images/items/tshirt/tshirt (14).jpg",
  ],
  [
    "UCLan Logo Tshirt",
    "Dark Green",
    "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
    " Only £19.99",
    "images/items/tshirt/tshirt (15).jpg",
  ],
  [
    "UCLan Logo Tshirt",
    "Bright Green",
    "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
    " Only £19.99",
    "images/items/tshirt/tshirt (16).jpg",
  ],
  [
    "UCLan Logo Tshirt",
    "Olive Green",
    "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
    " Only £19.99",
    "images/items/tshirt/tshirt (17).jpg",
  ],
  [
    "UCLan Logo Tshirt",
    "Dark Grey",
    "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
    " Only £19.99",
    "images/items/tshirt/tshirt (18).jpg",
  ],
  [
    "UCLan Logo Tshirt",
    "Orange",
    "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
    " Only £19.99",
    "images/items/tshirt/tshirt (19).jpg",
  ],
  [
    "UCLan Logo Tshirt",
    "Purple",
    "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
    " Only £19.99",
    "images/items/tshirt/tshirt (20).jpg",
  ],
  [
    "UCLan Logo Tshirt",
    "Slate Blue",
    "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
    " Only £19.99",
    "images/items/tshirt/tshirt (21).jpg",
  ],
  [
    "UCLan Logo Tshirt",
    "Bright Pink",
    "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
    " Only £19.99",
    "images/items/tshirt/tshirt (22).jpg",
  ],
  [
    "UCLan Logo Tshirt",
    "Brightly Green",
    "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
    " Only £19.99",
    "images/items/tshirt/tshirt (23).jpg",
  ],
  [
    "UCLan Logo Tshirt",
    "Lime Green",
    "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
    " Only £19.99",
    "images/items/tshirt/tshirt (24).jpg",
  ],
  [
    "UCLan Logo Tshirt",
    "Ocean Blue",
    "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
    " Only £19.99",
    "images/items/tshirt/tshirt (25).jpg",
  ],
  [
    "UCLan Logo Tshirt",
    "Dark Red",
    "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
    " Only £19.99",
    "images/items/tshirt/tshirt (26).jpg",
  ],
  [
    "UCLan Logo Tshirt",
    "Another Green",
    "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
    " Only £19.99",
    "images/items/tshirt/tshirt (27).jpg",
  ],
  [
    "UCLan Logo Tshirt",
    "Slate Grey",
    "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
    " Only £19.99",
    "images/items/tshirt/tshirt (28).jpg",
  ],
  [
    "UCLan Logo Tshirt",
    "Bright Orange",
    "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
    " Only £19.99",
    "images/items/tshirt/tshirt (29).jpg",
  ],
  [
    "UCLan Logo Tshirt",
    "Another Purple",
    "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
    " Only £19.99",
    "images/items/tshirt/tshirt (30).jpg",
  ],
  [
    "UCLan Logo Tshirt",
    "Real Red",
    "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
    " Only £19.99",
    "images/items/tshirt/tshirt (31).jpg",
  ],
  [
    "UCLan Logo Tshirt",
    "Brilliant Blue",
    "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
    " Only £19.99",
    "images/items/tshirt/tshirt (32).jpg",
  ],
  [
    "UCLan Logo Tshirt",
    "Creame",
    "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
    " Only £19.99",
    "images/items/tshirt/tshirt (33).jpg",
  ],
  [
    "UCLan Logo Tshirt",
    "Teal Blue",
    "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
    " Only £19.99",
    "images/items/tshirt/tshirt (34).jpg",
  ],
  [
    "UCLan Logo Tshirt",
    "White",
    "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
    " Only £19.99",
    "images/items/tshirt/tshirt (35).jpg",
  ],
];

// initializing new arrays to store products as structs
const hoodies = [];
const jumpers = [];
const tshirts = [];

// function that parses JSON formated products to a structs
function parsePro() {
  let i = 0;
  hoodiesJ.forEach((hoodie) => {
    // Parse and push into the corresponding array
    hoodies.push(
      new Product(hoodie[0], hoodie[1], hoodie[2], hoodie[3], hoodie[4], i)
    );
    i++;
  });
  jumpersJ.forEach((hoodie) => {
    // Parse and push into the corresponding array

    jumpers.push(
      new Product(
        hoodie[0].replace(/ /g, " "),
        hoodie[1],
        hoodie[2].replace(/ /g, " "),
        hoodie[3].replace(/ /g, " "),
        hoodie[4],
        i
      )
    );
    i++;
  });

  tshirtsJ.forEach((hoodie) => {
    // Parse and push into the corresponding array
    tshirts.push(
      new Product(hoodie[0], hoodie[1], hoodie[2], hoodie[3], hoodie[4], i)
    );
    i++;
  });
}

// function that renders the given array of products on Product.html page
function render(products) {
  // for each product in the array
  for (let i = 0; i < products.length; i++) {
    // create a product div
    let productDiv = document.createElement("div");
    productDiv.classList.add("product");
    // giving each div a type of product class in order to ease the managing
    switch (products) {
      case hoodies:
        productDiv.classList.add("hoodies");
        break;

      case jumpers:
        productDiv.classList.add("jumpers");
        break;

      case tshirts:
        productDiv.classList.add("tshirts");
        break;
    }
    // main structure of the product div
    productDiv.innerHTML = `
            <img src="./resources/products/coursework/assignment-1-resources/${products[i].image}" alt="${products[i].title}"/>
            <h2>${products[i].title}</h2>
            <p>Color: ${products[i].color}</p>
            <p>Price: ${products[i].price}</p>
            <a href = "#" class = "cart"><i class="fa fa-shopping-cart aria-hidden="true"></i></a>
        `;

    // if the product div is being pressed
    productDiv.addEventListener("click", function (event) {
      // only perform if not the "a" tag element is pressed
      if (
        event.target.tagName.toLowerCase() !== "a" &&
        event.target.closest("a") === null
      ) {
        var productJSON = JSON.stringify(products[i]);

        // Store the JSON-formatted string in session storage
        sessionStorage.setItem("productData", productJSON);

        // Redirect to the item.html page
        window.location.href = "item.html";
      }
    });
    // if the "cart" ("a") element is pressed
    productDiv
      .getElementsByClassName("cart")[0]
      .addEventListener("click", function () {
        var existingCartJSON = localStorage.getItem("cart");
        // parsing from string if the cart is already exists, creating the new one if not
        let cart = existingCartJSON ? JSON.parse(existingCartJSON) : {};

        const selectedProduct = products[i];
        // adding chosen product to the cart or updating its quantity if its already present in the cart
        if (cart[selectedProduct.id]) {
          cart[selectedProduct.id].quantity++;
        } else {
          cart[selectedProduct.id] = {
            product: selectedProduct,
            quantity: 1,
          };
        }

        // Convert the updated cart to JSON format and store it in local storage
        const updatedCartJSON = JSON.stringify(cart);
        localStorage.setItem("cart", updatedCartJSON);

        productDiv.getElementsByClassName("cart")[0].classList.add("active");
        // notify the user that the product has been added to the cart
        alert("Product added to the cart!");
      });
    document.getElementById("container").appendChild(productDiv);
  }
}

// function that removes chosen products from the product page
function removeProducts(category) {
  const productsToRemove = document.querySelectorAll(`.${category.id}`);

  // Convert NodeList to an array
  const productsArray = Array.from(productsToRemove);
  const div = document.getElementById("container");

  // Remove the associated products
  productsArray.forEach((product) => {
    div.removeChild(product);
  });
}

// calling the function to parse products
parsePro();

// creating the array of all products
const products = hoodies.concat(jumpers, tshirts);

// Check if the current page is 'Products.html'
if (window.location.href.indexOf("Products.html") > -1) {
  document.addEventListener("DOMContentLoaded", function () {
    // rendering the categories to the page
    const div = document.getElementById("categories");

    function createCategory(categoryId, categoryName) {
      const category = document.createElement("div");
      category.innerHTML = `
                <h1>${categoryName}</h1>
            `;
      category.className = "category";
      category.classList.add("active");
      category.id = categoryId;
      category.addEventListener("click", function () {
        category.classList.toggle("active");
        if (category.classList.contains("active")) {
          renderSelectedCategories();
        } else {
          removeProducts(category);
        }
      });
      div.appendChild(category);
    }

    // creating a category for each type of product
    createCategory("hoodies", "Hoodies");
    createCategory("jumpers", "Jumpers");
    createCategory("tshirts", "Tshirts");

    renderSelectedCategories();

    // function that renders the elements of the selected category
    function renderSelectedCategories() {
      const activeCategories = document.querySelectorAll(".category.active");
      // Render filtered products
      activeCategories.forEach((products) => {
        switch (products.id) {
          case "hoodies":
            render(hoodies);
            break;

          case "jumpers":
            render(jumpers);
            break;

          case "tshirts":
            render(tshirts);
            break;
        }
      });
    }

    // creating a button that allows to scroll on top
    const topBtn = document.createElement("button");
    topBtn.classList.add("scroll");
    topBtn.innerHTML = `<i class="fa-solid fa-arrow-up"></i>`;
    document.body.appendChild(topBtn);

    // Function to check scroll position and toggle button visibility
    function checkScroll() {
      if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
      ) {
        topBtn.style.display = "block";
      } else {
        topBtn.style.display = "none";
      }
    }

    // Listen for the scroll event
    window.addEventListener("scroll", checkScroll);

    // Add click event to scroll to the top
    topBtn.addEventListener("click", function () {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    });

    // Initial check when the page loads
    checkScroll();

    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  });
}

// Checking if the current page is 'Cart.html'
if (window.location.href.indexOf("Cart.html") > -1) {
  document.addEventListener("DOMContentLoaded", function () {
    // rendering the header part of the main body (Shopping cart)
    const head = document.createElement("div");
    head.classList.add("head");
    head.innerHTML = `
      <h2>Shopping Cart</h2>
    `;
    document.getElementById("container").appendChild(head);

    // initializing the sum variable
    var sum = 0.0;

    // creating a bottom div that is going to display the total sum
    const sumDiv = document.createElement("div");
    sumDiv.id = "sum";

    // getting the cart from the local storage
    var existingCartJSON = localStorage.getItem("cart");
    let cartPro = existingCartJSON ? JSON.parse(existingCartJSON) : {};
    let div = document.getElementById("container");

    // if the cart is empty displaying the corresponding label
    if (Object.keys(cartPro).length === 0) {
      const pro = document.createElement("div");
      pro.classList.add("empty");
      pro.innerText = "The cart is empty for now";
      div.appendChild(pro);
    } else {
      // else, rendering each element of the cart
      Object.values(cartPro).forEach((cartItem) => {
        const product = cartItem.product;
        const quantity = cartItem.quantity;
        // parsing the given price to floating point number
        const price = parseFloat(product.price.replace(/[^\d.]/g, ""));
        // updating the sum
        sum += price * quantity;
        const pro = document.createElement("div");
        pro.className = "product";
        pro.innerHTML = `
        <p class="id">${product.id}</p>
        <img src="./resources/products/coursework/assignment-1-resources/${
          product.image
        }" />
        <h2>${product.title}</h2>
        <p class="quantity">${quantity}</p>
        <p class = "total">£${(price * quantity).toFixed(2)}</p>
        <a href="#" class="cross"><i class="fa fa-times"></i></a>
    `;

        // if the user presses on the element redirect to the item page
        pro.addEventListener("click", function (event) {
          if (
            event.target.className.toLowerCase() !== "a" &&
            event.target.closest("a") === null
          ) {
            var productJSON = JSON.stringify(product);

            // Store the JSON-formatted string in session storage
            sessionStorage.setItem("productData", productJSON);

            // Redirect to the item.html page
            window.location.href = "item.html";
          }
        });

        div.appendChild(pro);
      });

      // if the cart is not empty displaying the checkout button
      const check = document.createElement("button");
      check.id = "check";
      check.innerText = "Proceed to checkout";
      document.getElementById("buttons").appendChild(check);
      // if the button is pressed storing the sum to the session storage
      // and redirecting the the checkout page
      check.addEventListener("click", function () {
        sessionStorage.setItem("sum", sum.toFixed(2));
        window.location.href = "checkout.html";
      });

      // if the cart is not empty displaying the "empty the cart" button
      const empty = document.createElement("button");
      empty.id = "empty";
      empty.innerText = "Empty the cart";
      document.getElementById("buttons").appendChild(empty);

      // if the "empty" button is pressed
      empty.addEventListener("click", function () {
        // asking user the second time
        const userPermission = window.confirm("Do you want to empty the cart?");
        if (userPermission) {
          // removing the cart item from the local storage
          localStorage.removeItem("cart");
          // reloading the page
          location.reload();
          alert("Cart was emptied!");
        }
      });
    }

    sumDiv.innerHTML = `
      <h3>Total sum: ${sum.toFixed(2)}£</h3>
    `;

    div.appendChild(sumDiv);

    const crosses = document.querySelectorAll(".cross");

    crosses.forEach((cross) => {
      // if the remove button on the cart product is pressed
      cross.addEventListener("click", function () {
        const productDiv = cross.closest(".product");
        const idElement = productDiv.querySelector(".id");
        const id = idElement.textContent;
        // updating the sum
        sum -= parseFloat(
          productDiv.getElementsByClassName("total")[0].textContent
        );
        productDiv.remove();
        //remove the item from cart
        delete cartPro[id];
        const updatedCartJSON = JSON.stringify(cartPro);
        localStorage.setItem("cart", updatedCartJSON);
        location.reload();
        // Update data model storage accordingly
      });
    });
  });
}

// Checking if the current page is "item.html"
if (window.location.href.indexOf("item.html") > -1) {
  document.addEventListener("DOMContentLoaded", function () {
    // creating a div for a product
    var div = document.getElementById("container");
    var product = document.createElement("div");
    product.id = "product";
    // getting a product data from the session storage
    const pro = JSON.parse(sessionStorage.getItem("productData"));
    product.innerHTML = `
        <img src = "./resources/products/coursework/assignment-1-resources/${pro.image}"/>
        <div>
          <h2>${pro.title}</h2>
          <p id = "color"><b>Color</b>: ${pro.color}</p>
          <p id = "price"><b>Price</b>: ${pro.price}</p>
          <p id = "quantity"><b>Quantity</b>:<input type="number" min = "0" max = "10" step = "1" size = "3" value = "1"></p>
          <p id = "add"><button>Add to cart</button></p>
        </div>
        <p id = "des"><b>Description</b>: ${pro.description}</p>
        `;
    div.appendChild(product);

    // managing add to cart button,
    // so it captures the chosen quantity and adds product to the cart
    document.getElementById("add").addEventListener("click", function () {
      var existingCartJSON = localStorage.getItem("cart");
      let cart = existingCartJSON ? JSON.parse(existingCartJSON) : {};
      const quantityEl = document
        .getElementById("quantity")
        .querySelector("input");
      const quantity = parseInt(quantityEl.value);
      if (cart[pro.id]) {
        cart[pro.id].quantity = quantity;
      } else {
        cart[pro.id] = {
          product: pro,
          quantity: quantity,
        };
      }
      const updatedCartJSON = JSON.stringify(cart);
      localStorage.setItem("cart", updatedCartJSON);
      // notify the user that the product has been added to the cart
      alert(`Product ${pro.title} added to the cart!`);
    });
  });
}

// Checking if the current page is "checkout.html"
if (window.location.href.indexOf("checkout.html") > -1) {
  document.addEventListener("DOMContentLoaded", function () {
    const order = document.getElementById("order");
    // rendering each cart item to the order summary
    const cart = JSON.parse(localStorage.getItem("cart"));
    Object.values(cart).forEach((product) => {
      const pro = document.createElement("p");
      pro.innerText = `${product.product.title}, ${product.product.color}, ${
        product.quantity
      }, ${
        parseFloat(product.product.price.replace(/[^\d.]/g, "")) *
        parseFloat(product.quantity)
      }£`;
      order.insertBefore(pro, document.getElementById("submit"));
    });
    // displaying total price for the order
    const sumP = document.createElement("p");
    sumP.innerText = `Total price: ${sessionStorage.getItem("sum")}£`;
    order.insertBefore(sumP, document.getElementById("submit"));
  });
}

// Checking if the current page is "index.html" or initial page
if (
  window.location.href.indexOf("index.html") > -1 ||
  window.location.href === window.location.origin + "/" ||
  window.location.href === window.location.origin
) {
  document.addEventListener("DOMContentLoaded", function () {
    // function that displays the best sellers section
    // rendering each item category
    function best() {
      let container = document.getElementById("products");
      var div = document.createElement("div");
      div.className = "pro";
      div.innerHTML = `
            <img src="./resources/products/coursework/assignment-1-resources/${hoodies[0].image}" alt="${hoodies[0].title}"/>
            <h2>${hoodies[0].title}</h2>
                `;
      div.addEventListener("click", function () {
        window.location.href = "Products.html";
      });
      container.appendChild(div);
      var div = document.createElement("div");
      div.className = "pro";
      div.innerHTML = `
                <img src="./resources/products/coursework/assignment-1-resources/${jumpers[0].image}" alt=${hoodies[0].title}/>
                <h2>${jumpers[0].title}</h2>
                `;
      div.addEventListener("click", function () {
        window.location.href = "Products.html";
      });
      container.appendChild(div);
      var div = document.createElement("div");
      div.className = "pro";
      div.innerHTML = `
                <img src="./resources/products/coursework/assignment-1-resources/${tshirts[0].image}" alt=${hoodies[0].title}/>
                <h1>${tshirts[0].title}</h1>
                `;
      container.appendChild(div);
      div.addEventListener("click", function () {
        window.location.href = "products.html";
      });
      var div = document.createElement("div");
      div.className = "pro";
      div.id = "view";
      div.innerHTML = `
                <p><i class="fa fa-chevron-right"></i></p>
                <h1>Start Shopping</h1>
                `;
      div.addEventListener("click", function () {
        window.location.href = "Products.html";
      });
      container.appendChild(div);
    }

    // Call the render function when the DOM is fully loaded
    best();
  });
}
