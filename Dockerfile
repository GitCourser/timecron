FROM alpine as builder
LABEL stage=go-builder
WORKDIR /app/
COPY ./ ./
RUN apk add --no-cache bash curl gcc git go musl-dev; \
    go build -o /timecron -ldflags="-w -s" .

FROM python:3.12.5-alpine
WORKDIR /app/
COPY --from=builder /timecron ./
EXPOSE 3005
ENTRYPOINT ["./timecron"]
