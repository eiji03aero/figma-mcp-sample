FROM node:22-alpine

COPY . .

CMD ["sh", "entrypoint.sh"] 