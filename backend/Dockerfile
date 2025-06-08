FROM node:20

WORKDIR /app
COPY . .
RUN npm install

RUN mkdir -p /app/images

EXPOSE 3000
CMD ["npm", "start"]
