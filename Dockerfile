FROM node:alpine

WORKDIR /usr/expressapp

COPY ./ ./

RUN npm install

CMD ["npm","start"]


# We can improve the performance by copying only package.json file at the first and after npm install we can copy all other files
# so that build will be stored in the cache memory.