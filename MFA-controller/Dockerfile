FROM registry.redhat.io/ubi8/nodejs-12 as builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./
RUN npm run build

# Expose ports
EXPOSE 15000

# start app
CMD ["npm", "start"]
