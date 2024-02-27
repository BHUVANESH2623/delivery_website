# FROM node:latest
# WORKDIR .
# COPY . .
# CMD ["npm","install"]
# CMD ["npm", "start"]
# EXPOSE 3000

FROM node:latest as build
WORKDIR .
COPY . .
CMD ["npm","install","&&","npm","run","build"]
FROM nginx:latest
COPY --from=build build/ /usr/share/nginx/html
EXPOSE 80