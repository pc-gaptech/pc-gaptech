require("colors");
const request = require("request");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");
const axios = require("axios");

// let url =
//   "https://www.bukalapak.com/products?from=omnisearch&from_keyword_history=false&search%5Bkeywords%5D=amd&search_source=omnisearch_keyword&source=navbar";

let data = "celana dalam raider";
let query = data.split(" ").join("%20");
console.log(query);
// fractal design meshify c

let url = `https://m.tokopedia.com/search?navsource=home&ob=5&st=product&q=${query}`;

async function main() {
  let { data } = await axios.get(`${url}`);
  let $ = await cheerio.load(data);
  let price = $(".css-rhd610");
  let result = [];
  $(".css-rhd610").each((i, element) => {
    const $element = $(element);
    const print = $element.text();
    // console.log(JSON.parse($element.text()));
    let value = {
      price: print,
    };
    result.push(value);
    // console.log(value);
  });
  console.log(result[1]);
  // console.log(JSON.stringify(price));
  //   console.log(price);
  //   process.stdout.write(price);
  //   console.log(data);
}
main();

// const pup = async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto(
//     "https://www.bukalapak.com/products?from=omnisearch&from_keyword_history=false&search%5Bkeywords%5D=amd&search_source=omnisearch_keyword&source=navbar",
//     { waitUntil: "networkidle2" }
//   );
//   let $ = await cheerio.load(body);
//   await process.stdout.write(body);
//   await page.pdf({ path: "hn.pdf", format: "A4" });

//   await browser.close();
// };
// pup();

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto(
//     "https://www.bukalapak.com/products?from=omnisearch&from_keyword_history=false&search%5Bkeywords%5D=amd&search_source=omnisearch_keyword&source=navbar"
//   );
//   let $ = await cheerio.load(body);
//   await process.stdout.write(body);
//   await page.screenshot({ path: "example.png" });
//   await browser.close();
// })();

// request(url, function (err, res, body) {
//   if (err && res.statusCode !== 200) throw err;

//   let $ = cheerio.load(body);
//   process.stdout.write(body);
//   //   console.log(body);
//   //   $("table.table_adzan tr[align=center]").each((i, value) => {
//   //     $(value)
//   //       .find("td")
//   //       .each((j, data) => {
//   //         if ($(value).attr("class") === "table_highlight")
//   //           return process.stdout.write($(data).text().red + "\t");
//   //         return process.stdout.write($(data).text() + "\t");
//   //       });
//   //     process.stdout.write("\n");
//   //   });
// });
