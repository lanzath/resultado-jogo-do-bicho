import axios from 'axios';
import * as cheerio from 'cheerio';

export default function handler(req, res) {
  axios
    .get('https://portalbrasil.net/jogodobicho/resultado-do-jogo-do-bicho/')
    .then(response => response.data)
    .then((data) => {
      const $ = cheerio.load(data);

      const results = {};

      // Extract data for each specified time
      const timeSlots = ['09 horas', '11 horas', '14 horas', '16 horas', '18 horas', '21 horas'];

      timeSlots.forEach((timeSlot) => {
        const header = $(`h3:contains(${timeSlot})`);
        const resultParagraph = header.next('p');

        if (resultParagraph.length) {
          const timeResults = [];
          const resultHtml = resultParagraph.html().trim();

          // Use Cheerio to parse the HTML content
          const $results = cheerio.load(resultHtml);

          // Extract each result line
          $results('br').replaceWith('\n');
          const resultText = $results.text();
          const lines = resultText
            .split('\n')
            .filter((line) => line.trim().length > 0);

          lines.forEach((line) => {
            const match = line.match(
              /(\d+º ► \d{3,4}-\d{2} — .+?)(?=\d+º|$)/g
            );
            if (match) {
              timeResults.push(match[0].trim());
            }
          });

          results[`${timeSlot.slice(0, 2)}hResult`] = timeResults;
        }
      });

      res.status(200).json(results);
    })
    .catch(err => {
      res.status(500).json(err);
    });
}