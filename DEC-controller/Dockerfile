FROM registry.redhat.io/ubi8/nodejs-12 as builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g
COPY . ./
RUN npm run build

# Expose ports
EXPOSE 10000

# start app
CMD ["npm", "start"]
