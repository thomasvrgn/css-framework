/*/////////////////////////////
         CSS FRAMEWORK
        Initialisations
/////////////////////////////*/

const properties = {
  'clr': 'color',
  'bg': 'background-color',
  'sz': 'font-size',
  'm': 'margin',
  'p': 'padding'
}

const medias = {
  'xl': 'max-width: 1440px',
  'lg': 'max-width: 1280px',
  'md': 'max-width: 960px',
  'sm': 'max-width: 768px',
  'xm': 'max-width: 480px'
}

const project_name = 'ness'
const separator    = ':'

/*/////////////////////////////
         CSS FRAMEWORK
            Reading     
/////////////////////////////*/

const elements = document.body.querySelectorAll('*')

const getClassList     = () => [...elements].map(x => x = {name: x, classes: [...x.classList].filter(y => y.startsWith(project_name))}).filter(x => x.classes.length > 0)
const getItemByClass   = classes => getClassList().filter(x => x.classes.includes(classes))
