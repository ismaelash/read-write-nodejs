const fs = require("fs/promises");
const products_console = require("./console.json");
const all_products = require("./all_products.json");

let products_not_console = [];

async function writeFile(content) {
  try {
    await fs.writeFile("./products_not_console.json", content);
  } catch (err) {
    console.log(err);
  }
}


function main() {
  all_products.forEach((product) => {
    let result = products_console.find(
      (productConsole) => product.sku === productConsole.sku
    );

    if (result === undefined || result === null) {
      products_not_console.push(product);
    }
  });

  console.log(products_not_console.length);
  writeFile(JSON.stringify(products_not_console));
}

main();

