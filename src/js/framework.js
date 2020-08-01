/*/////////////////////////////
         CSS FRAMEWORK
        Initialisations
/////////////////////////////*/

const classCss = 'bg-pink-100'
const classCssSplitted = classCss.split(/-/g)

const property = classCssSplitted[0]
const value = classCssSplitted[1]
const modifier = classCssSplitted[2]

import('./components/' + property + '.js')
  .then(function (content) {
    content.default.exec({
      property: property,
      value: value,
      modifier: parseInt(modifier)
    })
  })
  .catch(function (error) {
    console.log(error)
  })