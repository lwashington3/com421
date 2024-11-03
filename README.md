# COM 421 Sustainable Information Project

## Docker Run
To run the website, ensure that you have Docker and Docker Compose installed on your machine.
Run 
```shell
docker compose up
```
to run the Python server and go to [http://localhost/index.html](http://localhost/index.html) to see the website.
You can change which port the website will run on by setting the ports value in [docker-compose.yml](/docker-compose.yml) to be `127.0.0.1:{PORT_NUMBER}:80` and then going to `http://localhost:{PORT_NUMBER}/index.html`.

### Viewing the Website from Another Device
If you are hosting the website using Docker and want to view it from another device, such as a phone on the same network, you must remove the `127.0.0.1` in the [docker-compose.yml](/docker-compose.yml) file.
The ports value should look like `80:80` or `{PORT_NUMBER}:80`, depending on if you've changed the port number.

## Python Run
To run the website, make sure you have Python installed.
Run
``` shell
python main.py
```
to run the Python server and go to [http://localhost/index.html](http://localhost/index.html) to see the website.
Depending on your OS, you might need to run this command with admin-privileges to access port 80. 
You can change which port the website will run on by changing 80 in the command to whatever port number you want.
Then, go to `http://localhost:{PORT_NUMBER}/index.html`.

## Using HTTPS
If you would rather use HTTPS, you must accept the pem file into your computers accepted ...
Once that is done, run
```shell
docker compose run --rm --service-ports base https
```
or
```shell
python3 main.py https
```
to enable HTTPS.
Then, go to [https://localhost/index.html](https://localhost/index.html) to view the site with HTTPS.

If you would prefer to permanently use HTTPS, you can uncomment `# command: ["https"]` by removing the # symbol, and then you can use 
```shell
docker compose up
```
as you would have before.