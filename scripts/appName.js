const { configuration } = require('./configuration')

const getTrimString = (string) => string.split(' ').join('')
const getLowerCaseString = (string) => string.toLowerCase()
const getLowerCasedUnderscoredString = (string) => getTrimString(getLowerCaseString(string))

const getApplicationName = () => {
  try {
    return configuration.applicationName
  } catch (error) {
    throw new Error(error)
  }
}

const getShortApplicationName = () => {
  try {
    return configuration.shortApplicationName
      ? configuration.shortApplicationName
      : getLowerCasedUnderscoredString(configuration.applicationName)
  } catch (error) {
    throw new Error(error)
  }
}

module.exports.appName = getApplicationName

module.exports.shortName = getShortApplicationName