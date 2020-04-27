# CSS FRAMEWORK

This is a simple framework written in pure Javascript.

```js
const config  = {
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
	color: {
		'black': '#000000',
		'white': '#ffffff',
		'red' : '#ff0055'
	},
	properties: {
		'bg-color': 'background-color'
	},
	global: {
		'red' : '#ff6055'
	}
}
```
> This is a simple configuration example.
> Here you have many properties like unity, breakpoints, events, separator, project name, properties and global.

## Unity
You can set custom units for you HTML classes.

## Breakpoints
You can set custom breakpoints for responsive code.

## Events
This is the events section, there is events like hover, focus, visible shortcuts.

## Separator
The separator option allows you to split the project name and the properties by a character.

## Project name
Project name is a string that let you set your own CSS framework name. 
You can use in HTML like that :
```html
<h1 class="example:color=red">
	hi
</h1>
```

## Properties

Properties section let you add custom framework properties.

## Global

Global section contains global values which will be changed on parsing.