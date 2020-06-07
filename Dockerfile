from node:10

workdir /usr/src/app

copy package.json ./

run npm install

copy . .

