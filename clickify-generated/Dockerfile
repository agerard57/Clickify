FROM node:18-alpine

RUN apk add --no-cache nginx

WORKDIR /src

COPY . .

RUN npm ci
RUN npm run build

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

RUN mkdir -p /usr/share/nginx/html
RUN cp -r dist/* /usr/share/nginx/html/

CMD ["nginx", "-g", "daemon off;"]
