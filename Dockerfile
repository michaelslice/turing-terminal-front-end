FROM node:22-alpine3.19

# Set Working Directory
WORKDIR /usr/src/app

# Copy Package Files to The Docker Image
COPY turing-terminal-front-end/package.json /usr/src/app/package.json
COPY turing-terminal-front-end/package-lock.json /usr/src/app/package-lock.json

# Install Dependencies
RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent

# Copy the Rest of The Project Code
COPY ./turing-terminal-front-end /usr/src/app/

# Build The Project
RUN npm run build

# Expose Port
EXPOSE 5173

# Run Frontend
CMD ["npm", "run", "dev"]