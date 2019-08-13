bootstrap:
	npm install

tests:
	./node_modules/.bin/mocha t/tests.js

all: tests
