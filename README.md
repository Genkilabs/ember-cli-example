# Ember-cli-example

The goal of this project is to provide a working example of combining:
* ember-cli
* ember-data
* ember-cli-cordova
* ember-sync
* ember-indexeddb-adapter
* ember-localstorage-adapter
* ember-list-view

Some day...
* ember-data -> epf
* make a tutorial or blog

## To test adapters...

Uncomment different sections of `app/adapters/application.js` and `app/serializers/application.js` to switch between REST, IndexedDB and Local Storage.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)

You will also need to provide a working backend with a route
* http://localhost:3000/agents

This need to provide a JSON data set of the format
```
{
	"agents": [
		{
			"id": 1,
			"first_name": "John",
			"last_name": "Johnson"
		},
		{
			"id": 2,
			"first_name": "Mike",
			"last_name": "Smith"
		}
	]
}
```

Build for Cordova following the instructions at
* [https://github.com/poetic/ember-cli-cordova](https://github.com/poetic/ember-cli-cordova)
* Set your backend host with ENV.serverHost in the config/environment.js file

----------------


## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at http://localhost:4200.

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* ember: http://emberjs.com/
* ember-cli: http://www.ember-cli.com/
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

