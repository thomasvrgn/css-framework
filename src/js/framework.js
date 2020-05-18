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
  events: {
    'hv': 'hover',
    'fc': 'focus',
    'xl': 1440,
    'lg': 1280,
    'md': 960,
    'sm': 768,
    'xs': 480 
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

const getClassList     = ()      => [...elements].map(x => x = {name: x, classes: [...x.classList].filter(y => y.startsWith(config.project_name))}).filter(x => x.classes.length > 0)
const getItemByClass   = classes => getClassList().filter(x => x.classes.includes(classes))
const getAllOptions    = ()      => config
const getOption        = item    => getAllOptions()[Object.keys(getAllOptions()).filter(x => x === item)]

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

const createClass = (css)     => style.innerHTML += `${css}\n`
const getClass    = className => style.innerHTML.split(/\r?\n/).slice(4).filter(x => x !== '').filter(x => x.startsWith(`.${className}`))
const getProperty = className => getClass(className)[0].slice(getClass(className)[0].indexOf('{') + 1).split(':')[0]
const getValue    = className => getClass(className)[0].slice(getClass(className)[0].indexOf('{') + 1).split(':')[1].split(';}').join('')

/*/////////////////////////////
         CSS FRAMEWORK
           Formating
/////////////////////////////*/

const format = () => getClassList().map(x => x.classes.map(y => y = {project_name: y.split(':')[0] || null, property: y.split(':')[1].split('=')[0].split(/\((.*)\)/g).pop() || null, value: y.split(':')[1].split('=')[1] || null, event: y.split(':')[1].split('=')[0].match(/\((.*)\)/) !== null ? y.split(':')[1].split('=')[0].match(/\((.*)\)/)[0].split('(').join(' ').split(')').filter(x => x !== '').map(x => x.trim()) : null, full: y}))

/*/////////////////////////////
         CSS FRAMEWORK
            Parsing
/////////////////////////////*/

format().forEach(classList  => {
  classList.forEach(element => {
    if (element.project_name !== config.project_name) return
    console.log(element)
    let valueElements = '%media%%class%%event%{%property%:%value%;}%media end%',
        property      = element.property,
        value         = element.value,
        event         = element.event,
        full          = element.full.replace(/\(/g, '\\(').replace(/\)/g, '\\)').replace(/\=/g, '\\=').replace(/\:/g, '\\:'),
        media         = undefined,
        effect        = undefined

    for (const param in getAllOptions()) {
      if (property === param) {
        for (const item in getOption(param)) {
          if (item === value) {
            value = getOption(param)[item]
          }
        }
      }
    }

    if (getOption('properties')) {
      for (const param in getOption('properties')) {
        if (param === property) {
          property = getOption('properties')[param]
        }
      }
    }

    if (event) {
      if (getOption('events')) {
        for (const param in getOption('events')) {
          for (const item of event) {
            if (item === param) {
              if (!isNaN(getOption('events')[param])) media = `@media(max-width:${getOption('events')[param]}px){`
              else effect = `:${getOption('events')[param]}`
            }
          }
        }
      }
    }

    if (media) valueElements = valueElements.replace('%media%', media).replace('%media end%', '}')
    else valueElements = valueElements.replace(/(%media%|%media end%)/g, '')

    if (effect) valueElements = valueElements.replace('%event%', effect)
    else valueElements = valueElements.replace(/(%event%)/g, '')

    console.log(full)

    console.log(valueElements)
    

  })
})