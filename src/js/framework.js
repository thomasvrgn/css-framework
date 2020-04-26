/*/////////////////////////////
         CSS FRAMEWORK
        Initialisations
/////////////////////////////*/

const config = {
  properties: {},
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

const elements = document.body.querySelectorAll('*')

const getClassList     = () => [...elements].map(x => x = {name: x, classes: [...x.classList].filter(y => y.startsWith(project_name))}).filter(x => x.classes.length > 0)
const getItemByClass   = classes => getClassList().filter(x => x.classes.includes(classes))
const getAllOptions    = () => config
const getOption        = item => getAllOptions()[Object.keys(getAllOptions()).filter(x => x === item)]
