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

class Class {

  static element = {}

  static getAllElements (root = document.body) {
    
    return root.querySelectorAll('*')

  }

  static setAttribute (element = document.body.querySelectorAll('*')) {
    [...element].map(x => x.setAttribute('fw-' + ([...Array.from(x.classList).join('')].map(x => x.charCodeAt()).reduce((acc, cur) => acc + cur)<< 19 ).toString(36), ''))
  }

  static createClass (content = '.error{color: red;}') {

  }

}

class VM extends Class{

  static async render (element) {

    this.setAttribute()

  }

}

class Framework extends VM {

  static init (options = {
    unity: Object,
    events: Object,
    project_name: String,
    color: Object,
    properties: Object,
    global: Object
  }) {

    this.render()

  }

}

Framework.init(config)