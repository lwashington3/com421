# COM 421 Sustainable Information Project

To run the website, ensure that you have Docker and Docker Compose installed on your machine.
Run 
```shell
docker compose up
```
to run the Python server and go to [http://localhost/index.html](http://localhost/index.html) to see the website.
You can change which port the website will run on by setting the ports value in `docker-compose.yml` to be `127.0.0.1:{PORT_NUMBER}:80` and then going to `http://localhost:{PORT_NUMBER}/index.html`.

