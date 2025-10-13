# Step 1: Build the React app using Vite
FROM node:16 as build

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build the app
RUN npm run build

# Step 2: Serve the app using Nginx
FROM nginx:alpine

# Copy the build output to Nginx's default directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to allow traffic
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
