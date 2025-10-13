# Step 1: Use Node.js 20 or later for the build process
FROM node:20 as build

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Build the app
RUN npm run build

# Step 2: Use a lightweight nginx server  to serve the built app
FROM nginx:alpine

# Copy the build output from the build stage to the nginx server's html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to allow traffic
EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
