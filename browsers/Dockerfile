# Dockerfile
FROM python:3.9-slim

# Install git so we can clone
RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*

# Set up the working directory
WORKDIR /app

# Clone the Speedometer repository
RUN git clone https://github.com/WebKit/Speedometer.git /app
RUN git fetch --all
RUN git checkout release/2.1

COPY index.html /app/index.html

# Expose the default python http.server port
EXPOSE 8080

# Run a simple Python HTTP server when container starts
CMD [ "python", "-m", "http.server", "8080" ]
