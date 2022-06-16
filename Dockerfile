# #   base for running container
# FROM node:alpine

# # location of working
# WORKDIR /app

# # copy 'all files in current path' into 'current path of WORKDIR (working directory)' is '/app'
# COPY . .

# # set Environment
# ENV PATH /app/node_modules/.bin:$PATH

# # instruction for cmd of container
# RUN npm install 
# RUN npm run build 

# CMD [ "npm","start" ]

FROM nginx

WORKDIR /usr/share/nginx/html

COPY build .
