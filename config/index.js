require('dotenv').config()

module.exports = {
    port: process.env.PORT || 5000,
    mcApiKey: process.env.MAILCHIMP_API_KEY
}