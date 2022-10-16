--
-- PostgreSQL database dump
--

-- Dumped from database version 11.17
-- Dumped by pg_dump version 11.17

-- Started on 2022-10-15 04:34:59

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

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 197 (class 1259 OID 16541)
-- Name: reflections; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reflections (
    id integer NOT NULL,
    success character varying(255),
    low_point character varying(255),
    take_away character varying(255),
    owner_id integer NOT NULL,
    created_date date,
    modified_date date
);


ALTER TABLE public.reflections OWNER TO postgres;

--
-- TOC entry 199 (class 1259 OID 16584)
-- Name: reflections_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.reflections ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.reflections_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 99999
    CACHE 1
);


--
-- TOC entry 196 (class 1259 OID 16533)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id bigint NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 198 (class 1259 OID 16582)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 9999999
    CACHE 1
);


--
-- TOC entry 2818 (class 0 OID 16541)
-- Dependencies: 197
-- Data for Name: reflections; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2817 (class 0 OID 16533)
-- Dependencies: 196
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.users (id, email, password) OVERRIDING SYSTEM VALUE VALUES (1, 'user', 'user');


--
-- TOC entry 2826 (class 0 OID 0)
-- Dependencies: 199
-- Name: reflections_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.reflections_id_seq', 16, true);


--
-- TOC entry 2827 (class 0 OID 0)
-- Dependencies: 198
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 13, true);


--
-- TOC entry 2694 (class 2606 OID 16569)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 2695 (class 2606 OID 16598)
-- Name: reflections fk_owner_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reflections
    ADD CONSTRAINT fk_owner_id FOREIGN KEY (owner_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;


-- Completed on 2022-10-15 04:35:00

--
-- PostgreSQL database dump complete
--

