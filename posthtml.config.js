const menuData = require("./src/data/menuData.json"); // Thêm .json vào đường dẫn

module.exports = {
  plugins: {
    "posthtml-include": {
      root: "./src"
    },
    "posthtml-expressions": {
      locals: menuData // Sử dụng dữ liệu từ JSON
    }
  }
};
