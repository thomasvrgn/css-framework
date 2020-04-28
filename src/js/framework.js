/*/////////////////////////////
         CSS FRAMEWORK
        Initialisations
/////////////////////////////*/

const config = {
  unity: {
    'pc': '%',
    'px': 'px',
    'rm': 'rem'
  },
  breakpoints: {
    'xl': 1440,
    'lg': 1280,
    'md': 960,
    'sm': 768,
    'xs': 480 
  },
  events: {
    'hv': 'hover',
    'fc': 'focus'
  },
  project_name: 'ness',
  color: {
    'black': '#000000',
    'white': '#ffffff',
    'red'  : '#ff0055'
  },
  properties: {
    'bg-color': 'background-color'
  },
  global: {
    'red'  : '#ff6055'
  }
}

/*/////////////////////////////
         CSS FRAMEWORK
            Reading     
/////////////////////////////*/

const elements         = document.body.querySelectorAll('*')

const getClassList     = () => [...elements].map(x => x = {name: x, classes: [...x.classList].filter(y => y.startsWith(config.project_name))}).filter(x => x.classes.length > 0)
const getItemByClass   = classes => getClassList().filter(x => x.classes.includes(classes))
const getAllOptions    = () => config
const getOption        = item => getAllOptions()[Object.keys(getAllOptions()).filter(x => x === item)]

/*/////////////////////////////
         CSS FRAMEWORK
             Style
/////////////////////////////*/

let style = document.createElement('style')
document.head.appendChild(style)
style.innerHTML += '/*/////////////////////////////\n         CSS FRAMEWORK\n              CSS\n/////////////////////////////*/\n\n'

/*/////////////////////////////
         CSS FRAMEWORK
            Classes
/////////////////////////////*/

const createClass = (css) => style.innerHTML += `${css}\n`
const getClass    = className => style.innerHTML.split(/\r?\n/).slice(4).filter(x => x !== '').filter(x => x.startsWith(`.${className}`))
const getProperty = className => getClass(className)[0].slice(getClass(className)[0].indexOf('{') + 1).split(':')[0]
const getValue    = className => getClass(className)[0].slice(getClass(className)[0].indexOf('{') + 1).split(':')[1].split(';}').join('')

/*/////////////////////////////
         CSS FRAMEWORK
           Formating
/////////////////////////////*/

const format = () => getClassList().map(x => x.classes.map(y => y = {project_name: y.split(':')[0] || null, property: y.split(':')[1].split('=')[0].split(/\((.*)\)/g).pop() || null, value: y.split(':')[1].split('=')[1] || null, event: y.split(':')[1].split('=')[0].match(/\((.*)\)/) !== null ? y.split(':')[1].split('=')[0].match(/\((.*)\)/)[0].split('(').join('').split(')').join('') : null}))

/*/////////////////////////////
         CSS FRAMEWORK
            Parsing
/////////////////////////////*/

format().forEach(classList => {
  classList.forEach(element => {
    let valueElements = []
    let classElement = []
    if (element.project_name === getOption('project_name')) {
      if (element.event !== null) {
        const breakpoints = getOption('breakpoints')
        const events      = getOption('events')
        for (const i in breakpoints) {
          if (element.event === i) {
            valueElements.push(`@media screen and (max-width: ${breakpoints[i]}px) { .${element.project_name}\\:\\(${element.event}\\)${element.property}\\=${element.value} {`, '', '} }')
          }
        }
        for (const i in events) {
          if (element.event === i) {
            valueElements.push(`.${element.project_name}\\:\\(${element.event}\\)${element.property}\\=${element.value}:${events[i]} {`, '', '}')
          }
        }
      } else {
        valueElements.push(`.${element.project_name}\\:${element.property}\\=${element.value} {`, '', '}')
      }

      if (element.property !== null) {
        const properties        = getOption('properties')
        const properties_length = Object.keys(properties).length
        let   counter           = 0
        let   class_property    = ''
        for (const i in properties) {
          if (i !== element.property) {
            ++counter
            if (counter === properties_length) {
              class_property = element.property
            }
          } else {
            class_property = properties[i]
          }
        }
        classElement.push(class_property)
        if (element.value !== null) {
          const global_options = getOption('global')
          let value = element.value
          let global = false
          for (const i in global_options) {
            if (element.value === i) {
              value = global_options[i]
              global = true
            }
          }
          if (getOption(class_property)) {
            const property_options = getOption(class_property) 
            for (const i in property_options) {
              if (element.value === i) {
                if (global) {
                  global = false
                }
                value = property_options[i]
              }
            }
          }
          if (valueElements[1] !== undefined) {
            valueElements[1] = `${classElement[0]}:${value};`
          }
          createClass(valueElements.join(''))
        }
      }
    }
  })
})