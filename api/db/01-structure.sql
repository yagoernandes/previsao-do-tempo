--
-- PostgreSQL database dump
--

-- Dumped from database version 10.10
-- Dumped by pg_dump version 10.10

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- Name: previsao_id_seg; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.previsao_id_seg
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.previsao_id_seg OWNER TO postgres;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: previsao; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.previsao (
    id integer DEFAULT nextval('public.previsao_id_seg'::regclass) NOT NULL,
    id_cidade integer,
    name text,
    country text,
    dt integer,
    temp text,
    feels_like double precision,
    temp_min double precision,
    temp_max double precision,
    preasure integer,
    sea_level integer,
    grnd_level integer,
    humidity integer,
    temp_kf double precision,
    main text,
    description text,
    icon text,
    speed double precision,
    deg integer,
    dt_txt text,
    data_historico text
);


ALTER TABLE public.previsao OWNER TO postgres;

--
-- Data for Name: previsao; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.previsao (id, id_cidade, name, country, dt, temp, feels_like, temp_min, temp_max, preasure, sea_level, grnd_level, humidity, temp_kf, main, description, icon, speed, deg, dt_txt, data_historico) FROM stdin;
\.


--
-- Name: previsao_id_seg; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.previsao_id_seg', 2, true);


--
-- Name: previsao id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.previsao
    ADD CONSTRAINT id PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

