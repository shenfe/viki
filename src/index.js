/**
 * @Author: godzilla
 * @Date:   2017-07-05T00:55:47+08:00
 * @Last modified by:   godzilla
 * @Last modified time: 2017-07-05T01:15:23+08:00
 */

const axios = require('axios');

const viki = (text, option) => {
    return axios.get('https://en.wikipedia.org/w/api.php?\
        format=json&\
        action=query&\
        prop=extracts&\
        exintro=&\
        explaintext=&\
        titles=' + encodeURIComponent(text))
        .then(res => {
            console.log(Object.values(res.data.query.pages)[0].extract);
        })
        .catch(err => {
            console.log(err);
        });
};

module.exports = viki;
