const cron = require('node-cron');
const https = require( 'https')
// const http = require( 'http')

// * http for check in development

// * we want do it after 14 mins because at 15 mins server will auto sleep on render free
const job = cron.schedule('*/14 * * * *', function () {
 console.log('RESTARTING SERVER')
  https
    .get(`https://natours-twq3.onrender.com`, (res) => {
      if (res.statusCode === 200)  console.log('SERVER RESTARTED')
      else console.error(`FAILED TO RESTART SERVER WITH STATUS CODE: ${res.statusCode}`)
    })
    .on('error', (err) => {
      console.error('ERROR DURING RESTART PROCESS', err.message)
    })
})

module.exports = job
