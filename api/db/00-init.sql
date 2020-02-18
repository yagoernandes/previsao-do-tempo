CREATE EXTENSION IF NOT EXISTS dblink;

DO $$
BEGIN
PERFORM dblink('host=localhost port=5432 user=postgres password=zenerial dbname=postgres' ,'CREATE DATABASE testeial TEMPLATE template0;');
EXCEPTION WHEN duplicate_database THEN RAISE NOTICE '%, skipping', SQLERRM USING ERRCODE = SQLSTATE;
END
$$;