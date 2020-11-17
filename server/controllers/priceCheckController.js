"use strict";
const axios = require("axios");
const cheerio = require("cheerio");

class PriceCheckController {
	static async checkPrice(req, res, next) {
		try {
			let url = null;
			let query = req.query.q.split(" ").join("%20");
			let result = [];
			let $ = null;
			switch (req.params.shop) {
				case "tokopedia":
					url = `https://m.tokopedia.com/search?navsource=home&ob=5&st=product&q=${query}`;
					let { data } = await axios.get(`${url}`);
					$ = await cheerio.load(data);
					$(".css-rhd610").each((i, element) => {
						const $element = $(element);
						const print = $element.text();
						let value = {
							price: print,
						};
						result.push(value);
					});
					if (result[1]) {
						res.status(200).json({ result: result[1].price });
					} else if ([result[0]]) {
						res.status(200).json({ result: result[0].price });
					} else {
						res.status(200).json({ result: "Not Available" });
					}
					break;
				case "bukalapak":
					url = `https://m.bukalapak.com/products?search%5Bkeywords%5D=${query}&search%5Bsort_by%5D=weekly_sales_ratio%3Adesc`;
					let { data: dataBukalpak } = await axios.get(`${url}`);
					$ = await cheerio.load(dataBukalpak);
					$(".dp-card__description").each((i, element) => {
						const $element = $(element);
						const $price = $element.find(".dp-card__price");
						let valuePrice = $price.text();
						let joinValue = valuePrice.split("jt").join("");
						let datas = joinValue.trim();
						if (datas.match(/,/)) {
							datas += "00,000";
						} else {
							datas += ",000,000";
						}
						result.push(datas);
					});
					res.status(200).json({ result: result[2] });
					break;
				default:
					next({ name: "BadRequest", message: "Invalid Request" });
					break;
			}
		} catch (err) {
			next(err);
		}
	}
}

module.exports = PriceCheckController;
