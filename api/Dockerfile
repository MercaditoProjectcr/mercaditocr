#  Dockerfile for Node Express Backend api (development)

FROM node:10.16-alpine

# Create App Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install Dependencies
COPY package*.json ./

RUN yarn install

# Copy app source code
COPY . .

# Exports
EXPOSE 5000

CMD ["yarn", "start"]
