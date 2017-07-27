var express = require('express')
var router = express.Router()
var Mock = require('mockjs')
var cors = require('cors')

// 应用配置
var config = require('../../src/config')
const {apiPrefix} = config
const {dashboard} = config.subUrl

router.use('*', cors(), function (req, res, next) {
  next()
})

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(config)
  res.render('index', {title: 'Express(MockServer)'})
})
router.get(`${apiPrefix}`, function (req, res, next) {
  res.render('index', {title: 'Mock Server'})
})
const color = {
  green: '#64ea91',
  blue: '#8fc9fb',
  purple: '#d897eb',
  red: '#f69899',
  yellow: '#f8c82e',
  peach: '#f797d6',
  borderBase: '#e5e5e5',
  borderSplit: '#f4f4f4',
  grass: '#d6fbb5',
  sky: '#c1e0fc'
}

// dashboard
router.get(`${apiPrefix}${dashboard}`, function (req, res, next) {
  res.json(Mock.mock({
    summary: {
      newItems: {
        'total|200-500': 1,
        'data|30': [{
          'time|+1': 0,
          'count|200-500': 1
        }]
      },
      'upLoads|200-500': 1,
      'comments|200-500': 1,
      'feeds|200-500': 1,
      'revenue': {
        'total|1200-15000': 1,
        'percent|1-100': 1,
        'data|30': [{
          'time|+1': 0,
          'count|1200-15000': 1
        }]
      }
    },
    'latestCampaign|11': [
      {
        'year|+1': new Date().getFullYear() - 9,
        'ACME|14-20': 1,
        'Compitor|2-20': 1
      }
    ]
  }))
})

module.exports = router
