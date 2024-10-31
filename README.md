# COM 421 Sustainable Information Project

## Docker Run
To run the website, ensure that you have Docker and Docker Compose installed on your machine.
Run 
```shell
docker compose up
```
to run the Python server and go to [http://localhost/index.html](http://localhost/index.html) to see the website.
You can change which port the website will run on by setting the ports value in `docker-compose.yml` to be `127.0.0.1:{PORT_NUMBER}:80` and then going to `http://localhost:{PORT_NUMBER}/index.html`.

## Python Run
To run the website, make sure you have Python installed.
Run
``` shell
python -m http.server 80
```
to run the Python server and go to [http://localhost/index.html](http://localhost/index.html) to see the website.
Depending on your OS, you might need to run this command with admin-privileges to access port 80. 
You can change which port the website will run on by changing 80 in the command to whatever port number you want.
Then, go to `http://localhost:{PORT_NUMBER}/index.html`.
