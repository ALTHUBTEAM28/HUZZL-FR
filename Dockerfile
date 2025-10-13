# Step 1: Build the React app using Node.js 20
FROM node:20 AS build

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the app
RUN npm run build

# List the contents of /app/dist to verify that files are present
RUN ls -R /app/dist  # This will show the files in the dist/ folder

# Step 2: Use Nginx to serve the built app
FROM nginx:alpine

# Copy the custom Nginx configuration file
COPY default.conf /etc/nginx/conf.d/

# Copy the build output from the build stage to the nginx server's html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to serve the app
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
