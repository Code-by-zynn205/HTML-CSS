const menuData = require("./src/data/menuData.json");
const stepData = require("./src/data/stepData.json");
const servicesData = require("./src/data/servicesData.json");
const blogData = require("./src/data/blogData.json"); // Thêm tệp blogData.json
const testimonialsData= require("./src/data/testimonials.json")

console.log("Loaded menuData:", menuData);
console.log("Loaded stepData:", stepData);
console.log("Loaded servicesData:", servicesData);
console.log("Loaded blogData:", blogData);

module.exports = {
  plugins: {
    "posthtml-include": {
      root: "./src"
    },
    "posthtml-expressions": {
      locals: {
        menu: menuData,
        step: stepData,
        services: servicesData.services,
        posts: blogData,
        testimonials:testimonialsData
      }
    },
    "posthtml-each": {}
  }
};