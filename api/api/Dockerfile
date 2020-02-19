# FROM ubuntu:18.04
# RUN apt-get update -y && \
#     apt-get install -y python3-pip python3-dev libpq-dev
# COPY ./requirements.txt /app/requirements.txt
# WORKDIR /app
# RUN pip3 install -r requirements.txt
# COPY . /app
# ENTRYPOINT [ "python3" ]
# CMD [ "run.py" ]
# EXPOSE 5000


FROM python:alpine

RUN adduser -D yago && apk update && apk add --virtual build-deps gcc python-dev musl-dev && apk add postgresql-dev

WORKDIR /home/yago

COPY . .

RUN python -m venv env && venv/bin/pip install -r requirements.txt

ENV FLASK_APP run.py

RUN chown -R yago:yago ./
USER yago

EXPOSE 5000
ENTRYPOINT ["python", "run.py"]