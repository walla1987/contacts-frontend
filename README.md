# Build project image
to run and build the project open in project root inside termial 
run docker build -t contacts-frontend:latest .

# run image as container
docker run -d -p 80:80 contacts-frontend:latest
please ensure port 80 is available  

# serve project 
visit http://localhost inside browser

