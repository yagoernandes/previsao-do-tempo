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

WORKDIR /home/yago

COPY . .

RUN adduser -D yago && apk update && apk add --virtual build-deps gcc python-dev musl-dev && apk add postgresql-dev && pip install -r requirements.txt && chown -R yago:yago ./

USER yago

CMD ["python", "run.py"]

EXPOSE 5000