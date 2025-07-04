FROM node:iron-bullseye

USER root
RUN apt-get update && \
    apt-get install -y git curl && \
    rm -rf /var/lib/apt/lists/* && \
    npm set strict-ssl false && \
    npm i @angular/cli -g

COPY . /workspaces

WORKDIR /workspaces/my-store
RUN npm install

WORKDIR /workspaces/store
RUN npm install

WORKDIR /workspaces/todoapp
RUN npm install && npm set strict-ssl true

CMD ["sleep", "infinity"]