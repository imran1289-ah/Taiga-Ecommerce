const express = require('express');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const crypto = require('crypto');
// React runs on port 3000 by default
const port = 9000;
const app = express();

// Add Express.js middleware for request handling
app.use(cors());


// Initialize the database connection
const mongoUrl = 'mongodb://localhost:27017/taiga';
mongoose.connect(mongoUrl);

const UserModel = require('./models/user');

// Set up connect-mongo and express-session to track user login sessions
app.use(session({
    secret: 'devSecret', // Used to generate unique session authentication hashes, change to random value before deployment
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: mongoUrl
    })
}));

// Function to validate a password during login requests
function validatePassword(password, hash, salt) {
    // Create a hashed password from the user input and compare it to the hash stored in the database
    var hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return hash === hashVerify;
}
// Function to generate a salt and hash for a new password on registration or password change
function generateNewPassword(password) {
    // Generate a random salt for the user's password then compute the hash
    var salt = crypto.randomBytes(32).toString('hex');
    var hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');

    return { salt: salt, hash: hash };
}
// Tell passport how it should validate a login attempt
passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password'
    },
    function (email, password, callback) {
        // Find a user in the DB with the supplied email address
        UserModel.findOne({ email: email })
            .then(user => {
                // No user found, call the callback function with no error and no user
                if (!user) { return callback(null, false) }

                // User found, validate the supplied password
                if (validatePassword(password, user.hash, user.salt)) {
                    // Correct password, call the callback function with no error and the found user
                    return callback(null, user);
                }
                else {
                    // User found but password incorrect, call the callback function with no error and no user
                    return callback(null, false);
                }
            })
            .catch(err => {
                callback(err);
            });
    }
));
// Tell passport how it should represent a user in the session store (i.e., by its uniquely generated ID)
passport.serializeUser(function (user, callback) {
    callback(null, user.id)
});
// Tell passport how it should go from the session store back to a full user object
passport.deserializeUser(function (id, callback) {
    UserModel.findById(id, function (err, user) {
        if (err) { return callback(err); }
        callback(null, user);
    });
});

// Finally, add passport middleware to the express app for authentication
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send('Hello world from server!');
});
app.get('/testAPI', (req, res) => {
    res.send('Test from server - connection succesful!');
});

app.listen(port, () => {
    console.log('Taiga server listening on port ' + port);
});

app.use(express.json());

// Dummy login endpoint: login to existing account - POST {email, password}
app.post('/users/login', (req, res) => {
    //code to perform login

    console.log("Handling login POST:");
    console.log(req.body);
});

// Dummy register endpoint: register new account - POST {email, name, password, user type}
app.post('/users/register', (req, res) => {
    //code to perform registration
    console.log("Handling register POST:");
    console.log(req.body);
});

//Api endpoint for products
app.get('/products/search', (req, res) => {
    res.json(
      
        [
            {
                name: "Xbox Series S Console",
                description : "This all-digital gaming powerhouse features a custom 512GB SSD for fast gameplay and reduced load times.",
                price: "399",
                image: "./images/1.jpg",
                stock: "10",
                categories: "Electronics"
            },
            {
                name: "Nintendo Switch Console",
                description : "9 hours of battery, go from single- and multi-player thrills at home, to playing the same title wherever and whenever you want.",
                price: "380",
                image: "./images/2.jpg",
                stock: "10",
                categories: "Electronics"
                
            },
            {
                name: "Playstation 5 Console",
                description : "the PlayStation 5 delivers every game in bold colour and lifelike details so you never miss an important moment.",
                price: "632",
                image: "./images/3.jpg",
                stock: "10",
                categories: "Electronics"
                
            },
            {
                name: "Dying Light 2 Stay Human - Standard Edition - PlayStation 5",
                description : "In the infected and unforgiving world of Dying Light 2 Stay Human for PlayStation 5, you are the city's last hope for survival. Take on the role of Aiden Caldwell, a powerful survivor with unique abilities, and single-handedly change the fate of the modern age.",
                price: "80",
                image: "./images/4.jpg",
                stock: "10",
                categories: "Electronics"
                
            },
            {
                name: "Super Smash Bros Ultimate - Nintendo Switch",
                description : "Join the biggest brawl yet in Super Smash Bros Ultimate for Nintendo Switch. You'll find all your favourite fighters along with new characters like Simon Belmont and King K Rool. Battle on more than 100 stages, each one equipped with Battlefield and Final Destination versions.",
                price: "80",
                image: "./images/5.jpg",
                stock: "10",
                categories: "Electronics"
                
            },
            {
                name: "Dying Light 2 Stay Human - Standard Edition - (Xbox Series X/Xbox One)",
                description : "In the infected and unforgiving world of Dying Light 2 Stay Human for PlayStation 5, you are the city's last hope for survival. Take on the role of Aiden Caldwell, a powerful survivor with unique abilities, and single-handedly change the fate of the modern age.",
                price: "80",
                image: "./images/6.jpg",
                stock: "10",
                categories: "Electronics"
                
            },
            {
                name: "Apple iPhone 13 Pro Max (128GB, Graphite)",
                description : "Explore endless possibilities with the iPhone 13 Pro. It features the powerful A15 Bionic chip, superfast 5G to download and stream high-quality video, a bright 6.1 inch Super Retina XDR display with ProMotion, and Ceramic Shield for better drop performance.",
                price: "1100",
                image: "./images/7.jpg",
                stock: "10",
                categories: "Electronics"
                
            },
            {
                name: "Samsung Galaxy S22 Ultra Smartphone",
                description : "Take your must-see content to the next level with a bright display. Whether you’re editing video, staging a shot or simply streaming your favourite show, Galaxy S22 Series will make it all pop.",
                price: "1200",
                image: "./images/8.jpg",
                stock: "10",
                categories: "Electronics"
                
            },
            {
                name: "Huawei P30 Pro (VOG-L04) 128GB Smartphone - Breathing Crystal",
                description : "The Huawei P30 Pro is a flagship smartphone that comes with robust configuration and ample battery backup. The major highlight here is the camera department which features triple set at the rear end and a high-resolution lens at the front.",
                price: "2405",
                image: "./images/9.jpg",
                stock: "10",
                categories: "Electronics"
                
            },
            {
                name: "Apple iPad Pro 12.9 128GB with Wi-Fi (5th Generation) - Space Grey",
                description : "Unlock productivity and entertainment on the go with the Apple iPad Pro. Powered by the Apple M1 chip, it's equipped for lightning fast performance so you can focus on what matters. It boasts 2 cameras and a Liquid Retina XDR display that delivers vivid colours and stunning detail, so you can edit HDR photos and videos.",
                price: "1400",
                image: "./images/10.jpg",
                stock: "10",
                categories: "Electronics"
                
            },
            {
                name: 'Air Pods Pro',
                description:'AirPods Pro have been designed to deliver Active Noise Cancellation for immersive sound. Their Transparency mode lets you hear your surroundings and a customisable fit for all-day comfort keeps your tunes playing.',
                price: "280",
                image: './images/11.jpg',
                stock: "10",
                categories: 'Electronics'
        
              },
              {
                
                name: 'Apple 1m (3.28 ft.) USB-C/Lightning Cable',
                description:'Get your Apple devices charged and synced quicker than ever with this Apple 1m USB-C to Lightning cable. Connect your iPhone, iPad, or iPod with a Lightning connector to your USB-C or Thunderbolt 3 (USB-C) enabled Mac or other device to sync and charge simultaneously',
                price: "25",
                image: './images/12.jpg',
                stock: "10",
                categories: 'Electronics'
                
              },
              {
               
                name:'Video game 1HP Pavilion Desktop PC',
                description: "Featuring powerful hardware, this HP Pavilion desktop PC offers impressive performance for your productivity and entertainment needs. It's equipped with an Intel Core i5 processor and 8GB of RAM so you can open multiple browser tabs and run multiple applications simultaneously.",
                price: "900",
                image: './images/13.jpg',
                stock: "10",
                categories: 'Electronics'
              },
              {
                name:'Acer Predator Orion 3000 Gaming PC',
                description:'Enjoy running the latest games and software in amazing graphic quality with the Acer Predator Orion 3000 gaming PC. Embedded with an Intel Core i7 CPU, 16GB of RAM and an NVIDIA RTX GPU, this gaming beast delivers mind-blowing performance in every task.',
                price: "1900",
                image: './images/14.jpg',
                stock: "10",
                categories: 'Electronics'
              },
              {
                name:'ASUS ROG Strix G15DK Gaming PC',
                description:'Built with advanced hardware, the Asus ROG Strix G15DK gaming PC is sure to impress any gaming enthusiast. It is embedded with AMD Ryzen 5 CPU and 16GB RAM that makes it capable of taking down the most intense games with ease.',
                price: "1900",
                image: './images/15.jpg',
                stock: "10",
                categories: 'Electronics'
              },
              {
                name:
                  'Acer Aspire 5 15.6 inch Laptop - Silver (AMD Ryzen 5 5500U/512GB SSD/8GB RAM/Windows 11)',
                description:
                  'Built with all the essentials to make your work life easier, the Acer Aspire 5 is a worthy choice for your daily productivity. Packed with an AMD Ryzen 5 CPU and 8GB of RAM, it delivers all the power necessary to accelerate your tasks for maximum efficiency.',
                price: "700",
                image: './images/16.jpg',
                stock: "10",
                categories: 'Electronics'
              },
              {
                name:'Apple MacBook Pro 14 inch (2021)',
                description:'The first notebook of its kind, this Apple MacBook Pro is a beast. With the blazing-fast M1 Pro chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life.',
                price: "2500",
                image: './images/17.jpg',
                stock: "10",
                categories: 'Electronics'
              },
              {
                name:
                  'Lenovo IdeaPad Duet 5 13.3 inch Touchscreen 2-in-1 Chromebook',
                description:
                  'Streamline your everyday productivity with the Lenovo IdeaPad Duet 5 2-in-1 chromebook. It delivers exceptional performance, thanks to the Snapdragon processor paired with 4GB RAM.',
                price: "600",
                image: './images/18.jpg',
                stock: "10",
                categories: 'Electronics'
              },
              {
                name: "Men's Regular-Fit Long-Sleeve Pocket Oxford Shirt",
                description:
                  '100% Cotton. Soft and durable lightweight cotton. Easy through chest and tapered through waist.',
                price: "20",
                image: './images/19.jpg',
                stock: "10",
                categories: 'Clothes'
                
              },
              {
                name: "Carhartt Men's K87 Workwear Short Sleeve T-shirt",
                description:
                  '60% Cotton, 40% Polyester. Loose Fit. Rib-knit crewneck. Side-seamed construction minimizes twisting.',
                price: "45",
                image: './images/20.jpg',
                stock: "10",
                categories: 'Clothes'
                
              },
              {
                name: 'GUESS mens Mid-weight Puffer Jacket With Removable Hood',
                description: '100% Nylon. Removabel hood. Warm and water resistance',
                price: "170",
                image: './images/21.jpg',
                stock: "10",
                categories: 'Clothes'
              },
              {
                name: 'Mens Athletic-Fit Casual Stretch Khaki Pant',
                description:
                  'A flat-front dressy chino that offers classic style all week long; made to be wrinkle-resistant and easy-care with a traditional relaxed, broken-in look and fit.',
                price: "35",
                image: './images/22.jpg',
                stock: "10",
                categories: 'Clothes'
              },
              {
                
                name: "Wrangler Men's Authentics Classic Regular Fit Jean",
                description:
                  'Classic straight-leg jean featuring five-pocket styling and logo patch at back waist.',
                price: "69",
                image: './images/23.jpg',
                stock: "10",
                categories: 'Clothes'
                
              },
              {
                name: "Wrangler Authentics Men's Classic Cargo Stretch Short",
                description:
                  'Traditional Cargo Style. Built for versatility and comfort, this classic cargo short takes you from the outdoors to work, to every day with this timeless silhouette.',
                price: "40",
                image: './images/24.jpg',
                stock: "10",
                categories: 'Clothes'
              },
              {
                name:
                  'DOSWODE Womens Tops Short Sleeve Lace Trim O-Neck A-Line Tunic Blouse Shirts',
                description:
                  'Round flowy high-Low hem with lace trim tops, asymmetrical hem lines shirts, sleeveless tops,long tunic. The blouses are sized and designed based on American standards.',
                price: "50",
                image: './images/25.jpg',
                stock: "10",
                categories: 'Clothes'
                
              },
              {
                name:
                  "Queen's Here Womens Solid Color Tops Long Sleeve Casual V Neck Basic T Shirt",
                description:
                  'This women casual top is made of cotton, it’s super soft and lightweight, comfortable enough to wear all day.',
                price: "25",
                image: './images/26.jpg',
                stock: "10",
                categories: 'Clothes'

              },
              {
                name:
                  'Bellivera Womens Faux Fur Coat, Fall and Winter Fashion Fleece Fuzzy Hooded Fluffy Shaggy Shearling Jacket',
                description:
                  'The whisper-soft faux fur keeps you warm and cozy in winters. Perfect to match with basic T-shirt, crop top, leggings, black slacks, shorts, skinny pants, jeans, bodycon dress, knee high boots or high heels for a look.',
                price: "63",
                image: './images/27.jpg',
                stock: "10",
                categories: 'Clothes'
              },
              {
               
                name: "Spalding Women's Activewear Bootleg Pant",
                description:
                  '92% Cotton, 8% Spandex. Flared yoga pant featuring wide waistband and small logo at hip. Compression through seat and thighs.',
                price: "74",
                image: './images/28.jpg',
                stock: "10",
                categories: 'Clothes'
              },
              {
            
                
                name:
                  "Willit Women's Studio Joggers Hiking Travel Dance Pants Striped Workout Lounge Drawstring Pants with Pockets",
                description:
                  "Women's Hiking Pants combine style and comfort which could be worn for running, jogging, lounge, travel or other casual activities.",
                price: "89",
                image: './images/29.jpg',
                stock: "10",
                categories: 'Clothes'
                
              },
              {
                
                
                name: 'WallFlower Women Instastretch Luscious Curvy Bootcut Jeans',
                description:
                  '74% Cotton, 24% Polyester, 2% Spandex. Mid-rise contour waistband prevents gapping so you can sit with us with this shape-sculpting fit. This jean hugs your curves!',
                price: "46",
                image: './images/30.jpg',
                stock: "10",
                categories: 'Clothes'
              },
              {
                name:
                  'Berngi Summer Kids Clothes Baby Girls Flower Princess Dress for Wedding Party Toddler Girl Children Clothing',
                description:
                  'The dress outside layer is full tutu with rose petals and leaves wrapped in it to make this dress more beautiful. Make your baby become more fashionable, attractive, beautiful, your kids will like it as a Princess gift.',
                price: "30",
                image: './images/31.jpg',
                stock: "10",
                categories: 'Clothes'
              },
              {
                name:
                  'VIKITA Winter Toddler Girl Clothes Long Sleeve Girls Dresses for Kids 2-12 Years',
                description:
                  'Little girls dresses with pocket. Fabric is incredibly soft and comfortable',
                price: "25",
                image: './images/32.jpg',
                stock: "10",
                categories: 'Clothes'
              },
              {
                name:
                  'Sofa Sectional Sofa, L-Shape Faux Leather Sectional Sofa Couch Set with Chaise, Ottoman, 2 Toss Pillow Using for Living Room Furniture.',
                description:
                  "Comfortable and durable: Soft foam cushioning and supple faux leather make this set a suitable lounging option. This set's material is easy to clean, ensuring years of service with limited wear-and-tear.",
                price: "999",
                image: './images/37.jpg',
                stock: "10",
                categories: 'Furniture'
              },
              {
                name:
                  'Vonanda Sofa Bed, Convertible Chair 4 in 1 Multi-Function Folding Ottoman Modern Breathable Linen Guest Bed with Adjustable Sleeper for Small Room Apartment, Dark Gray',
                description:
                  'The convertible sofa bed can be used as a ottoman in normal. It can be easily and quickly converted into a sofa, lounger or a bed to meet your various and versatile needs and no longer worry about unexpected guests.',
                price: "400",
                image: './images/38.jpg',
                stock: "10",
                categories: 'Furniture'
                
              },
              {
                name:
                  'Rivet Sheena Glam Tufted Velvet Shell Chair, 23.5 inch W, Teal',
                description:
                  'The jewel-toned velvet and golden legs offer a luxe appeal, making this accent chair the perfect statement piece for your living room, home office, or bedroom.',
                price: "175",
                image: './images/39.jpg',
                stock: "10",
                categories: 'Furniture'
              },
              {
                
                name:
                  'Becko Wooden Jewelry Armoire Jewelry Cabinet with Full-Length Mirror outside and inside, Jewelry Organizer Cabinet, Lockable Jewelry Armoire Organizer, LED Lights, Large Storage, Wall/Door Mounted (White)',
                description:
                  'Lockable door offers absolute security as it prevents naughty kids and pets from messing up with your precious jewels. Smart touch-on lights ensure excellent user experience.',
                price: "206",
                image: './images/43.jpg',
                stock: "10",
                categories: 'Furniture'
              },
              {
                
                
                name:
                  'Zinus 6 Inch Foam and Spring Mattress / CertiPUR-US Certified Foams / Mattress-in-a-Box, Twin',
                description:
                  'When soft, yet durable foam layers combine with steel innersprings, a match made in mattress heaven happens, resulting in this supportive spring mattress with the right hint of conforming softness.',
                price: "130",
                image: './images/44.jpg',
                stock: "10",
                categories: 'Furniture'
              },
              {
                name:
                  'SONGMICS Drawer Dresser, Chest of Drawers, Closet Storage Dresser, 7 Fabric Drawers and Metal Frame with Handles, Rustic Brown and Black ULTS137B01',
                description:
                  'A storage dresser with 3 narrow drawers and 4 wide drawers, an easy and quick assembly process with numbered parts and easy-to-follow instructions, and a practical yet unique way to spice up your home.',
                price: "170",
                image: './images/45.jpg',
                stock: "10",
                categories: 'Furniture'
              },
              {
                name: 'The Great Alone: A Novel',
                description:
                  'In Kristin Hannah’s The Great Alone, a desperate family seeks a new beginning in the near-isolated wilderness of Alaska only to find that their unpredictable environment is less threatening than the erratic behavior found in human nature.',
                price: "24",
                image: './images/49.jpg',
                stock: "10",
                categories: 'Books'
              },
              {
                name: "American Dirt (Oprah's Book Club): A Novel",
                description:
                  'Lydia lives in Acapulco. She has a son, Luca, the love of her life, and a wonderful husband who is a journalist. And while cracks are beginning to show in Acapulco because of the cartels, Lydia’s life is, by and large, fairly comfortable. But after her husband’s tell-all profile of the newest drug lord is published, none of their lives will ever be the same.',
                price: "14",
                image: './images/50.jpg',
                stock: "10",
                categories: 'Books'
              },
              {
                name: 'The Book of Hope: A Survival Guide for Trying Times',
                description:
                  'Looking at the headlines―the worsening climate crisis, a global pandemic, loss of biodiversity, political upheaval―it can be hard to feel optimistic. And yet hope has never been more desperately needed.',
                price: "24",
                image: './images/51.jpg',
                stock: "10",
                categories: 'Books'
              },
              {
                
                name:
                  'Calculus, WileyPLUS NextGen Card with Loose-leaf Set Single Semester: Single Variable',
                description:
                  'This package includes an unbound, loose leaf copy of Calculus: Single Variable, 7th Edition + WileyPlus and a registration code for the WileyPLUS Learning Space course associated with the text.',
                price: "149",
                image: './images/55.jpg',
                stock: "10",
                categories: 'Books'
              },
              {
                name: 'Fundamentals of Heat and Mass Transfer',
                description:
                  'With Wiley’s Enhanced E-Text, you get all the benefits of a downloadable, reflowable eBook with added resources to make your study time more effective.',
                price: "134",
                image: './images/56.jpg',
                stock: "10",
                categories: 'Books'
              },
              {
                name: 'Guyton and Hall Textbook of Medical Physiology',
                description:
                  'Known for its clear presentation style single-author voice and focus on content most relevant to clinical and pre-clinical students Guyton and Hall Textbook of Medical Physiology, 14th Edition employs a distinctive format to ensure maximum learning and retention of complex concepts.',
                price: "162",
                image: './images/57.jpg',
                stock: "10",
                categories: 'Books'
              },
              {
                name:
                  'Cat Kid Comic Club: Perspectives: A Graphic Novel (Cat Kid Comic Club #2): From the Creator of Dog Man',
                description:
                  "Flippy, Molly, Li'l Petey, and twenty-one baby frogs each have something to say. Naomi and Melvin don't see eye to eye and Poppy perceives the world differently than her siblings.",
                price: "9",
                image: './images/61.jpg',
                stock: "10",
                categories: 'Books'
              },
              {
                name:
                  'Charlie Brown: Here We Go Again: A PEANUTS Collection (Volume 7)',
                description:
                  'Sibling rivalries. Overzealous hall monitors. Un-kicked footballs. It’s the Peanuts gang you know and love, and everyone’s at it again. Lucy is offering her trademark 5¢ psychiatric advice—and her customers are wondering if it’s actually worth the nickel.',
                price: "14",
                image: './images/62.jpg',
                stock: "10",
                categories: 'Books'
              },
              {
                
                name: 'Black Panther: The Battle for Wakanda',
                description:
                  "The sacred Mound is being attacked by an evil cult and Wakandans are growing angry with their new king, T'Challa, aka the Super Hero Black Panther.",
                price: "5",
                image: './images/63.jpg',
                stock: "10",
                categories: 'Books'
              },
              {
                name: 'Jujutsu Kaisen, Vol. 1 (Volume 1)',
                description:
                  'To gain the power he needs to save his friend from a cursed spirit, Yuji Itadori swallows a piece of a demon, only to find himself caught in the midst of a horrific war of the supernatural!',
                price: "13",
                image: './images/64.jpg',
                stock: "10",
                categories: 'Books'
              },
              {
                name: 'Attack on Titan 1',
                description:
                  'In this post-apocalytpic sci-fi story, humanity has been devastated by the bizarre, giant humanoids known as the Titans. Little is known about where they came from or why they are bent on consuming mankind.',
                price: "12",
                image: './images/65.jpg',
                stock: "10",
                categories: 'Books'
              },
              {
                name: 'Honeycrisp Apples',
                description:
                  'They are a great snacking apple and a good choice for adding some sweetness to your salad, but they are also delicious baked in a traditional apple crisp with some brown sugar and cinnamon.',
                price: "2",
                image: './images/67.jpg',
                stock: "10",
                categories: 'Grocery'
              },
              {
             
                
                name: 'Bananas',
                description:
                  'Bananas are typically 6-10 inches long and have a green peel when unripe. They taste best when the peel turns yellow and is speckled with dark spots.',
                price: "2",
                image: './images/68.jpg',
                stock: "10",
                categories: 'Grocery'
              },
              {
                
                name: 'Celery Stalks',
                description:
                  'Celery has a cluster of pale green leaved ribs surrounding a heart (inner ribs). Trimmed celery leaves can be used as a garnish or added to a mixed greens salad. Enjoy celery on its own or with dip as a snack, or chop for soups, stews, or a sandwich.',
                price: "3",
                image: './images/73.jpg',
                stock: "10",
                categories: 'Grocery'
              },
              {
                
                
                name: 'English Cucumber',
                description:
                  'English (or hothouse) cucumbers are cylindrical green-skinned fruit with a crisp white flesh and edible seeds. English cucumbers are typically enjoyed raw and can be peeled or eaten with the skin on.',
                price:  "2",
                image: './images/74.jpg',
                stock: "10",
                categories: 'Grocery'
              },
              {
                name:
                  '4 Pack Monster Truck Toys for Boys and Girls, Inertia Car Educational Toy Cars, Friction Powered Push and Go Toy Cars, Christmas Gift Birthday Party Supplies for Toddlers Kids (4 Color)',
                description:
                  "High-density alloy and non-toxic plastic make it a durable and safe entertainment toy equipment. Monster trucks with shock-proof springs and non-slip tires are a great educational and entertaining toy that can stimulate kids' interest in inertia.",
                price: "28",
                image: './images/85.jpg',
                stock: "10",
                categories: 'Toys'
              },
              {
                
                name:
                  'Nerf Ultra Two Motorized Blaster -- Fast-Back Reloading -- Includes 6 Nerf Ultra Darts -- Compatible Only with Nerf Ultra Darts',
                description:
                  'Experience extreme distance, accuracy, and speed with Nerf Ultra blasters that are designed with advanced features to take your Nerf games to the next level.',
                price: "35",
                image: './images/86.jpg',
                stock: "10",
                categories: 'Toys'
              },
              {
                name:
                  'Fisher-Price Laugh & Learn Smart Stages Puppy, infant plush toy with music, lights and learning content for baby to toddler',
                description:
                  'Snuggly plush toy that teaches over 100 first words with Smart Stages technology.',
                price: "28",
                image: './images/91.jpg',
                stock: "10",
                categories: 'Toys'
              },
              {
                name: 'Style 4 Ever Spray Art Plush Puppy from Dixie Toy Direct',
                description:
                  'A cute and cuddly 6 inch plush in an adorable puppy character. White soft material with a sparkly lightning bolt around its eye, and sparkly fabric on the ears.',
                price: "60",
                image: './images/92.jpg',
                stock: "10",
                categories: 'Toys'
              }

        

            
              
              
            
        
            ]);
});

