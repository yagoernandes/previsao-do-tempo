FROM node:12.2.0-alpine AS builder
WORKDIR /app
COPY . .
RUN npm i && npm run build

FROM node:12.2.0-alpine
RUN npm i -g serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "80", "-s", "."]
EXPOSE 80