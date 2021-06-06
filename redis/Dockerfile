#docker image as base
FROM alpine

#install dependencies
RUN apk add --update redis
RUN apk add --update gcc

# tell me what to do on startup
CMD ["redis-server"]
