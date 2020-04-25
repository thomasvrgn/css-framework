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

const project_name = 'ness'

/*/////////////////////////////
         CSS FRAMEWORK
            Reading     
/////////////////////////////*/

const elements = document.body.querySelectorAll('*')

const getClassList = () => [...elements].map(x => x = {name: x, classes: [...x.classList].filter(y => y.startsWith(project_name))}).filter(x => x.classes.length > 0)

console.log(getClassList())