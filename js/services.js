
const vehicles = [
    
    { type: "Economy", model: "Toyota Starlet", price: 350, period: "day" },
    { type: "Economy", model: "Suzuki Swift", price: 300, period: "day" },
    { type: "Economy", model: "Hyundai Grand i10", price: 320, period: "day" },
    { type: "Economy", model: "Kia Picanto", price: 300, period: "day" },
    { type: "Economy", model: "Renault Kwid", price: 280, period: "day" },

    // 
    { type: "Sedan", model: "Toyota Corolla", price: 500, period: "day" },
    { type: "Sedan", model: "Volkswagen Polo Sedan", price: 450, period: "day" },
    { type: "Sedan", model: "Honda Civic", price: 600, period: "day" },
    { type: "Sedan", model: "Hyundai Elantra", price: 550, period: "day" },
    { type: "Sedan", model: "BMW 5 Series", price: 1200, period: "day" },

    { type: "SUV", model: "Toyota Fortuner", price: 750, period: "day" },
    { type: "SUV", model: "Hyundai Tucson", price: 700, period: "day" },
    { type: "SUV", model: "Volkswagen Tiguan", price: 850, period: "day" },
    { type: "SUV", model: "Toyota RAV4", price: 800, period: "day" },
    { type: "SUV", model: "Ford Everest", price: 1000, period: "day" },

    { type: "Luxury", model: "BMW 3 Series", price: 1500, period: "day" },
    { type: "Luxury", model: "Mercedes-Benz C-Class", price: 1400, period: "day" },
    { type: "Luxury", model: "Audi A4", price: 1350, period: "day" },
    { type: "Luxury", model: "BMW X5", price: 2000, period: "day" },
    { type: "Luxury", model: "Mercedes-Benz E-Class", price: 1800, period: "day" },

    { type: "Long-Term", model: "Toyota Corolla Monthly Rental", price: 8000, period: "month" },
    { type: "Long-Term", model: "Monthly SUV Rental", price: 12000, period: "month" },
    { type: "Long-Term", model: "Monthly Sedan Rental", price: 9000, period: "month" },
    { type: "Long-Term", model: "Monthly Economy Rental", price: 6000, period: "month" },
    { type: "Long-Term", model: "Monthly Luxury Rental", price: 18000, period: "month" }
];

const vehicleList = document.getElementById("vehicle-list");
const search = document.getElementById("search");
const category = document.getElementById("category");
const sort = document.getElementById("sort");

function displayVehicles() {
    vehicleList.innerHTML = "";

    let results = vehicles.filter(function(vehicle) {
        return vehicle.model.toLowerCase().includes(search.value.toLowerCase()) ||
               vehicle.type.toLowerCase().includes(search.value.toLowerCase());
    });

    if (category.value !== "all") {
        results = results.filter(function(vehicle) {
            return vehicle.type === category.value;
        });
    }

    if (sort.value === "low") {
        results.sort(function(a, b) {
            return a.price - b.price;
        });
    } else if (sort.value === "high") {
        results.sort(function(a, b) {
            return b.price - a.price;
        });
    }

    if (results.length === 0) {
        vehicleList.textContent = "No vehicles found.";
        return;
    }

    results.forEach(function(vehicle) {
        const item = document.createElement("div");

        const title = document.createElement("h3");
        title.textContent = vehicle.model;

        const type = document.createElement("p");
        type.textContent = "Category: " + vehicle.type;

        const price = document.createElement("p");
        price.textContent = "Estimated price: R" +
            vehicle.price.toLocaleString("en-ZA") +
            " per " + vehicle.period;

        item.appendChild(title);
        item.appendChild(type);
        item.appendChild(price);

        vehicleList.appendChild(item);
    });
}

search.addEventListener("input", displayVehicles);
category.addEventListener("change", displayVehicles);
sort.addEventListener("change", displayVehicles);

displayVehicles();
