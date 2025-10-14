# Example Dockerfile for Vite + React
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the app files
COPY . .

# Build the app
RUN npm run build

# Expose the port that the app will run on
EXPOSE 3000

# Start the app on 0.0.0.0 to allow external access
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0"]
