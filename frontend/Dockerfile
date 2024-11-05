# Usa una imagen base de Node.js para la instalación de Angular
FROM node:16 AS build

# Configura el directorio de trabajo en el contenedor
WORKDIR /app

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
COPY --from=build /app/dist/ /usr/share/nginx/html

# Expon el puerto 80 para que se pueda acceder a la app
EXPOSE 80

# Inicia nginx en el contenedor
CMD ["nginx", "-g", "daemon off;"]
