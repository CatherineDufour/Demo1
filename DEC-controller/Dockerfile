FROM registry.redhat.io/ubi8/nodejs-12 as builder
USER 1000
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY --chown=1000 package.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g
RUN npm install serve -g 
COPY --chown=1000 . ./
RUN npm run build
RUN chgrp -R 0 /app && chmod -R g=u /app 
RUN chgrp -R 0 ./ && chmod -R g=u ./ 

# Expose ports
EXPOSE 10000

# start app
CMD ["sh", "./docker-start.sh"]
