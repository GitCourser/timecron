# 编译
FROM alpine as builder
WORKDIR /app/
COPY ./ ./
RUN apk add --no-cache bash curl gcc git go musl-dev; \
    go build -o /xuanwu -ldflags="-w -s" .

# 获取nodejs
FROM node:20.18-alpine AS nodejs

# 最终镜像
FROM python:3.10-alpine

ENV TZ=Asia/Shanghai

WORKDIR /app/
COPY --from=nodejs /usr/local/lib/node_modules/. /usr/local/lib/node_modules/
COPY --from=nodejs /usr/local/bin/. /usr/local/bin/
COPY --from=builder /app/entrypoint.sh /usr/local/bin/docker-entrypoint.sh
COPY --from=builder /xuanwu ./

RUN apk add --no-cache libstdc++ libgcc && \
    npm config set registry https://registry.npmmirror.com && \
    pip config set global.index-url https://mirrors.aliyun.com/pypi/simple && \
    rm -f /usr/local/bin/yarn* && \
    rm -rf /var/cache/apk/* && \
    rm -rf /var/tmp/* && \
    rm -rf /tmp/*

ENTRYPOINT ["docker-entrypoint.sh"]