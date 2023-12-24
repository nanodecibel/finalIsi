# Usa una imagen base de Node.js para construir la aplicación
FROM node:18 as builder

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build --prod

# Usa una imagen más pequeña de Alpine para el servidor NGINX
FROM nginx:alpine

# Copia los archivos construidos de la etapa anterior
COPY --from=builder /usr/src/app/dist/* /usr/share/nginx/html/

# Configura NGINX para que sirva la aplicación Angular
COPY nginx-custom.conf /etc/nginx/conf.d/default.conf

# Expose el puerto 80
EXPOSE 80