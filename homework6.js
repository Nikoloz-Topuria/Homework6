// Function to generate a random integer within a range
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Function to generate a random computer object
  function generateComputer() {
    const processors = [
      { name: 'Intel Core i3', cores: 2 },
      { name: 'Intel Core i5', cores: 4 },
      { name: 'Intel Core i7', cores: 6 },
      { name: 'AMD Ryzen 3', cores: 4 },
      { name: 'AMD Ryzen 5', cores: 6 },
      { name: 'AMD Ryzen 7', cores: 8 }
    ];
  
    const graphicsCards = [
      { name: 'Nvidia GTX 1050', memory: 4 },
      { name: 'Nvidia GTX 1060', memory: 6 },
      { name: 'Nvidia GTX 1070', memory: 8 },
      { name: 'AMD Radeon RX 560', memory: 4 },
      { name: 'AMD Radeon RX 570', memory: 8 },
      { name: 'AMD Radeon RX 580', memory: 8 }
    ];
  
    const storages = [
      { type: 'SSD', size: 256 },
      { type: 'SSD', size: 512 },
      { type: 'HDD', size: 1000 },
      { type: 'HDD', size: 2000 }
    ];
  
    const computer = {
      processor: processors[randomInt(0, processors.length - 1)],
      graphics: graphicsCards[randomInt(0, graphicsCards.length - 1)],
      storage: storages[randomInt(0, storages.length - 1)],
      price: randomInt(800, 2000)
    };
  
    return computer;
  }
  
  // Function to generate an array of random computers
  function generateComputers(num) {
    const computers = [];
    for (let i = 0; i < num; i++) {
      computers.push(generateComputer());
    }
    return computers;
  }
  
  // Function to find the most expensive computer
  function findMostExpensive(computers) {
    return computers.reduce((max, computer) => (computer.price > max.price ? computer : max), computers[0]);
  }
  
  // Function to find the computer with the most processor cores
  function findMostCores(computers) {
    return computers.reduce((max, computer) => (computer.processor.cores > max.processor.cores ? computer : max), computers[0]);
  }
  
  // Function to calculate the average price of assembled computers
  function calculateAveragePrice(computers) {
    const totalPrice = computers.reduce((sum, computer) => sum + computer.price, 0);
    return totalPrice / computers.length;
  }
  
  // Function to filter out computers that cost more than 1600
  function filterByPrice(computers) {
    return computers.filter(computer => computer.price <= 1600);
  }
  
  // Function to find the computer with the most video memory but the fewest processor cores
  function findMostMemoryLeastCores(computers) {
    return computers.reduce((max, computer) => {
      if (computer.graphics.memory > max.graphics.memory && computer.processor.cores < max.processor.cores) {
        return computer;
      } else {
        return max;
      }
    }, computers[0]);
  }
  
  // Function to find the computer with the largest video memory, the most cores, and the largest hard memory
  function findLargestMemoryAndCores(computers) {
    return computers.reduce((max, computer) => {
      if (
        computer.graphics.memory >= max.graphics.memory &&
        computer.processor.cores >= max.processor.cores &&
        computer.storage.size >= max.storage.size
      ) {
        return computer;
      } else {
        return max;
      }
    }, computers[0]);
  }
  
  // Generate an array of 10 random computers
  
  const computers = generateComputers(10);
  
  console.log("Generated computers:", computers);
  
  console.log("Most expensive computer:", findMostExpensive(computers));
  console.log("Computer with most processor cores:", findMostCores(computers));
  console.log("Average price of assembled computers:", calculateAveragePrice(computers));
  console.log("Computers costing less than or equal to 1600:", filterByPrice(computers));
  console.log("Computer with most video memory but fewest processor cores:", findMostMemoryLeastCores(computers));
  console.log("Computer with largest memory, most cores, and largest hard memory:", findLargestMemoryAndCores(computers));
  

