const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const fetchPhones = async (brand, url) => {

    try {
        const response = await axios.get(url);

        const html = response.data;

        const $ = cheerio.load(html);

        const phones = [];
        const Brand = {};

        $('div._2kHMtA').each((_idx, el) => {
            const phone = $(el)
            const name = phone.find('div._4rR01T').text()
            const image = phone.find('img._396cs4').attr('src')
            const link = phone.find('a._1fQZEK').attr('href')
            const specification = [];
            phone.find('ul._1xgFaf li.rgWa7D').each((_i, li) => {
                li = $(li).text();
                specification.push(li);
            });
            const price = phone.find('div._30jeq3').text()

            let element = {
                name,
                image,
                link: `https://www.flipkart.com${link}`,
                spec: specification,
                price,
            }
            phones.push(element)
        });
        Brand[brand] = phones;
        return Brand;
    } catch (error) {
        throw error;
    }
};
let url = "https://www.flipkart.com/mobiles/pr?sid=tyy%2C4io&p%5B%5D=facets.brand%255B%255D%3DVivo&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlZJVk8iXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&otracker=clp_metro_expandable_5_3.metroExpandable.METRO_EXPANDABLE_VIVO_mobile-phones-store_3Z3SLACO8AXE_wp2&fm=neo%2Fmerchandising&iid=M_524d082c-1877-4509-b7dd-62c1ce7f7019_3.3Z3SLACO8AXE&ppt=hp&ppn=homepage&ssid=swon45ey3k0000001670554502747";

fetchPhones("vivo", url).then((phones) => {
    phones = JSON.stringify(phones, null, '\t');

    fs.writeFile("Phones.json", phones, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }

        console.log("JSON file has been saved.");
    });
})


// fetchPhones(url).then((phones) => {
//     console.log(phones);
//     let csvContent = phones.map(element => {
//         return Object.values(element).map(item => `"${item}"`).join(',')
//     }).join("\n")

//     fs.writeFile('scraped.csv', "Title, Image, Link, Price, Reviews, Stars" + '\n' + csvContent, 'utf8', function (err) {
//         if (err) {
//             console.log('Some error occurred - file either not saved or corrupted.')
//         } else {
//             console.log('File has been saved!')
//         }
//     })
// });
