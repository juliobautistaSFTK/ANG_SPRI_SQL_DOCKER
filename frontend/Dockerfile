# Usa una imagen base de Node.js 18 (o superior)
FROM node:18 AS build

# Configura el directorio de trabajo en el contenedor
WORKDIR /src/app

ENV NODE_OPTIONS=--openssl-legacy-provider

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias de Angular
RUN npm install

# Copia el código fuente al contenedor
COPY . .

# Construye el proyecto de Angular
RUN npm run build

# Usa una imagen base más ligera para producción
FROM nginx:alpine

# Copia los archivos de build generados al contenedor de nginx
COPY --from=build /src/app/dist/frontend /usr/share/nginx/html/frontend

# Expone el puerto 80 para que se pueda acceder a la app
EXPOSE 80

# Inicia nginx en el contenedor
CMD ["nginx", "-g", "daemon off;"]
