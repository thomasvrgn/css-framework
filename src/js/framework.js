/*/////////////////////////////
         CSS FRAMEWORK
        Initialisations
/////////////////////////////*/

const config = {
  properties: {},
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
  separator: ':',
  project_name: 'ness',
  colors: {
    'black': '000000',
    'white': 'ffffff',
    'red'  : 'ff0055'
  },
  properties: {
    'bg-color': 'background-color'
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

const createClass = (className, property, value) => style.innerHTML += `.${className}{${property}:${value};}\n`
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
    const finalClass = []
    if (element.project_name === getOption('project_name')) {
      if (element.event !== null) {
        const breakpoints = getOption('breakpoints')
        const events      = getOption('events')
        for (const i in breakpoints) {
          if (element.event === i) {
            console.log('Breakpoint:', breakpoints[i] + 'px')
          }
        }
        for (const i in events) {
          if (element.event === i) {
            console.log('Event:', events[i])
          }
        }
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
        console.log('Property:', class_property)
      }
    }
  })
})