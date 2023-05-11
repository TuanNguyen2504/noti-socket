# FROM node:14.10.1-alpine3.10 AS base
# ENV http_proxy "http://proxy.hcm.fpt.vn:80/"
# ENV https_proxy "http://proxy.hcm.fpt.vn:80/"
# ENV no_proxy "localhost,127.0.0.1,172.24.178.44,172.24.178.4,172.24.178.5"

# WORKDIR /app
# # copy both 'package.json' and 'package-lock.json' (if available)
# COPY package*.json ./
# RUN npm install
# COPY . .

# FROM base AS code-dev
# LABEL MAINTAINER NAMNT96
# CMD ["npm", "start"]

# # Stage for run start
# FROM base AS builder
# RUN npm install

# # # Stage for run build
# # FROM nginx:1.16.0-alpine as code-prod
# # RUN rm  /usr/share/nginx/html/*
# # COPY --from=builder /app /usr/share/nginx/html
# # RUN rm /etc/nginx/conf.d/default.conf
# # COPY nginx/nginx.conf /etc/nginx/conf.d
# # EXPOSE 3030
# # CMD ["nginx","-g","daemon off;"]

# # ---- Release ----
# FROM base AS code-prod
# # copy production node_modules
# COPY --from=builder /app/node_modules ./node_modules
# # copy app sources
# COPY . .
# # expose port and define CMD
# EXPOSE 3030
# CMD npm run start

FROM repo.bigdata.local/node:14-alpine

LABEL MAINTAINER="NAMNT96"

WORKDIR /app
ENV http_proxy=http://proxy.hcm.fpt.vn:80
ENV https_proxy=http://proxy.hcm.fpt.vn:80
ENV no_proxy "localhost,127.0.0.1,172.24.178.44,172.24.178.4,172.24.178.5,172.27.11.186,172.24.178.105,*.bigdata.local,*.local,vault.sys.bigdata.local,172.24.177.54,*.cadshouse.fpt.vn"

RUN npm install telnet 

COPY . .
RUN chmod 500 /app/entrypoint.sh
ENTRYPOINT ["/app/entrypoint.sh"]
CMD [ "yarn" ,"start" ]

