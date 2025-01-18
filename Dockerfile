# 编译
FROM alpine as builder
WORKDIR /app/
COPY ./ ./
RUN apk add --no-cache bash curl gcc git go musl-dev; \
    go build -o /timecron -ldflags="-w -s" .

# 获取nodejs
FROM node:20.18-alpine AS node-stage
RUN mkdir /node && cp /usr/local/bin/node /node/ && cp /usr/local/bin/npm /node/ && cp /usr/local/bin/npx /node/

# 最终镜像
FROM python:3.10-alpine
WORKDIR /app/
COPY --from=builder /timecron ./
COPY --from=node-stage /node /usr/local/bin
ENV TZ=Asia/Shanghai
ENV PATH="/usr/local/bin/node:$PATH"
RUN npm config set registry https://registry.npmmirror.com
RUN pip config set global.index-url https://mirrors.aliyun.com/pypi/simple
CMD ["./timecron"]
