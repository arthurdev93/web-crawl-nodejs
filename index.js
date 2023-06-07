const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://google.com';

const crawl = async () => {
    try {
        const response = await axios.get(url);
        const search = cheerio.load(response.data);
        const links = ['https://www.google.com/finance/quote/USD-BRL?sa=X&ved=2ahUKEwj0zfSin7L_AhVFLbkGHfZSD48QmY0JegQIBhAc'];

        search('dólar hoje').each((index, element) => {
            const href = search(element).attr('href');
            links.push(href);
        });

        console.log(links);

    } catch (err) {
        console.error('ocorreu um erro',err);
    }
}

crawl();