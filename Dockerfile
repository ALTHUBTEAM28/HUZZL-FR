# Step 1: Use Node.js 20 to build the app
FROM node:20 AS build

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code (ensure destination is a directory)
COPY . /app/

# List the contents of /app/src/Components for debugging
RUN ls -R /app/src/Components  

# Build the app
RUN npm run build

# Step 2: Use Nginx to serve the built app
FROM nginx:alpine

# Copy the build output from the build stage to the nginx server's html directory
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
