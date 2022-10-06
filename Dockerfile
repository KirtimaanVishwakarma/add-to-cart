FROM node:16-alpine3.13
WORKDIR /app
# Install app dependencies
RUN npm -g install serve
COPY package*.json /app/
RUN npm install
COPY . /app/
RUN npm run build
EXPOSE 3000
# CMD [ "npm","start" ]
# CMD ["/bin/sh", "-c", "./env.sh && mv env-config.js ./container/build/env-config.js && mkdir -p ./container/build/chargebee && cp -r ./container/build/*.* ./container/build/chargebee && cp -r ./container/build/static ./container/build/chargebee && serve -s /root/container/build -p 3000"]
CMD ["/bin/sh", "-c", "./env.sh && mv env-config.js ./build/env-config.js && serve -s build -p 3000"]