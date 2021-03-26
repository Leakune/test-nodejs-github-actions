## install ESlint
npx eslint --init

## Apply change in files js with ESlint
npx eslint *.js

## install pretier
npm install --save-dev prettier

## select files to be monitored by pretier, then show the changes. 
npx prettier <file>.js | diff <file>.js -

## Apply the reshape of the files js with pretier
npx prettier --write *.js

## install eslint-config-prettier to use both ESlint and pretier
npm install --save-dev eslint-config-prettier
`then you add "pretier" in "extends" array in es.lintrc.js`


## install typescript
npm install --save-dev typescript
$(npm bin)/tsc --init

