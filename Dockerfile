FROM registry.supos.ai/library/nginx:alpine
RUN rm -rf /etc/nginx/nginx.conf
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./dist/ /var/html/project/dam/
# COPY ./dist/ /var/html/
