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
  }
}

/*/////////////////////////////
         CSS FRAMEWORK
            Reading     
/////////////////////////////*/

const elements         = document.body.querySelectorAll('*')

const getClassList     = () => [...elements].map(x => x = {name: x, classes: [...x.classList].filter(y => y.startsWith(project_name))}).filter(x => x.classes.length > 0)
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