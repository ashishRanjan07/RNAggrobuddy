const axios = require('axios');
const cheerio = require('cheerio');

export const scrapeData = async (url) => {
  try {
    
    const $ = cheerio.load(url);

    const rows = [];
    $('#cphBody_GridPriceData tr').each((index, element) => {
      if (index !== 0) {
        const row = {};
        $(element).find('td').each((tdIndex, tdElement) => {
          switch (tdIndex) {
            case 0:
              row.slNo = $(tdElement).text().trim();
              break;
            case 1:
              row.districtName = $(tdElement).text().trim();
              break;
            case 2:
              row.marketName = $(tdElement).text().trim();
              break;
            case 3:
              row.commodity = $(tdElement).text().trim();
              break;
            case 4:
              row.variety = $(tdElement).text().trim();
              break;
            case 5:
              row.grade = $(tdElement).text().trim();
              break;
            case 6:
              row.minPrice = $(tdElement).text().trim();
              break;
            case 7:
              row.maxPrice = $(tdElement).text().trim();
              break;
            case 8:
              row.modalPrice = $(tdElement).text().trim();
              break;
            case 9:
              row.priceDate = $(tdElement).text().trim();
              break;
          }
        });
        rows.push(row);
      }
    });

    return rows;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const url = 'YOUR_GENERATED_URL_HERE';
scrapeData(url).then(data => console.log(data));
