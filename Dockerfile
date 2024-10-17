FROM python:3.12.5-alpine
LABEL authors="Len Washington III"

WORKDIR /usr/src/app

COPY ./* ./

ENTRYPOINT ["python3", "-m", "http.server", "80"]