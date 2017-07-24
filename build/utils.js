var path = require('path')
var config = require('../config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var existsSync = require('fs').existsSync

exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

/**
 * Generate loaders for standalone style files
 * @param {Object} options - options
 * @param {Boolean} options.sourceMap - sourceMap
 * @param {Boolean} options.extract - extract
 * */
exports.styleLoaders = function (options) {
  let output = []
  let theme = getTheme()

  options = options || {}

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader = null, loaderOptions = {}, module = false) {

    var cssLoader = {
      loader: 'css-loader',
      options: {
        minimize: process.env.NODE_ENV === 'production',
        sourceMap: options.sourceMap,
        modules: !!module
      }
    }

    var loaders = [cssLoader]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'style-loader'
      })
    } else {
      return ['style-loader'].concat(loaders)
    }
  }

  const GenerateLoadersOptions = [
    {
      extension: 'css',
      loader: '',
      loaderOptions: {}
    },
    {
      extension: 'postcss',
      loader: '',
      loaderOptions: {}
    },
    {
      extension: 'less',
      loader: 'less',
      loaderOptions: {modifyVars: theme}
    },
    {
      extension: 'sass',
      loader: 'sass',
      loaderOptions: {indentedSyntax: true}
    },
    {
      extension: 'scss',
      loader: 'sass',
      loaderOptions: {}
    },
    {
      extension: 'stylus',
      loader: 'stylus',
      loaderOptions: {}
    },
    {
      extension: 'styl',
      loader: 'stylus',
      loaderOptions: {}
    }
  ]

  GenerateLoadersOptions.forEach((each) => {
    // normal style
    output.push({
      test (filePath) {
        let reg1 = new RegExp('\\.' + each.extension + '$')
        let reg2 = new RegExp('\\.module\\.' + each.extension + '$')
        return reg1.test(filePath) && !reg2.test(filePath)
      },
      use: generateLoaders(each.loader, each.loaderOptions, false)
    })
    // cssModule like file for 'xx.module.css'
    output.push({
      test (filePath) {
        let reg2 = new RegExp('\\.module\\.' + each.extension + '$')
        return reg2.test(filePath)
      },
      use: generateLoaders(each.loader, each.loaderOptions, true)
    })
  })

  return output
}

/**
 * get theme from package.json
 * @return {Object} theme
 * */
function getTheme () {
  const pkgPath = path.join(__dirname, '..', 'package.json')
  const pkg = existsSync(pkgPath) ? require(pkgPath) : {}
  let theme = {}
  if (pkg.theme) {
    // for the type of './theme.js'
    if (isString(pkg.theme)) {
      let cfgPath = pkg.theme
      // relative path
      if (cfgPath.charAt(0) === '.') {
        cfgPath = path.join(__dirname, '..', cfgPath)
      }

      try{
        const getThemeConfig = require(cfgPath)

        if (getThemeConfig) {
          if (isObject(getThemeConfig)) {
            theme = getThemeConfig
          }
          if (isFunction(getThemeConfig)) {
            theme = getThemeConfig() || {}
          }
        }
      }catch (err){
        console.error(`${err.message} with input position of '${pkg.theme}' at 'package.json' file.`)
      }
    }
    // for the type of '{"primary-color":"#1DA57A"}'
    if (isObject(pkg.theme)) {
      theme = pkg.theme
    }
  }

  return theme
}

function isString (val) {
  return typeof val === 'string'
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isFunction (val) {
  return typeof val === 'function'
}
