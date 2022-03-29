// Loading the dependencies. We don't need pretty
// because we will not log html to the terminal
const axios = require("axios");
const cheerio = require("cheerio");
// const fs = require("fs");

// URL of the page we want to scrape
// const url = "https://www.amazon.com/gp/product/B00N1YPXW2/?tag=hubacct9792-20&th=1";

// Async function which scrapes the data
async function scrapeData(url) {
  try {
    // Fetch HTML of the page we want to scrape
    const { data } = await axios.get(url);
    // Load HTML we fetched in the previous line
    const $ = cheerio.load(data);
    // Select all the list items in plainlist class
    const listItems = $("div");
    // Stores data for all products
    const products=[];
    // Use .each method to loop through the li we selected
    listItems.each((idx, el) => {
      // Object holding data for product
      const product = {name: "",image:"",price:"", link:""};
      // Select elements and store them in the above object
      product.name = $(el).find('h1 span#productTitle').text();
      product.image = $(el).find('img#landingImage').attr('src');
      product.price = $(el).find('div span.a-offscreen').text();
      product.link = url  
      // Populate products array with product data
      if(product.name && product.image){
      return products.push(product);
      }
    });
    console.dir(products);
    // Write products array in countries.json file
    // fs.writeFile("products.json", JSON.stringify(products, null, 2), (err) => {
    //   if (err) {
    //     console.error(err);
    //     return;
    //   }
    //   console.log("Successfully written data to file");
    // });
  } catch (err) {
    console.error(err);
  }
}

export default scrapeData;