FROM node:14-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY server/package*.json /usr/src/app/server/
COPY server/ /usr/src/app/server/

WORKDIR /usr/src/app/server/
RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080

ENTRYPOINT ["node", "app.js"]
