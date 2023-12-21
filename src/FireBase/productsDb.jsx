let allProducts = [
    {
      title: "Smartphone X Pro Max",
      price: 799.99,
      description: "A high-end smartphone with cutting-edge features and a stunning display.",
      rating: 1,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },
    {
      title: "Ultra-Thin Laptop 15.6",
      price: 1199.99,
      description: "An ultra-portable laptop with a sleek design, powerful performance, and long battery life.",
      rating: 5,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },
    {
      title: "Noise-Canceling Headphones",
      price: 199.99,
      description: "Premium headphones with active noise cancellation for an immersive listening experience.",
      rating: 4,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },
    {
      title: "Wireless Gaming Mouse",
      price: 49.99,
      description: "A high-precision wireless gaming mouse with customizable RGB lighting.",
      rating: 3,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },
    {
      title: "4K UHD Smart TV 55-inch",
      price: 699.99,
      description: "A smart TV with 4K Ultra HD resolution and built-in streaming apps.",
      rating: 2,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },
    {
      title: "Portable Bluetooth Speaker",
      price: 79.99,
      description: "Compact Bluetooth speaker with powerful sound and long-lasting battery.",
      rating: 5,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },
    {
      title: "Digital Camera Kit",
      price: 599.99,
      description: "Complete digital camera kit with lenses and accessories for photography enthusiasts.",
      rating: 4,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },
    {
      title: "Smartwatch Series 7",
      price: 299.99,
      description: "The latest smartwatch with health and fitness tracking features and a vibrant display.",
      rating: 3,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },
    {
      title: "High-Speed Wi-Fi Router",
      price: 129.99,
      description: "A high-performance Wi-Fi router for fast and reliable internet connections.",
      rating: 2,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },
    {
      title: "USB-C Charging Cable",
      price: 12.99,
      description: "Durable USB-C cable for fast charging and data transfer.",
      rating: 1,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },
    {
      title: "In-Ear Sports Earbuds",
      price: 59.99,
      description: "Sweat-resistant in-ear earbuds with secure fit for sports and workouts.",
      rating: 2,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },
    {
      title: "Gaming Console Bundle",
      price: 499.99,
      description: "A gaming console bundle with popular games and accessories.",
      rating: 1,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },
    {
      title: "Smart Home Security Camera",
      price: 149.99,
      description: "Wireless security camera with motion detection and remote monitoring.",
      rating: 3,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },
    {
      title: "Wireless Charging Pad",
      price: 29.99,
      description: "Qi-compatible wireless charging pad for smartphones and accessories.",
      rating: 4,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],      
    },
    {
      title: "Tablet PC with Stylus",
      price: 349.99,
      description: "Tablet with a stylus for note-taking and creative tasks.",
      rating: 2,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },
    {
      title: "External Hard Drive 2TB",
      price: 89.99,
      description: "2TB external hard drive for data storage and backup.",
      rating: 5,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },
    {
      title: "Compact Drone with Camera",
      price: 199.99,
      description: "Compact drone with a built-in camera for aerial photography and videography.",
      rating: 1,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },
    {
      title: "Home Theater Soundbar",
      price: 249.99,
      description: "Soundbar for immersive home theater audio experience.",
      rating: 2,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },
    {
      title: "Mini Projector 1080p",
      price: 199.99,
      description: "Portable mini projector with full HD resolution for entertainment on the go.",
      rating: 3,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },
    {
      title: "Smart Thermostat",
      price: 149.99,
      description: "Smart thermostat for energy-efficient home climate control.",
      rating: 4,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },
    {
      title: "Wireless Earbuds with Case",
      price: 69.99,
      description: "Wireless earbuds with a charging case for on-the-go convenience.",
      rating: 5,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },
    {
      title: "Graphics Card for Gaming",
      price: 349.99,
      description: "Powerful graphics card for gaming and content creation.",
      rating: 3,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },
    {
      title: "LED Desk Lamp with USB",
      price: 39.99,
      description: "LED desk lamp with adjustable brightness and built-in USB charging port.",
      rating: 4,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },
    {
      title: "3D Printing Pen",
      price: 49.99,
      description: "3D printing pen for creative design and art projects.",
      rating: 5,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },
    {
      title: "Bluetooth Car Adapter",
      price: 19.99,
      description: "Bluetooth adapter for car audio systems.",
      rating: 2,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },
    {
      title: "Fitness Tracker Watch",
      price: 79.99,
      description: "Fitness tracker watch with heart rate monitoring and GPS.",
      rating: 4,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },
    {
      title: "Universal Laptop Docking Station",
      price: 99.99,
      description: "Laptop docking station for multiple display and accessory connections.",
      rating: 5,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },
    {
      title: "Portable Power Bank 20000mAh",
      price: 29.99,
      description: "High-capacity power bank for charging devices on the go.",
      rating: 3,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },
    {
      title: "Smart Light Bulb Starter Kit",
      price: 59.99,
      description: "Starter kit for smart home lighting control.",
      rating: 2,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },
    {
      title: "HD Webcam for Streaming",
      price: 69.99,
      description: "High-definition webcam for streaming and video conferencing.",
      rating: 5,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },
    {
      title: "Gaming Keyboard and Mouse Combo",
      price: 69.99,
      description: "Keyboard and mouse combo for gaming enthusiasts.",
      rating: 5,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },
    {
      title: "Smart Refrigerator with Touchscreen",
      price: 1299.99,
      description: "Smart refrigerator with a touchscreen display and food management features.",
      rating: 4,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },
    {
      title: "Wireless Charging Stand",
      price: 39.99,
      description: "Wireless charging stand for smartphones and smartwatches.",
      rating: 1,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },
    {
      title: "Home Theater Projector 4K",
      price: 799.99,
      description: "4K home theater projector for cinema-quality entertainment.",
      rating: 2,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },
    {
      title: "Smart Plug with Voice Control",
      price: 19.99,
      description: "Smart plug with voice control for home automation.",
      rating: 3,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },
    {
      title: "USB-C Hub for Macbook",
      price: 39.99,
      description: "USB-C hub with multiple ports for MacBook users.",
      rating: 1,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },
    {
      title: "Professional Studio Microphone",
      price: 99.99,
      description: "High-quality studio microphone for recording and broadcasting.",
      rating: 4,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },
    {
      title: "Robot Vacuum Cleaner",
      price: 299.99,
      description: "Robotic vacuum cleaner for hands-free cleaning.",
      rating: 5,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },
    {
      title: "Foldable Electric Scooter",
      price: 349.99,
      description: "Foldable electric scooter for urban commuting.",
      rating: 3,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },
    {
      title: "Mini Bluetooth Keyboard",
      price: 29.99,
      description: "Compact Bluetooth keyboard for mobile and tablet users.",
      rating: 2,
      category: {
        id: 1,
        name: "Electronics",
        image: "category-imgs/electronics-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",],
    },

    // =================================================
    {
      title: "Casual Cotton T-Shirt",
      price: 150,
      description: "Comfortable and stylish casual cotton t-shirt for everyday wear.",
      rating: 4,
      category: {
        id: 2,
        name: "Fashion and Apparel",
        image: "category-imgs/fashion-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg"],
    },
    {
      title: "Slim Fit Jeans",
      price: 250,
      description: "Classic slim-fit jeans for a trendy and modern look.",
      rating: 4.5,
      category: {
        id: 2,
        name: "Fashion and Apparel",
        image: "category-imgs/fashion-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg"],
    },
    {
      title: "Formal Blazer",
      price: 800,
      description: "Sophisticated formal blazer for business and special occasions.",
      rating: 4.7,
      category: {
        id: 2,
        name: "Fashion and Apparel",
        image: "category-imgs/fashion-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg"],
    },
    {
      title: "Summer Dress",
      price: 180,
      description: "Light and breezy summer dress for a fashionable look in warm weather.",
      rating: 4.2,
      category: {
        id: 2,
        name: "Fashion and Apparel",
        image: "category-imgs/fashion-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg"],
    },
    {
      title: "Leather Jacket",
      price: 600,
      description: "Stylish leather jacket for a rugged and fashionable appearance.",
      rating: 4.6,
      category: {
        id: 2,
        name: "Fashion and Apparel",
        image: "category-imgs/fashion-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg"],
    },
    {
      title: "Denim Skirt",
      price: 120,
      description: "Casual denim skirt for a comfortable and trendy look.",
      rating: 4.0,
      category: {
        id: 2,
        name: "Fashion and Apparel",
        image: "category-imgs/fashion-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg"],
    },
    {
      title: "Sporty Hoodie",
      price: 280,
      description: "Warm and comfortable hoodie for a sporty and casual style.",
      rating: 4.3,
      category: {
        id: 2,
        name: "Fashion and Apparel",
        image: "category-imgs/fashion-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg"],
    },
    {
      title: "Elegant Evening Gown",
      price: 1500,
      description: "A glamorous gown for special occasions and formal events.",
      rating: 4.8,
      category: {
        id: 2,
        name: "Fashion and Apparel",
        image: "category-imgs/fashion-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg"],
    },
    {
      title: "Classic Polo Shirt",
      price: 120,
      description: "Timeless polo shirt for a casual yet refined look.",
      rating: 3.9,
      category: {
        id: 2,
        name: "Fashion and Apparel",
        image: "category-imgs/fashion-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg"],
    },
    {
      title: "Cozy Sweater",
      price: 300,
      description: "Soft and cozy sweater for chilly days and evenings.",
      rating: 4.4,
      category: {
        id: 2,
        name: "Fashion and Apparel",
        image: "category-imgs/fashion-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg"],
    },
    {
      title: "Cargo Pants",
      price: 180,
      description: "Durable cargo pants for a rugged and practical style.",
      rating: 3.7,
      category: {
        id: 2,
        name: "Fashion and Apparel",
        image: "category-imgs/fashion-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg"],
    },
    {
      title: "Bohemian Maxi Skirt",
      price: 220,
      description: "Flowy and vibrant maxi skirt for a bohemian-inspired look.",
      rating: 4.1,
      category: {
        id: 2,
        name: "Fashion and Apparel",
        image: "category-imgs/fashion-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg"],
    },
    {
      title: "Sleek Leather Boots",
      price: 450,
      description: "Chic and sleek leather boots to elevate your footwear collection.",
      rating: 4.9,
      category: {
        id: 2,
        name: "Fashion and Apparel",
        image: "category-imgs/fashion-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg"],
    },
    {
      title: "Quilted Jacket",
      price: 320,
      description: "Stylish quilted jacket for a warm and fashionable winter look.",
      rating: 4.5,
      category: {
        id: 2,
        name: "Fashion and Apparel",
        image: "category-imgs/fashion-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg"],
    },
    {
      title: "Printed Sundress",
      price: 160,
      description: "Colorful printed sundress for a playful and summery vibe.",
      rating: 4.0,
      category: {
        id: 2,
        name: "Fashion and Apparel",
        image: "category-imgs/fashion-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg"],
    },
    {
      title: "Rugged Denim Jacket",
      price: 280,
      description: "A rugged denim jacket for a cool and edgy appearance.",
      rating: 4.2,
      category: {
        id: 2,
        name: "Fashion and Apparel",
        image: "category-imgs/fashion-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg"],
    },
    {
      title: "Striped Button-Up Shirt",
      price: 120,
      description: "Classic striped button-up shirt for a timeless look.",
      rating: 4.3,
      category: {
        id: 2,
        name: "Fashion and Apparel",
        image: "category-imgs/fashion-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg"],
    },
    {
      title: "Athletic Leggings",
      price: 90,
      description: "Stretchy and comfortable athletic leggings for workouts.",
      rating: 4.8,
      category: {
        id: 2,
        name: "Fashion and Apparel",
        image: "category-imgs/fashion-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg"],
    },
    {
      title: "Stylish Fedora Hat",
      price: 50,
      description: "A stylish fedora hat to complete your trendy ensemble.",
      rating: 4.0,
      category: {
        id: 2,
        name: "Fashion and Apparel",
        image: "category-imgs/fashion-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg"],
    },
    {
      title: "Eco-Friendly Sneakers",
      price: 120,
      description: "Environmentally friendly sneakers made from sustainable materials.",
      rating: 4.5,
      category: {
        id: 2,
        name: "Fashion and Apparel",
        image: "category-imgs/fashion-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg"],
    },
    {
      title: "Chic Crossbody Bag",
      price: 180,
      description: "A chic crossbody bag to add a touch of elegance to your outfit.",
      rating: 4.2,
      category: {
        id: 2,
        name: "Fashion and Apparel",
        image: "category-imgs/fashion-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg"],
    },
    {
      title: "Trendy Graphic Tee",
      price: 80,
      description: "A trendy graphic tee to express your unique style.",
      rating: 4.6,
      category: {
        id: 2,
        name: "Fashion and Apparel",
        image: "category-imgs/fashion-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg"],
    },
    {
      title: "Tailored Suit",
      price: 1200,
      description: "A tailored suit for a polished and sophisticated look.",
      rating: 4.9,
      category: {
        id: 2,
        name: "Fashion and Apparel",
        image: "category-imgs/fashion-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg"],
    },
    {
      title: "Vintage-Inspired Skirt",
      price: 150,
      description: "A vintage-inspired skirt for a retro and feminine aesthetic.",
      rating: 4.3,
      category: {
        id: 2,
        name: "Fashion and Apparel",
        image: "category-imgs/fashion-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg"],
    },
    {
      title: "Cotton Lounge Shorts",
      price: 40,
      description: "Comfortable cotton lounge shorts for relaxed days at home.",
      rating: 3.8,
      category: {
        id: 2,
        name: "Fashion and Apparel",
        image: "category-imgs/fashion-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg"],
    },
    {
      title: "Faux Fur Coat",
      price: 500,
      description: "A luxurious faux fur coat to stay warm and stylish in winter.",
      rating: 4.7,
      category: {
        id: 2,
        name: "Fashion and Apparel",
        image: "category-imgs/fashion-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg"],
    },
    {
      title: "Retro High-Top Sneakers",
      price: 100,
      description: "Retro high-top sneakers for a throwback streetwear look.",
      rating: 4.0,
      category: {
        id: 2,
        name: "Fashion and Apparel",
        image: "category-imgs/fashion-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg"],
    },
    {
      title: "Coordinated Athleisure Set",
      price: 180,
      description: "A coordinated athleisure set for a sporty and stylish ensemble.",
      rating: 4.4,
      category: {
        id: 2,
        name: "Fashion and Apparel",
        image: "category-imgs/fashion-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg"],
    },
    {
      title: "Structured Handbag",
      price: 220,
      description: "A structured handbag to add sophistication to any outfit.",
      rating: 4.6,
      category: {
        id: 2,
        name: "Fashion and Apparel",
        image: "category-imgs/fashion-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg"],
    },
    {
      title: "Cargo Jacket",
      price: 280,
      description: "A versatile cargo jacket for a rugged and urban look.",
      rating: 4.2,
      category: {
        id: 2,
        name: "Fashion and Apparel",
        image: "category-imgs/fashion-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg"],
    },
    {
      title: "Modern Leather Sofa",
      price: 1200,
      description: "Contemporary leather sofa with a sleek design.",
      rating: 4,
      category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg"],
    },
    {
      title: "Wooden Dining Table Set",
      price: 850,
      description: "Solid wood dining table with matching chairs.",
      rating: 3,
      category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg"],
    },
    {
      title: "Linen Upholstered Bed",
      price: 1100,
      description: "Queen-size bed with soft linen upholstery.",
      rating: 4,
      category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg"],
    },
    {
      title: "Rustic Coffee Table",
      price: 300,
      description: "Vintage-style coffee table with storage.",
      rating: 4,
      category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg"],
    },
    {
      title: "Leather Recliner Chair",
      price: 600,
      description: "Comfortable leather recliner chair with footrest.",
      rating: 4,
      category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg"],
    },
    {
      title: "Floating Wall Shelves",
      price: 120,
      description: "Set of three floating shelves for wall decor.",
      rating: 3,
      category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg"],
    },
    {
      title: "Glass Dining Room Chandelier",
      price: 800,
      description: "Elegant glass chandelier for dining room lighting.",
      rating: 5,
      category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","chandelier-image-1.jpg", "chandelier-image-2.jpg"],
    },
    {
      title: "Velvet Accent Chair",
      price: 250,
      description: "Plush velvet accent chair for the living room.",
      rating: 4,
      category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","accent-chair-image-1.jpg", "accent-chair-image-2.jpg"],
    },
    {
      title: "Vintage Writing Desk",
      price: 450,
      description: "Antique-style writing desk with drawers.",
      rating: 3,
      category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","writing-desk-image-1.jpg", "writing-desk-image-2.jpg"],
    },
    {
      title: "Cotton Bedding Set",
      price: 150,
      description: "Soft and cozy cotton bedding set for a queen-size bed.",
      rating: 4,
      category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","bedding-set-image-1.jpg", "bedding-set-image-2.jpg"],
    },
    {
      title: "Elegant Sectional Sofa",
      price: 1600,
      description: "Luxurious sectional sofa with elegant upholstery.",
      rating: 5,
      category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","sectional-sofa-image-1.jpg", "sectional-sofa-image-2.jpg"],
    },
    {
      title: "Marble Top Coffee Table",
      price: 500,
      description: "Modern coffee table with a sleek marble top.",
      rating: 4,
      category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","marble-coffee-table-image-1.jpg", "marble-coffee-table-image-2.jpg"],
    },
    {
      title: "Farmhouse Dining Chairs",
      price: 180,
      description: "Set of four farmhouse-style dining chairs.",
      rating: 4,
      category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","dining-chairs-image-1.jpg", "dining-chairs-image-2.jpg"],
    },
    {
      title: "Antique Bookshelf",
      price: 750,
      description: "Vintage bookshelf with intricate woodwork.",
      rating: 4,
      category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","bookshelf-image-1.jpg", "bookshelf-image-2.jpg"],
    },
    {
      title: "Memory Foam Mattress",
      price: 900,
      description: "Queen-size memory foam mattress for a restful sleep.",
      rating: 5,
      category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","mattress-image-1.jpg", "mattress-image-2.jpg"],
    },
    {
      title: "Glass Top End Tables",
      price: 200,
      description: "Set of two glass top end tables for the living room.",
      rating: 3,
      category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","end-tables-image-1.jpg", "end-tables-image-2.jpg"],
    },
    {
      title: "Velvet Throw Pillows",
      price: 30,
      description: "Soft velvet throw pillows for couch decoration.",
      rating: 4,
      category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","throw-pillows-image-1.jpg", "throw-pillows-image-2.jpg"],
    },
    {
      title: "Adjustable Standing Desk",
      price: 350,
      description: "Ergonomic standing desk for a comfortable workspace.",
      rating: 4,
      category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","standing-desk-image-1.jpg", "standing-desk-image-2.jpg"],
    },
    {
      title: "Rattan Patio Furniture Set",
      price: 1200,
      description: "Outdoor patio furniture set with rattan design.",
      rating: 4,
      category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","patio-furniture-image-1.jpg", "patio-furniture-image-2.jpg"],
    },
    {
      title: "Wall-Mounted Mirror",
      price: 80,
      description: "Rectangular wall-mounted mirror for hallway decor.",
      rating: 3,
      category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","wall-mirror-image-1.jpg", "wall-mirror-image-2.jpg"],
    },
    {
      title: "Ceramic Table Lamp",
      price: 60,
      description: "Contemporary ceramic table lamp for ambient lighting.",
      rating: 4,
      category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","table-lamp-image-1.jpg", "table-lamp-image-2.jpg"],
    },
    {
      title: "Linen Curtains",
      price: 40,
      description: "Light-filtering linen curtains for a cozy atmosphere.",
      rating: 3,
      category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","curtains-image-1.jpg", "curtains-image-2.jpg"],
    },
    {
      title: "Outdoor Hammock",
      price: 100,
      description: "Relaxing outdoor hammock for backyard leisure.",
      rating: 4,
      category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","hammock-image-1.jpg", "hammock-image-2.jpg"],
    },
    {
      title: "Round Area Rug",
      price: 120,
      description: "Circular area rug for a stylish living room.",
      rating: 3,
      category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","area-rug-image-1.jpg", "area-rug-image-2.jpg"],
    },
    {
      title: "Marble Bathroom Accessories Set",
      price: 70,
      description: "Luxurious marble bathroom accessories set.",
      rating: 4,
      category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","bathroom-accessories-image-1.jpg", "bathroom-accessories-image-2.jpg"],
    },
    {
      title: "Wooden Storage Bench",
      price: 180,
      description: "Multipurpose wooden storage bench for entryway.",
      rating: 4,
      category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","storage-bench-image-1.jpg", "storage-bench-image-2.jpg"],
    },
    {
      title: "Faux Fur Throw Blanket",
      price: 50,
      description: "Soft faux fur throw blanket for cozy evenings.",
      rating: 4,
      category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","throw-blanket-image-1.jpg", "throw-blanket-image-2.jpg"],
    },
    {
      title: "Glass Display Cabinet",
      price: 400,
      description: "Glass display cabinet for showcasing collectibles.",
      rating: 4,
      category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","display-cabinet-image-1.jpg", "display-cabinet-image-2.jpg"],
    },
    {
      title: "Wooden Plant Stand",
      price: 40,
      description: "Minimalist wooden plant stand for indoor greenery.",
      rating: 3,
      category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","plant-stand-image-1.jpg", "plant-stand-image-2.jpg"],
    },
    {
      title: "Terracotta Pots",
      price: 20,
      description: "Set of three terracotta pots for potted plants.",
      rating: 3,
      category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","terracotta-pots-image-1.jpg", "terracotta-pots-image-2.jpg"],
    },
    {
      title: "Bamboo Room Divider",
      price: 80,
      description: "Bamboo room divider for creating separate spaces.",
      rating: 4,
      category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","room-divider-image-1.jpg", "room-divider-image-2.jpg"],
    },
    {
      title: "Stainless Steel Trash Can",
      price: 30,
      description: "Stainless steel trash can for modern kitchens.",
      rating: 3,
      category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
      },
      images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","trash-can-image-1.jpg", "trash-can-image-2.jpg"],
    },
    {
      title: "Woven Basket Storage",
      price: 60,
      description: "Set of three woven baskets for stylish storage.",
      rating: 4,
      category:{
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","woven-basket-image-1.jpg", "woven-basket-image-2.jpg"],
        },
        {
        title: "Mid-Century Modern Armchair",
        price: 320,
        description: "Iconic mid-century modern armchair for a retro touch.",
        rating: 4,
        category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","armchair-image-1.jpg", "armchair-image-2.jpg"],
        },
        {
        title: "Wall-Mounted Bookshelves",
        price: 180,
        description: "Space-saving wall-mounted bookshelves for a minimalist look.",
        rating: 3,
        category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","bookshelves-image-1.jpg", "bookshelves-image-2.jpg"],
        },
        {
        title: "Metallic Table Clock",
        price: 25,
        description: "Elegant metallic table clock for timeless style.",
        rating: 4,
        category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","table-clock-image-1.jpg", "table-clock-image-2.jpg"],
        },
        {
        title: "Velvet Ottoman",
        price: 120,
        description: "Plush velvet ottoman for additional seating.",
        rating: 3,
        category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","ottoman-image-1.jpg", "ottoman-image-2.jpg"],
        },
        {
        title: "Bamboo Bath Mat",
        price: 35,
        description: "Eco-friendly bamboo bath mat for a spa-like feel.",
        rating: 4,
        category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","bath-mat-image-1.jpg", "bath-mat-image-2.jpg"],
        },
        {
        title: "Industrial Style Bar Stools",
        price: 80,
        description: "Set of two industrial style bar stools for kitchen counters.",
        rating: 4,
        category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","bar-stools-image-1.jpg", "bar-stools-image-2.jpg"],
        },

        {
        title: "Folding Wall Desk",
        price: 150,
        description: "Space-saving folding wall desk for small spaces.",
        rating: 3,
        category: {
        id: 3,
        name: "Home and Furniture",
        image: "category-imgs/furniture-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","wall-desk-image-1.jpg", "wall-desk-image-2.jpg"],
        },

        // =============================================================================
        
        {
        title: "Organic Lavender Shampoo",
        price: 350,
        description: "Gentle and nourishing shampoo with the calming scent of lavender.",
        rating: 4,
        category: {
          id: 4,
          name: "Health and Beauty",
          image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg"],
        },
        {
        title: "Anti-Aging Vitamin C Serum",
        price: 1200,
        description: "Powerful anti-aging serum enriched with vitamin C for radiant skin.",
        rating: 5,
        category: {
          id: 4,
          name: "Health and Beauty",
          image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/vitamin-c-serum-img1.jpg", "category-imgs/vitamin-c-serum-img2.jpg"],
        },
        {
        title: "Aloe Vera Moisturizing Cream",
        price: 250,
        description: "Hydrating cream with the natural goodness of aloe vera for soft and supple skin.",
        rating: 3,
        category: {
          id: 4,
          name: "Health and Beauty",
          image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/aloe-vera-cream-img1.jpg", "category-imgs/aloe-vera-cream-img2.jpg"],
        },
        {
        title: "Tea Tree Oil Acne Cleanser",
        price: 180,
        description: "Gentle cleanser with tea tree oil to combat acne and blemishes.",
        rating: 4,
        category: {
          id: 4,
          name: "Health and Beauty",
          image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/acne-cleanser-img1.jpg", "category-imgs/acne-cleanser-img2.jpg"],
        },
        {
        title: "Herbal Relaxation Bath Salts",
        price: 300,
        description: "A soothing blend of herbs for a relaxing and therapeutic bath experience.",
        rating: 5,
        category: {
          id: 4,
          name: "Health and Beauty",
          image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/bath-salts-img1.jpg", "category-imgs/bath-salts-img2.jpg"],
        },
        {
        title: "Natural Rosehip Face Oil",
        price: 500,
        description: "Nourishing face oil with the rejuvenating properties of rosehip extract.",
        rating: 4,
        category: {
          id: 4,
          name: "Health and Beauty",
          image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/rosehip-face-oil-img1.jpg", "category-imgs/rosehip-face-oil-img2.jpg"],
        },
        {
        title: "Himalayan Salt Body Scrub",
        price: 280,
        description: "Exfoliating body scrub enriched with Himalayan salt for smooth skin.",
        rating: 4,
        category: {
          id: 4,
          name: "Health and Beauty",
          image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/himalayan-salt-scrub-img1.jpg", "category-imgs/himalayan-salt-scrub-img2.jpg"],
        },
        {
        title: "Charcoal Detoxifying Mask",
        price: 400,
        description: "Purifying mask with activated charcoal to detoxify and clarify the skin.",
        rating: 3,
        category: {
          id: 4,
          name: "Health and Beauty",
          image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/charcoal-mask-img1.jpg", "category-imgs/charcoal-mask-img2.jpg"],
        },
        {
        title: "Essential Oil Diffuser",
        price: 800,
        description: "Aromatherapy diffuser with a selection of essential oils for a calming ambiance.",
        rating: 5,
        category: {
          id: 4,
          name: "Health and Beauty",
          image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/essential-oil-diffuser-img1.jpg", "category-imgs/essential-oil-diffuser-img2.jpg"],
        },
        {
        title: "Probiotic Nutritional Supplement",
        price: 1500,
        description: "Probiotic capsules for improved gut health and overall well-being.",
        rating: 4,
        category: {
          id: 4,
          name: "Health and Beauty",
          image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/probiotic-supplement-img1.jpg", "category-imgs/probiotic-supplement-img2.jpg"],
        },
        {
        title: "Silk Sleep Mask",
        price: 100,
        description: "Luxurious silk sleep mask for a comfortable and undisturbed night's sleep.",
        rating: 4,
        category: {
          id: 4,
          name: "Health and Beauty",
          image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/silk-sleep-mask-img1.jpg", "category-imgs/silk-sleep-mask-img2.jpg"],
        },
        {
        title: "Collagen-Infused Lip Balm",
        price: 120,
        description: "Moisturizing lip balm with added collagen for plump and hydrated lips.",
        rating: 3,
        category: {
          id: 4,
          name: "Health and Beauty",
          image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/collagen-lip-balm-img1.jpg", "category-imgs/collagen-lip-balm-img2.jpg"],
        },
        {
        title: "Soothing Lavender Bath Bombs",
        price: 250,
        description: "Fizzing bath bombs with lavender scent for a calming and luxurious bath.",
        rating: 4,
        category: {
          id: 4,
          name: "Health and Beauty",
          image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/lavender-bath-bombs-img1.jpg", "category-imgs/lavender-bath-bombs-img2.jpg"],
        },
        {
        title: "Natural Hemp Body Lotion",
        price: 300,
        description: "Hydrating body lotion with the nourishing benefits of hemp extract.",
        rating: 4,
        category: {
          id: 4,
          name: "Health and Beauty",
          image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/hemp-body-lotion-img1.jpg", "category-imgs/hemp-body-lotion-img2.jpg"],
        },
        {
        title: "Green Tea Antioxidant Mask",
        price: 400,
        description: "Rejuvenating face mask with the antioxidant power of green tea extract.",
        rating: 4,
        category: {
          id: 4,
          name: "Health and Beauty",
          image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/green-tea-mask-img1.jpg", "category-imgs/green-tea-mask-img2.jpg"],
        },
        {
        title: "Vitamin E Night Cream",
        price: 500,
        description: "Restorative night cream enriched with vitamin E for overnight skin renewal.",
        rating: 5,
        category: {
          id: 4,
          name: "Health and Beauty",
          image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/vitamin-e-night-cream-img1.jpg", "category-imgs/vitamin-e-night-cream-img2.jpg"],
        },
        {
        title: "Jasmine Scented Bath Oil",
        price: 180,
        description: "Aromatic bath oil with the sweet fragrance of jasmine for a luxurious bath experience.",
        rating: 3,
        category: {
          id: 4,
          name: "Health and Beauty",
          image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/jasmine-bath-oil-img1.jpg", "category-imgs/jasmine-bath-oil-img2.jpg"],
        },
        {
        title: "Minty Fresh Breath Spray",
        price: 150,
        description: "Pocket-sized breath spray with a refreshing mint flavor for on-the-go freshness.",
        rating: 4,
        category: {
          id: 4,
          name: "Health and Beauty",
          image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/breath-spray-img1.jpg", "category-imgs/breath-spray-img2.jpg"],
        },
        {
        title: "Natural Beeswax Lip Balm",
        price: 120,
        description: "Beeswax lip balm with natural ingredients for smooth and moisturized lips.",
        rating: 5,
        category: {
          id: 4,
          name: "Health and Beauty",
          image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/beeswax-lip-balm-img1.jpg", "category-imgs/beeswax-lip-balm-img2.jpg"],
        },
        {
        title: "Sandalwood Aromatherapy Candle",
        price: 200,
        description: "A calming and fragrant sandalwood-scented candle for relaxation.",
        rating: 4,
        category: {
          id: 4,
          name: "Health and Beauty",
          image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/sandalwood-candle-img1.jpg", "category-imgs/sandalwood-candle-img2.jpg"],
        },
        {
        title: "Rose Water Facial Toner",
        price: 280,
        description: "Gentle facial toner with the soothing properties of rose water for balanced skin.",
        rating: 4,
        category: {
          id: 4,
          name: "Health and Beauty",
          image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/rose-water-toner-img1.jpg", "category-imgs/rose-water-toner-img2.jpg"],
        },
        {
        title: "Detoxifying Clay Face Mask",
        price: 350,
        description: "Clay mask infused with detoxifying ingredients to cleanse and revitalize the skin.",
        rating: 4,
        category: {
          id: 4,
          name: "Health and Beauty",
          image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/detox-clay-mask-img1.jpg", "category-imgs/detox-clay-mask-img2.jpg"],
        },
        {
        title: "Peppermint Foot Cream",
        price: 150,
        description: "Cooling foot cream with peppermint for tired and achy feet.",
        rating: 3,
        category: {
          id: 4,
          name: "Health and Beauty",
          image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/peppermint-foot-cream-img1.jpg", "category-imgs/peppermint-foot-cream-img2.jpg"],
        },
        {
        title: "Gentle Baby Shampoo",
        price: 180,
        description: "Mild and gentle shampoo for babies, free from harsh chemicals and additives.",
        rating: 5,
        category: {
          id: 4,
          name: "Health and Beauty",
          image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/baby-shampoo-img1.jpg", "category-imgs/baby-shampoo-img2.jpg"],
        },
        {
        title: "Chamomile Relaxation Tea",
        price: 120,
        description: "Calming chamomile tea for relaxation and stress relief.",
        rating: 4,
        category: {
          id: 4,
          name: "Health and Beauty",
          image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/chamomile-tea-img1.jpg", "category-imgs/chamomile-tea-img2.jpg"],
        },
        {
        title: "Eucalyptus Shower Gel",
        price: 200,
        description: "Invigorating shower gel with the refreshing scent of eucalyptus.",
        rating: 4,
        category: {
          id: 4,
          name: "Health and Beauty",
          image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/eucalyptus-shower-gel-img1.jpg", "category-imgs/eucalyptus-shower-gel-img2.jpg"],
        },
        {
        title: "Vitamin D3 Supplement",
        price: 300,
        description: "Vitamin D3 capsules for bone health and immune system support.",
        rating: 5,
        category: {
          id: 4,
          name: "Health and Beauty",
          image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/vitamin-d3-supplement-img1.jpg", "category-imgs/vitamin-d3-supplement-img2.jpg"],
        },
        {
        title: "Refreshing Cucumber Face Mist",
        price: 150,
        description: "Hydrating face mist with the cool and refreshing essence of cucumber.",
        rating: 4,
        category: {
          id: 4,
          name: "Health and Beauty",
          image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/cucumber-face-mist-img1.jpg", "category-imgs/cucumber-face-mist-img2.jpg"],
        },
        {
        title: "Argan Oil Hair Mask",
        price: 400,
        description: "Deep-conditioning hair mask with the nourishing properties of argan oil.",
        rating: 4,
        category: {
        id: 4,
        name: "Health and Beauty",
        image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/argan-oil-hair-mask-img1.jpg", "category-imgs/argan-oil-hair-mask-img2.jpg"],
        },
        {
        title: "Vanilla Scented Body Butter",
        price: 280,
        description: "Rich and creamy body butter with the sweet aroma of vanilla.",
        rating: 5,
        category: {
        id: 4,
        name: "Health and Beauty",
        image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/vanilla-body-butter-img1.jpg", "category-imgs/vanilla-body-butter-img2.jpg"],
        },
        {
        title: "Cocoa Butter Lip Scrub",
        price: 150,
        description: "Exfoliating lip scrub with the moisturizing benefits of cocoa butter.",
        rating: 4,
        category: {
        id: 4,
        name: "Health and Beauty",
        image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/cocoa-butter-lip-scrub-img1.jpg", "category-imgs/cocoa-butter-lip-scrub-img2.jpg"],
        },
        {
        title: "Detangling Leave-In Conditioner",
        price: 200,
        description: "Leave-in conditioner for easy detangling and smooth, manageable hair.",
        rating: 4,
        category: {
        id: 4,
        name: "Health and Beauty",
        image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/detangling-conditioner-img1.jpg", "category-imgs/detangling-conditioner-img2.jpg"],
        },
        {
        title: "Jade Roller Facial Massager",
        price: 120,
        description: "Jade roller for facial massage and reducing puffiness for a radiant complexion.",
        rating: 5,
        category: {
        id: 4,
        name: "Health and Beauty",
        image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/jade-roller-img1.jpg", "category-imgs/jade-roller-img2.jpg"],
        },
        {
        title: "Coconut Milk Bath Soak",
        price: 250,
        description: "Luxurious bath soak with the nourishing properties of coconut milk.",
        rating: 4,
        category: {
        id: 4,
        name: "Health and Beauty",
        image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/coconut-milk-bath-soak-img1.jpg", "category-imgs/coconut-milk-bath-soak-img2.jpg"],
        },
        {
        title: "Sunscreen SPF 50",
        price: 180,
        description: "High-SPF sunscreen for effective protection against harmful UV rays.",
        rating: 4,
        category: {
        id: 4,
        name: "Health and Beauty",
        image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/sunscreen-img1.jpg", "category-imgs/sunscreen-img2.jpg"],
        },
        {
        title: "Mango Butter Body Scrub",
        price: 300,
        description: "Exfoliating body scrub with the tropical fragrance of mango butter.",
        rating: 5,
        category: {
        id: 4,
        name: "Health and Beauty",
        image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/mango-body-scrub-img1.jpg", "category-imgs/mango-body-scrub-img2.jpg"],
        },
        {
        title: "Calming Lavender Pillow Mist",
        price: 150,
        description: "Spray mist with the soothing scent of lavender for a restful night's sleep.",
        rating: 4,
        category: {
        id: 4,
        name: "Health and Beauty",
        image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/lavender-pillow-mist-img1.jpg", "category-imgs/lavender-pillow-mist-img2.jpg"],
        },
        {
        title: "Volumizing Hair Mousse",
        price: 200,
        description: "Volumizing mousse for lightweight lift and hold without stiffness.",
        rating: 3,
        category: {
        id: 4,
        name: "Health and Beauty",
        image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/volumizing-hair-mousse-img1.jpg", "category-imgs/volumizing-hair-mousse-img2.jpg"],
        },
        {
        title: "Peppermint Cooling Eye Gel",
        price: 120,
        description: "Cooling gel with peppermint for refreshing tired eyes and reducing puffiness.",
        rating: 4,
        category: {
        id: 4,
        name: "Health and Beauty",
        image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/peppermint-eye-gel-img1.jpg", "category-imgs/peppermint-eye-gel-img2.jpg"],
        },
        {
        title: "Mud Detoxifying Body Wrap",
        price: 350,
        description: "Detoxifying body wrap with mineral-rich mud for smoother and firmer skin.",
        rating: 4,
        category: {
        id: 4,
        name: "Health and Beauty",
        image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/mud-body-wrap-img1.jpg", "category-imgs/mud-body-wrap-img2.jpg"],
        },
        {
        title: "Vitamin C Brightening Serum",
        price: 500,
        description: "Brightening serum with vitamin C to reduce dark spots and enhance skin radiance.",
        rating: 5,
        category: {
        id: 4,
        name: "Health and Beauty",
        image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/vitamin-c-brightening-serum-img1.jpg", "category-imgs/vitamin-c-brightening-serum-img2.jpg"],
        },
        {
        title: "Ginseng Energy-Boosting Mask",
        price: 280,
        description: "Revitalizing face mask with ginseng for an energy-boosting and radiant complexion.",
        rating: 4,
        category: {
        id: 4,
        name: "Health and Beauty",
        image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/ginseng-boosting-mask-img1.jpg", "category-imgs/ginseng-boosting-mask-img2.jpg"],
        },
        {
        title: "Lemongrass Invigorating Soap",
        price: 180,
        description: "Invigorating soap with the refreshing scent of lemongrass for a revitalizing shower.",
        rating: 4,
        category: {
        id: 4,
        name: "Health and Beauty",
        image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/lemongrass-soap-img1.jpg", "category-imgs/lemongrass-soap-img2.jpg"],
        },
        {
        title: "Ylang Ylang Relaxation Oil",
        price: 250,
        description: "Relaxing oil with the exotic aroma of ylang-ylang for a calming massage.",
        rating: 5,
        category: {
        id: 4,
        name: "Health and Beauty",
        image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/ylang-ylang-oil-img1.jpg", "category-imgs/ylang-ylang-oil-img2.jpg"],
        },
        {
        title: "Cucumber Hydrating Face Mask",
        price: 150,
        description: "Hydrating face mask with the cool and soothing properties of cucumber.",
        rating: 4,
        category: {
        id: 4,
        name: "Health and Beauty",
        image: "category-imgs/cosmetics-img.jpg"
        },
        images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","category-imgs/cucumber-face-mask-img1.jpg", "category-imgs/cucumber-face-mask-img2.jpg"],
        },  
        // =======================================================================
        {
          title: "Classic Leather-bound Journal",
          price: 150,
          description: "Elegant leather-bound journal for your thoughts and notes.",
          rating: 4,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","journal-image-1.jpg", "journal-image-2.jpg"]
        },
        {
          title: "Moleskine Weekly Planner",
          price: 200,
          description: "Stay organized with this high-quality weekly planner from Moleskine.",
          rating: 5,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","planner-image-1.jpg", "planner-image-2.jpg"]
        },
        {
          title: "Vintage Fountain Pen",
          price: 120,
          description: "Write in style with this vintage-inspired fountain pen.",
          rating: 3,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","fountain-pen-image-1.jpg", "fountain-pen-image-2.jpg"]
        },
        {
          title: "Set of 50 Colored Pencils",
          price: 30,
          description: "Vibrant colors for your artistic creations.",
          rating: 4,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","colored-pencils-image-1.jpg", "colored-pencils-image-2.jpg"]
        },
        {
          title: "Hardcover Bestseller Novel",
          price: 180,
          description: "Dive into the gripping storyline of this bestseller novel.",
          rating: 5,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","novel-image-1.jpg", "novel-image-2.jpg"]
        },
        {
          title: "Calligraphy Starter Set",
          price: 50,
          description: "Begin your journey into beautiful writing with this calligraphy set.",
          rating: 4,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","calligraphy-set-image-1.jpg", "calligraphy-set-image-2.jpg"]
        },
        {
          title: "Poetry Anthology Book",
          price: 160,
          description: "Explore the beauty of poetry with this carefully curated anthology.",
          rating: 4,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","poetry-book-image-1.jpg", "poetry-book-image-2.jpg"]
        },
        {
          title: "Stylish Laptop Sleeve",
          price: 80,
          description: "Protect your laptop in style with this sleek and durable laptop sleeve.",
          rating: 5,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","laptop-sleeve-image-1.jpg", "laptop-sleeve-image-2.jpg"]
        },
        {
          title: "Science Fiction Novel",
          price: 130,
          description: "Immerse yourself in the futuristic world of this gripping science fiction novel.",
          rating: 4,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","sci-fi-novel-image-1.jpg", "sci-fi-novel-image-2.jpg"]
        },
        {
          title: "Set of 20 Fine-tip Markers",
          price: 25,
          description: "Perfect for detailed drawings and colorful notes.",
          rating: 4,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","fine-tip-markers-image-1.jpg", "fine-tip-markers-image-2.jpg"]
        },
        {
          title: "Historical Fiction Book",
          price: 140,
          description: "Transport yourself to a different era with this captivating historical fiction.",
          rating: 5,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg"]
        },
        {
          title: "Luxury Leather Notebook",
          price: 250,
          description: "Exquisite leather notebook for a touch of luxury in your note-taking.",
          rating: 4,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","luxury-notebook-image-1.jpg", "luxury-notebook-image-2.jpg"]
        },
        {
          title: "Gel Pen Set",
          price: 15,
          description: "Smooth-writing gel pens in an array of colors.",
          rating: 3,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","gel-pen-set-image-1.jpg", "gel-pen-set-image-2.jpg"]
        },
        {
          title: "Travel Journal with World Map",
          price: 180,
          description: "Document your adventures in this beautifully crafted travel journal.",
          rating: 5,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","travel-journal-image-1.jpg", "travel-journal-image-2.jpg"]
        },
        {
          title: "Educational Coloring Book for Kids",
          price: 12,
          description: "Fun and educational coloring book for young learners.",
          rating: 4,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","coloring-book-image-1.jpg", "coloring-book-image-2.jpg"]
        },
        {
          title: "Watercolor Paint Set",
          price: 40,
          description: "Explore the world of watercolors with this comprehensive paint set.",
          rating: 4,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","watercolor-paint-set-image-1.jpg", "watercolor-paint-set-image-2.jpg"]
        },
        {
          title: "Philosophy Book",
          price: 120,
          description: "Contemplate life's big questions with this thought-provoking philosophy book.",
          rating: 5,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","philosophy-book-image-1.jpg", "philosophy-book-image-2.jpg"]
        },
        {
          title: "Desk Organizer Set",
          price: 60,
          description: "Keep your workspace tidy with this stylish desk organizer set.",
          rating: 4,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg",]
        },
        {
          title: "Mindfulness Coloring Book for Adults",
          price: 18,
          description: "Relax and unwind with this intricate mindfulness coloring book for adults.",
          rating: 4,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","mindfulness-coloring-book-image-1.jpg", "mindfulness-coloring-book-image-2.jpg"]
        },
        {
          title: "Art History Coffee Table Book",
          price: 220,
          description: "Explore the world of art through the ages with this stunning coffee table book.",
          rating: 5,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","art-history-book-image-1.jpg", "art-history-book-image-2.jpg"]
        },
        {
          title: "Technical Drawing Set",
          price: 80,
          description: "Perfect for architects and engineers, this technical drawing set has all the essentials.",
          rating: 4,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","technical-drawing-set-image-1.jpg", "technical-drawing-set-image-2.jpg"]
        },
        {
          title: "Novelty Bookmarks Set",
          price: 10,
          description: "Add a touch of fun to your reading experience with these novelty bookmarks.",
          rating: 3,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","novelty-bookmarks-image-1.jpg", "novelty-bookmarks-image-2.jpg"]
        },
        {
          title: "Leather-Bound Sketchbook",
          price: 100,
          description: "Unleash your creativity with this high-quality leather-bound sketchbook.",
          rating: 4,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","sketchbook-image-1.jpg", "sketchbook-image-2.jpg"]
        },
        {
          title: "Biography of a Literary Icon",
          price: 160,
          description: "Discover the life and works of a literary icon in this captivating biography.",
          rating: 5,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","biography-book-image-1.jpg", "biography-book-image-2.jpg"]
        },
        {
          title: "Foldable Laptop Stand",
          price: 45,
          description: "Work comfortably with this adjustable and foldable laptop stand.",
          rating: 4,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","laptop-stand-image-1.jpg", "laptop-stand-image-2.jpg"]
        },
        {
          title: "Educational Flashcards Set",
          price: 15,
          description: "Enhance learning with this set of educational flashcards for kids.",
          rating: 4,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","flashcards-image-1.jpg", "flashcards-image-2.jpg"]
        },
        {
          title: "Culinary Arts Cookbook",
          price: 190,
          description: "Embark on a culinary journey with this comprehensive cookbook on the art of cooking.",
          rating: 5,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","cookbook-image-1.jpg", "cookbook-image-2.jpg"]
        },
        {
          title: "Sustainable Bamboo Pen Set",
          price: 25,
          description: "Write sustainably with this eco-friendly bamboo pen set.",
          rating: 4,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","bamboo-pen-set-image-1.jpg", "bamboo-pen-set-image-2.jpg"]
        },
        {
          title: "Mathematics Workbook for Kids",
          price: 20,
          description: "Make learning math fun with this engaging workbook for kids.",
          rating: 4,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","math-workbook-image-1.jpg", "math-workbook-image-2.jpg"]
        },
        {
          title: "Sci-Fi and Fantasy Anthology",
          price: 170,
          description: "Escape to other worlds with this captivating sci-fi and fantasy anthology.",
          rating: 5,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","sci-fi-fantasy-anthology-image-1.jpg", "sci-fi-fantasy-anthology-image-2.jpg"]
        },
        {
          title: "Ergonomic Desk Chair",
          price: 300,
          description: "Upgrade your workspace with this comfortable and ergonomic desk chair.",
          rating: 5,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","desk-chair-image-1.jpg", "desk-chair-image-2.jpg"]
        },
        {
          title: "Classic Literature Collection",
          price: 220,
          description: "Immerse yourself in the timeless classics with this curated literature collection.",
          rating: 4,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","literature-collection-image-1.jpg", "literature-collection-image-2.jpg"]
        },
        {
          title: "Interactive Children's Book",
          price: 35,
          description: "Spark creativity and imagination with this interactive children's book.",
          rating: 4,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","childrens-book-image-1.jpg", "childrens-book-image-2.jpg"]
        },
        {
          title: "Portable Laptop Desk",
          price: 50,
          description: "Work comfortably from anywhere with this portable laptop desk.",
          rating: 4,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","laptop-desk-image-1.jpg", "laptop-desk-image-2.jpg"]
        },
        {
          title: "DIY Craft Kit for Kids",
          price: 18,
          description: "Encourage creativity with this DIY craft kit designed for kids.",
          rating: 4,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","diy-craft-kit-image-1.jpg", "diy-craft-kit-image-2.jpg"]
        },
        {
          title: "Self-Help and Motivation Book",
          price: 130,
          description: "Transform your life with insights from this motivational self-help book.",
          rating: 5,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","self-help-book-image-1.jpg", "self-help-book-image-2.jpg"]
        },
        {
          title: "Wireless Charging Desk Lamp",
          price: 75,
          description: "Illuminate your workspace and charge your devices with this versatile desk lamp.",
          rating: 5,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","charging-lamp-image-1.jpg", "charging-lamp-image-2.jpg"]
        },
        {
          title: "Sudoku Puzzle Book",
          price: 15,
          description: "Challenge your mind with this collection of engaging Sudoku puzzles.",
          rating: 4,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","sudoku-book-image-1.jpg", "sudoku-book-image-2.jpg"]
        },
        {
          title: "Leather Portfolio Organizer",
          price: 90,
          description: "Stay organized and professional with this stylish leather portfolio organizer.",
          rating: 4,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","portfolio-organizer-image-1.jpg", "portfolio-organizer-image-2.jpg"]
        },
        {
          title: "Educational Globe for Kids",
          price: 40,
          description: "Explore the world with this interactive and educational globe designed for kids.",
          rating: 4,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","educational-globe-image-1.jpg", "educational-globe-image-2.jpg"]
        },
        {
          title: "Origami Paper Set",
          price: 12,
          description: "Unleash your creativity with this vibrant set of origami paper.",
          rating: 4,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","origami-paper-set-image-1.jpg", "origami-paper-set-image-2.jpg"]
        },
        {
          title: "Outdoor Reading Hammock",
          price: 120,
          description: "Relax and enjoy your favorite book outdoors with this comfortable reading hammock.",
          rating: 5,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","reading-hammock-image-1.jpg", "reading-hammock-image-2.jpg"]
        },
        {
          title: "Interactive Atlas for Kids",
          price: 30,
          description: "Introduce geography in a fun way with this interactive atlas designed for kids.",
          rating: 4,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","atlas-for-kids-image-1.jpg", "atlas-for-kids-image-2.jpg"]
        },
        {
          title: "Classic Mystery Novel",
          price: 160,
          description: "Solve the mystery with this captivating classic novel in the mystery genre.",
          rating: 5,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","mystery-novel-image-1.jpg", "mystery-novel-image-2.jpg"]
        },
        {
          title: "Adjustable Book Stand",
          price: 25,
          description: "Read comfortably with this adjustable and portable book stand.",
          rating: 4,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","book-stand-image-1.jpg", "book-stand-image-2.jpg"]
        },
        {
          title: "Educational Alphabet Puzzle",
          price: 20,
          description: "Teach the alphabet in a playful way with this educational alphabet puzzle.",
          rating: 4,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","alphabet-puzzle-image-1.jpg", "alphabet-puzzle-image-2.jpg"]
        },
        {
          title: "Classic Poetry Anthology",
          price: 140,
          description: "Immerse yourself in the beauty of classic poetry with this carefully curated anthology.",
          rating: 5,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","classic-poetry-anthology-image-1.jpg", "classic-poetry-anthology-image-2.jpg"]
        },
        {
          title: "Wireless Charging Mouse Pad",
          price: 35,
          description: "Charge your devices while using your computer with this wireless charging mouse pad.",
          rating: 5,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","charging-mouse-pad-image-1.jpg", "charging-mouse-pad-image-2.jpg"]
        },
        {
          title: "Botanical Illustration Book",
          price: 200,
          description: "Explore the world of botanical art with this stunning illustration book.",
          rating: 4,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","botanical-illustration-book-image-1.jpg", "botanical-illustration-book-image-2.jpg"]
        },
        {
          title: "Educational Wooden Puzzle",
          price: 15,
          description: "Enhance cognitive skills with this educational wooden puzzle for kids.",
          rating: 4,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","wooden-puzzle-image-1.jpg", "wooden-puzzle-image-2.jpg"]
        },
        {
          title: "Literary Classics Collection",
          price: 250,
          description: "Build your library with this collection of literary classics from renowned authors.",
          rating: 5,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","literary-classics-collection-image-1.jpg", "literary-classics-collection-image-2.jpg"]
        },
        {
          title: "Ergonomic Wrist Rest Pad",
          price: 20,
          description: "Prevent wrist strain with this ergonomic wrist rest pad for your keyboard and mouse.",
          rating: 4,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","wrist-rest-pad-image-1.jpg", "wrist-rest-pad-image-2.jpg"]
        },
        {
          title: "Dinosaur Coloring Book for Kids",
          price: 10,
          description: "Let kids unleash their creativity with this fun dinosaur-themed coloring book.",
          rating: 4,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","dinosaur-coloring-book-image-1.jpg", "dinosaur-coloring-book-image-2.jpg"]
        },
        {
          title: "Modern Art Coffee Table Book",
          price: 180,
          description: "Adorn your coffee table with this visually stunning book on modern art.",
          rating: 5,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","modern-art-book-image-1.jpg", "modern-art-book-image-2.jpg"]
        },
        {
          title: "Flexible Reading Light",
          price: 30,
          description: "Read comfortably in any environment with this flexible and portable reading light.",
          rating: 4,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","reading-light-image-1.jpg", "reading-light-image-2.jpg"]
        },
        {
          title: "Culinary Arts Magazine Subscription",
          price: 60,
          description: "Stay updated on the latest culinary trends with this magazine subscription.",
          rating: 4,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","culinary-magazine-image-1.jpg", "culinary-magazine-image-2.jpg"]
        },
        {
          title: "Classic Detective Novel",
          price: 150,
          description: "Solve the mystery with this classic detective novel featuring suspense and intrigue.",
          rating: 5,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","detective-novel-image-1.jpg", "detective-novel-image-2.jpg"]
        },
        {
          title: "Eco-Friendly Notebook",
          price: 18,
          description: "Write sustainably with this eco-friendly notebook made from recycled materials.",
          rating: 4,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","eco-friendly-notebook-image-1.jpg", "eco-friendly-notebook-image-2.jpg"]
        },
        {
          title: "Colorful Bookshelf Decor",
          price: 25,
          description: "Add a pop of color to your bookshelf with these decorative bookends.",
          rating: 4,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","bookshelf-decor-image-1.jpg", "bookshelf-decor-image-2.jpg"]
        },
        {
          title: "Language Learning Workbook",
          price: 22,
          description: "Embark on a journey of language learning with this comprehensive workbook.",
          rating: 4,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","language-workbook-image-1.jpg", "language-workbook-image-2.jpg"]
        },
        {
          title: "Vintage Typewriter",
          price: 300,
          description: "Capture the charm of classic writing with this fully functional vintage typewriter.",
          rating: 5,
          category: {
            id: 5,
            name: "Books and Stationery",
            image: "category-imgs/book-img.jpg"
          },
          images: ["sample-imgs/sample-1.jpg","sample-imgs/sample-2.jpg","sample-imgs/sample-3.jpg","vintage-typewriter-image-1.jpg", "vintage-typewriter-image-2.jpg"]
        },    
  ];

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // Swap array[i] and array[j]
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  for(let i=0; i<allProducts.length;i++){
    const newImgArr = shuffleArray(
      allProducts[i].images.filter((image, index)=>{return index===0||index===1||index===2}))
    allProducts[i].images = newImgArr
  }

const elecProducts = allProducts.filter((item)=>{return item.category.name === "Electronics"})
const fashionProducts = allProducts.filter((item)=>{return item.category.id === 2})
const furnitureProducts = allProducts.filter((item)=>{return item.category.name === "Home and Furniture"})
const cosmeticsProducts = allProducts.filter((item)=>{return item.category.name === "Health and Beauty"})
const stationaryProducts = allProducts.filter((item)=>{return item.category.name === "Books and Stationery"})


  export  { allProducts, elecProducts, fashionProducts, furnitureProducts, cosmeticsProducts, stationaryProducts }