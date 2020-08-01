import colors from '../config/colors/colors.js'
import types from '../config/bg/types.js'

export default class Background {

  static exec (options = {
    property: 'bg',
    value: 'pink',
    modifier: 100
  }) {
    
    for (const type in types) {
      for (const value of types[type]) {
        if (options.value === value) {
          switch (type) {
            case 'colors': {
              console.log(colors)
              break
            }
          }
          return
        }
      }
    }
    
  }

}