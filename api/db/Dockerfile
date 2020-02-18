FROM postgres:9.6

ENV POSTGRES_DB teste_ial
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD zenerial
ENV POSTGRES_INITDB_ARGS -T template0

VOLUME pg-data /var/lib/postgresql/data

RUN mkdir -p /docker-entrypoint-initdb.d/

ADD *.sql *.sh /docker-entrypoint-initdb.d/

EXPOSE 5432