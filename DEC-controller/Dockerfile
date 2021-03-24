FROM registry.redhat.io/ubi8/nodejs-12 as builder

USER 0
WORKDIR /app
RUN chown -R 1001:0 /app
USER 1001
ENV PATH /app/node_modules/.bin:$PATH
COPY --chown=1000 package.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g
RUN npm install serve -g 
COPY --chown=1000 . ./
RUN npm run build

# Expose ports
EXPOSE 10000

# start app
CMD ["sh", "./docker-start.sh"]
