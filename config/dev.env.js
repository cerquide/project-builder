'use strict'
const webpack = require('webpack')
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: 'development',
  BASE_ENDPOINT_URL: 'https://pybossa.citizenscience.ch/',
  BASE_API_URL: 'https://pybossa.citizenscience.ch/api/',
  FLICKR_CALLBACK_URL: 'http://localhost:8080/flickr/callback',
  OPENAPI_URL: "https://api-staging.citizenscience.ch/v3/openapi.json",
  OPENAPI_SERVER: 'https://api-staging.citizenscience.ch/v3/'
})
