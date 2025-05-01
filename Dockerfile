# Dockerfile for E-Portfolio
FROM nginx:alpine

# Copy the built application to the nginx web root
COPY dist /usr/share/nginx/html

# Expose port 80 for web traffic
EXPOSE 80

# Run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]