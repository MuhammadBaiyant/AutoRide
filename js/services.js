
const vehicles = [
    {
        type: "Economy",
        model: "Toyota Starlet",
        price: 350,
        period: "day"
    },
    {
        type: "Sedan",
        model: "Toyota Corolla",
        price: 500,
        period: "day"
    },
    {
        type: "SUV",
        model: "Toyota Fortuner",
        price: 750,
        period: "day"
    },
    {
        type: "Luxury",
        model: "BMW 3 Series",
        price: 1500,
        period: "day"
    },
    {
        type: "Long-Term",
        model: "Long-Term Rental",
        price: 8000,
        period: "month"
    }
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
