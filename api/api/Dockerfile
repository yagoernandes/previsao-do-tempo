FROM ubuntu:18.04

RUN apt-get update -y && \
    apt-get install -y python3-pip python3-dev libpq-dev

COPY ./requirements.txt /app/requirements.txt

WORKDIR /app

RUN pip3 install -r requirements.txt

COPY . /app

ENTRYPOINT [ "python3" ]

CMD [ "run.py" ]

EXPOSE 5000


# FROM python:3
# ADD . /app/
# WORKDIR /app
# RUN pip install -r requirements.txt
# # ENTRYPOINT [ "python" ]
# CMD [ "python3", "run.py" ]
# EXPOSE 5000