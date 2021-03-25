FROM registry.redhat.io/ubi8/nodejs-12 as builder
RUN useradd --uid 1000 --gid root 
WORKDIR /opt/app-root/src
ENV PATH /opt/app-root/src/node_modules/.bin:$PATH
COPY package.json /opt/app-root/src
RUN npm install
RUN npm install react-scripts@3.4.1 -g
COPY public /opt/app-root/src/public/
COPY src /opt/app-root/src/src/
RUN npm run build
COPY env2js.sh /opt/app-root/src/
COPY docker-start.sh /opt/app-root/src/
COPY server.js /opt/app-root/src/

RUN chmod -R 775 /opt/app-root/src/
RUN chown -R node:root /opt/app-root/src/

EXPOSE 10000
USER 1000
CMD ["/bin/bash", "./docker-start.sh"]