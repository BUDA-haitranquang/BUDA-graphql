# Uses the node base image with the latest LTS version
FROM node:14.17.1
RUN mkdir -p /graphql-buda
WORKDIR /graphql-buda
# Informs Docker that the container listens on the 
# specified network ports at runtime
EXPOSE 4000
# Copies files from the local 
# directory to a new app directory on the container
COPY . .
# Changes working directory to the new directory just created
# Installs npm dependencies on container
RUN npm install
# Command container will actually run when called
CMD ["node", "src/index.js"]