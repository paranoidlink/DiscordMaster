FROM keymetrics/pm2:latest-stretch

RUN mkdir -p /opt/discordmaster
WORKDIR /opt/discordmaster

COPY package.json /opt/discordmaster
RUN npm install

COPY . /opt/discordmaster

CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]
