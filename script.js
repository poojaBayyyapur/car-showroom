
const cars = [
    {
        name: "Maruti Swift",
        brand: "Maruti Suzuki",
        price: 6.5,
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=700",
        features: ["Petrol engine", "Manual and AMT options", "Touchscreen infotainment", "Airbags and ABS"]
    },
    {
        name: "Tata Punch",
        brand: "Tata",
        price: 7.2,
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=700",
        features: ["Petrol engine", "Manual and AMT options", "Touchscreen infotainment", "Safety-focused design"]
    },
    {
        name: "Hyundai Exter",
        brand: "Hyundai",
        price: 7.5,
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=700",
        features: ["Petrol engine", "Sunroof on selected variants", "Digital instrument cluster", "Multiple airbags"]
    },
    {
        name: "Tata Nexon",
        brand: "Tata",
        price: 9.0,
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=700",
        features: ["Petrol and diesel options", "Touchscreen infotainment", "Automatic options", "Safety features"]
    },
    {
        name: "Hyundai Creta",
        brand: "Hyundai",
        price: 12.0,
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=700",
        features: ["Petrol and diesel options", "Panoramic sunroof on selected variants", "Connected car technology", "Advanced safety features"]
    },
    {
        name: "Kia Seltos",
        brand: "Kia",
        price: 12.5,
        image: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=700",
        features: ["Petrol and diesel options", "Large touchscreen displays", "Ventilated seats on selected variants", "Driver assistance features"]
    },
    {
        name: "Honda City",
        brand: "Honda",
        price: 13.0,
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=700",
        features: ["Petrol engine", "CVT automatic option", "Premium cabin", "Honda Sensing on selected variants"]
    },
    {
        name: "Toyota Innova Hycross",
        brand: "Toyota",
        price: 19.0,
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=700",
        features: ["Petrol and hybrid options", "Spacious three-row seating", "Automatic transmission", "Toyota safety technology"]
    },
    {
        name: "Jeep Meridian",
        brand: "Jeep",
        price: 24.0,
        image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=700",
        features: ["Diesel engine", "Seven-seat configuration", "Automatic transmission options", "Advanced driving features"]
    },
    {
        name: "Toyota Fortuner",
        brand: "Toyota",
        price: 35.0,
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=700",
        features: ["Petrol and diesel options", "Powerful SUV performance", "Automatic transmission options", "Four-wheel drive on selected variants"]
    },
    {
        name: "BMW 3 Series",
        brand: "BMW",
        price: 75.0,
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=700",
        features: ["Premium performance engine", "Luxury interior", "Digital infotainment", "Advanced driver assistance"]
    },
    {
        name: "Mercedes-Benz C-Class",
        brand: "Mercedes-Benz",
        price: 65.0,
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=700",
        features: ["Premium engine options", "Luxury cabin", "MBUX infotainment system", "Advanced safety technology"]
    },
    {
        name: "Audi Q5",
        brand: "Audi",
        price: 65.0,
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=700",
        features: ["Turbocharged engine", "Quattro technology", "Premium interior", "Virtual cockpit"]
    },
    {
        name: "Range Rover",
        brand: "Land Rover",
        price: 250.0,
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=700",
        features: ["Luxury SUV design", "Premium leather interior", "Advanced terrain technology", "Luxury passenger comfort"]
    },
    {
        name: "Porsche 911",
        brand: "Porsche",
        price: 200.0,
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=700",
        features: ["High-performance sports engine", "Sports car handling", "Premium sports interior", "Advanced driving technology"]
    }
];


// Display all cars
function displayCars(carList) {
    const carGrid = document.getElementById("carGrid");

    carGrid.innerHTML = carList.map((car, index) => `
        <div class="car-card" onclick="showCarDetails('${car.name}')">
            <img src="${car.image}" alt="${car.name}">
            <h3>${car.name}</h3>
            <p>${car.brand}</p>
            <p>₹${car.price} Lakh onwards</p>
            <small>View Features →</small>
        </div>
    `).join("");
}


// Sort cars by price
function sortCars(order) {
    let sortedCars = [...cars];

    if (order === "low") {
        sortedCars.sort((a, b) => a.price - b.price);
    } else {
        sortedCars.sort((a, b) => b.price - a.price);
    }

    displayCars(sortedCars);
}


// Show selected car details
function showCarDetails(carName) {
    const car = cars.find(item => item.name === carName);

    if (!car) return;

    document.getElementById("modalImage").src = car.image;
    document.getElementById("modalName").textContent = car.name;
    document.getElementById("modalBrand").textContent = car.brand;

    document.getElementById("modalPrice").textContent =
        "₹" + car.price + " Lakh onwards";

    const featureList = document.getElementById("modalFeatures");

    featureList.innerHTML = car.features
        .map(feature => `<li>${feature}</li>`)
        .join("");

    document.getElementById("carModal").style.display = "flex";
}


// Close car details popup
function closeCarDetails() {
    document.getElementById("carModal").style.display = "none";
}


// Close popup when clicking outside
document.getElementById("carModal").addEventListener("click", function(event) {
    if (event.target === this) {
        closeCarDetails();
    }
});


// Display cars when website opens
displayCars(cars);
