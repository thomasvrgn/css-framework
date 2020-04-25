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

/*/////////////////////////////
         CSS FRAMEWORK
            Reading     
/////////////////////////////*/

const elements = document.body.querySelectorAll('*')

const getClassList = () => {
  return [...elements].map(x => x = {name: x, classes: x.classList})
}
