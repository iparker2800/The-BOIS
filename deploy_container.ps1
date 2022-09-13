## Use this script in the project working directory
node --version
docker build -t "the-bois:Dockerfile" .
docker run --name deploy -dp 3000:3000 the-bois:Dockerfile 