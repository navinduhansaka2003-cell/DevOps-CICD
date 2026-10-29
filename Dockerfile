
# Use Node.js as the base image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy our application into the container
COPY index.js .

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["node", "index.js"]
