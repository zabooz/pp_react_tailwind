SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.6
-- Dumped by pg_dump version 15.7 (Ubuntu 15.7-1.pgdg20.04+1)

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
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: key; Type: TABLE DATA; Schema: pgsodium; Owner: supabase_admin
--



--
-- Data for Name: passwordplayground; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."passwordplayground" ("id", "username", "password_hash", "created_at", "email", "visits", "generated_passwords", "tested_passwords", "generated_usernames", "avatar") VALUES
	(82, 'rock', '$2b$10$5q5vRXO7.zpB9thhrExyYeTXbWTzh.K4OHrS9Az7anx8..FLMcz4m', '2024-09-17 02:21:13.557514+00', 'rock@gmail.com', 2, 0, 0, 0, 'src/assets/profilePics/default.jpeg'),
	(57, 'das', '$2b$10$qnUWCm4/buztveCqIA8BD.RgjqGN4q8YMEzQZ/HmAApNlYSHw5CCm', '2024-09-12 11:24:06.401895+00', 'das@das', 29, 40, 27, 18, 'src/assets/profilePics/profile11.jpeg'),
	(71, 'test567', '$2b$10$cqZohDV7wF.CYi0sXi3ZFOhhPxqWoUYWcyQ6rzPwXo7w4MiwGWB4u', '2024-09-15 18:33:14.515626+00', 'test567@dfg.sdgf', 2, 0, 0, 0, 'src/assets/profilePics/profile6.jpeg'),
	(72, 'blab', '$2b$10$JaOa0VvfMZcT6HaPfMVDNOjoPY211o0FesDYqwEMheuATZO4LXt5W', '2024-09-15 18:37:43.346261+00', 'blab@gmail.com', 1, 0, 0, 0, 'src/assets/profilePics/profile19.jpeg'),
	(74, 'hampel', '$2b$10$vPe366ZCMecHrezdvMn1O.z6WQePLzpkYnpI3/XSYMlIHSLZCmgMq', '2024-09-15 22:03:38.040282+00', 'hampel@gmail.com', 1, 0, 0, 0, 'src/assets/profilePics/profile14.jpeg'),
	(58, 'daniel', '$2b$10$3mkTYWGsEr2XnCBBJ03VN.0Qp1zP/RJKQOUyi.0qvLc/vFIGJfzqi', '2024-09-15 00:16:55.435516+00', 'zabooz@gmail.com', 0, 0, 0, 0, 'src/assets/profilePics/profile2.jpeg'),
	(62, 'daniel123', '$2b$10$swIgilWyUWarbSvQ2uB4Auh8K589piqAd8AREdcjhiSthD4SOpf1q', '2024-09-15 00:29:41.256199+00', 'name@gmail.com', 0, 0, 0, 0, 'src/assets/profilePics/profile20.jpeg'),
	(69, 'sdfsdafdsafsdgdg', '$2b$10$Rec6QsB3KNOn03IYD9wGh.E1IwXNQnNF0Oj1VfSEXZZKH9.acelC2', '2024-09-15 00:42:19.516807+00', 'asddggdgfasd@sdg.com', 0, 0, 0, 0, 'src/assets/profilePics/profile14.jpeg'),
	(53, 'test', '$2b$10$lRl.u6KLPmMfbMKS8Peiae59BaoX/t5bRMgNlZWEcnKvhEJvTzCCm', '2024-09-12 09:32:18.193037+00', 'test@gmail.com', 9, 0, 0, 0, 'src/assets/profilePics/profile20.jpeg'),
	(79, 'klololol', '$2b$10$luuDPEn2jzBMfO9bV/tKAO4JCH6V0bBbtkuvsok1xNWYkbBZuOCey', '2024-09-15 22:16:27.756661+00', 'sdfsdfs@gmqail.com', 2, 0, 0, 0, 'src/assets/profilePics/profile18.jpeg'),
	(75, 'bläm', '$2b$10$Z9qyBbWjcvQxGuQxtztlW.hf6UlNigckyHRhod/da1uQle8In1yea', '2024-09-15 22:05:57.68768+00', 'torf@gmail.com', 2, 0, 0, 0, 'src/assets/profilePics/profile1.jpeg'),
	(32, 'user1', 'hashed_password_1', '2024-09-11 12:19:38.735703+00', 'user1@example.com', 59, 67, 58, 13, 'src/assets/profilePics/profile2.jpeg'),
	(83, 'lego', '$2b$10$c9KDIzN4gsiJWO63pN.UteJmIUrMeF5SquojSNJ20OPbCI2eNcx1C', '2024-09-17 08:54:01.5408+00', 'lego@lego.com', 2, 0, 0, 0, 'src/assets/profilePics/default.jpeg'),
	(73, 'grad', '$2b$10$ydzzwTeA84Kr/w4DyYe3MOT2HFSzMFLoOT/QatVNMdSfn2NkgbZ4.', '2024-09-15 20:54:01.104706+00', 'brut@brut.com', 5, 0, 0, 0, 'src/assets/profilePics/profile4.jpeg'),
	(76, 'hup', '$2b$10$2JvoKYMSsQFGF6/M7AoT6O/9nB.o9.lRVm0OXp5wJ5z1O42yWe.BW', '2024-09-15 22:09:14.834351+00', 'hup@gmal.com', 1, 0, 0, 0, 'src/assets/profilePics/profile11.jpeg'),
	(77, 'lösakdgh', '$2b$10$YEhR8l.F8Udt3BSwnX76Te5jebcwF6HMd7VcMOC3CNDKRpNYqMjti', '2024-09-15 22:14:00.415067+00', 'SDLKFG@sdf.sdf', 1, 0, 0, 0, 'src/assets/profilePics/profile2.jpeg'),
	(78, 'dfgd', '$2b$10$ygBw2o2Ghss/1XMoVijYAOp8LqVNxl5sYeZPj4vBBSqEKCqD9iQsG', '2024-09-15 22:15:42.642239+00', 'dfgdfg@efgd.dfg', 1, 0, 0, 0, 'src/assets/profilePics/profile3.jpeg'),
	(80, 'bambam', '$2b$10$.U6RiHR5vPjm2ySf2gqqq.nu6b1EnblamUx4tYNp3320xc.QwRo4u', '2024-09-16 01:57:12.410284+00', 'sadf@sdf.com', 4, 0, 0, 0, 'src/assets/profilePics/profile15.jpeg'),
	(70, 'lol', '$2b$10$MdDteF61Hovfqv5aC2og8.KNb6frMIlxraW1PqVcshdK6NEVF2Jwi', '2024-09-15 13:09:21.085375+00', 'hanf@sdg.cas', 21, 0, 0, 0, 'src/assets/profilePics/profile14.jpeg'),
	(66, 'qwrqwrdfhutzutzu', '$2b$10$o0SWn9du9uN1hWZPVLXXnONvFyGrCTcG6PYond/oWTJkxnpOVuKmK', '2024-09-15 00:32:14.022613+00', 'wqrqerzerzwr@gmail.com', 0, 0, 0, 0, 'src/assets/profilePics/profile4.jpeg'),
	(64, 'qwrqwr', '$2b$10$VTNgkcd0yMYyU67YrippMeZbeHp4VA1XiPDLJ1s5jOXbeUVBME3ji', '2024-09-15 00:30:58.843808+00', 'wqrqwr@gmail.com', 0, 0, 0, 0, 'src/assets/profilePics/profile12.jpeg'),
	(33, 'user2', 'hashed_password_2', '2024-09-11 12:19:38.735703+00', 'user2@example.com', 58, 7, 69, 96, 'src/assets/profilePics/profile22.jpeg'),
	(34, 'user3', 'hashed_password_3', '2024-09-11 12:19:38.735703+00', 'user3@example.com', 77, 18, 65, 2, 'src/assets/profilePics/profile18.jpeg'),
	(35, 'user4', 'hashed_password_4', '2024-09-11 12:19:38.735703+00', 'user4@example.com', 62, 96, 18, 7, 'src/assets/profilePics/profile15.jpeg'),
	(67, 'sdfsdafdsaf', '$2b$10$nl5swnxexlGmuyfIxiDqCuLUlYccV9FRiqohM446TIkgbKYwRFOB.', '2024-09-15 00:40:01.066396+00', 'asdfasd@sdg.com', 0, 0, 0, 0, 'src/assets/profilePics/profile7.jpeg'),
	(36, 'user5', 'hashed_password_5', '2024-09-11 12:19:38.735703+00', 'user5@example.com', 65, 75, 31, 11, 'src/assets/profilePics/profile1.jpeg'),
	(37, 'user6', 'hashed_password_6', '2024-09-11 12:19:38.735703+00', 'user6@example.com', 86, 9, 94, 33, 'src/assets/profilePics/profile16.jpeg'),
	(38, 'user7', 'hashed_password_7', '2024-09-11 12:19:38.735703+00', 'user7@example.com', 50, 57, 23, 25, 'src/assets/profilePics/profile20.jpeg'),
	(39, 'user8', 'hashed_password_8', '2024-09-11 12:19:38.735703+00', 'user8@example.com', 3, 44, 80, 75, 'src/assets/profilePics/profile3.jpeg'),
	(40, 'user9', 'hashed_password_9', '2024-09-11 12:19:38.735703+00', 'user9@example.com', 86, 39, 88, 61, 'src/assets/profilePics/profile9.jpeg'),
	(41, 'user10', 'hashed_password_10', '2024-09-11 12:19:38.735703+00', 'user10@example.com', 19, 80, 14, 72, 'src/assets/profilePics/profile4.jpeg'),
	(42, 'user11', 'hashed_password_11', '2024-09-11 12:19:38.735703+00', 'user11@example.com', 37, 1, 43, 72, 'src/assets/profilePics/profile19.jpeg'),
	(43, 'user12', 'hashed_password_12', '2024-09-11 12:19:38.735703+00', 'user12@example.com', 45, 4, 43, 92, 'src/assets/profilePics/profile7.jpeg'),
	(44, 'user13', 'hashed_password_13', '2024-09-11 12:19:38.735703+00', 'user13@example.com', 16, 20, 42, 68, 'src/assets/profilePics/profile10.jpeg'),
	(45, 'user14', 'hashed_password_14', '2024-09-11 12:19:38.735703+00', 'user14@example.com', 47, 74, 1, 27, 'src/assets/profilePics/profile23.jpeg'),
	(54, 'hanne', '$2b$10$YOxFhz9GEP9TQE/I3aFCEuR22QSAD3lrDw7OUlIU8LF4TwRbOR0pq', '2024-09-12 11:07:22.370748+00', 'hanne@gmail.com', 1, 0, 0, 0, 'src/assets/profilePics/profile16.jpeg'),
	(46, 'user15', 'hashed_password_15', '2024-09-11 12:19:38.735703+00', 'user15@example.com', 63, 40, 94, 94, 'src/assets/profilePics/profile17.jpeg'),
	(47, 'user16', 'hashed_password_16', '2024-09-11 12:19:38.735703+00', 'user16@example.com', 50, 70, 19, 68, 'src/assets/profilePics/profile21.jpeg'),
	(48, 'user17', 'hashed_password_17', '2024-09-11 12:19:38.735703+00', 'user17@example.com', 36, 86, 26, 15, 'src/assets/profilePics/profile22.jpeg'),
	(49, 'user18', 'hashed_password_18', '2024-09-11 12:19:38.735703+00', 'user18@example.com', 27, 95, 51, 56, 'src/assets/profilePics/profile3.jpeg'),
	(50, 'user19', 'hashed_password_19', '2024-09-11 12:19:38.735703+00', 'user19@example.com', 29, 56, 48, 47, 'src/assets/profilePics/profile6.jpeg'),
	(51, 'user20', 'hashed_password_20', '2024-09-11 12:19:38.735703+00', 'user20@example.com', 21, 91, 56, 5, 'src/assets/profilePics/profile5.jpeg'),
	(55, 'blubq', '$2b$10$C3xTRjLOyIAQ9c7ErIKlLerCwdcnWPmF31kk6J4SCmvLBTNy7s.Se', '2024-09-12 11:15:05.004808+00', 'sdg@sdg.com', 1, 0, 0, 0, 'src/assets/profilePics/profile5.jpeg'),
	(81, 'git', '$2b$10$xiUKi3ZyBqS2/cTVdltihOZz9b.Uvac0c0wruJvlrFZlWMmlN1NRq', '2024-09-16 06:58:30.557946+00', 'git@git.com', 34598, 174, 27, 29, '/assets/profilePics/profile10.jpeg');


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

INSERT INTO "storage"."buckets" ("id", "name", "owner", "created_at", "updated_at", "public", "avif_autodetection", "file_size_limit", "allowed_mime_types", "owner_id") VALUES
	('passwordcsv', 'passwordcsv', NULL, '2024-09-06 20:27:34.71273+00', '2024-09-06 20:27:34.71273+00', false, false, NULL, NULL, NULL);


--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

INSERT INTO "storage"."objects" ("id", "bucket_id", "name", "owner", "created_at", "updated_at", "last_accessed_at", "metadata", "version", "owner_id", "user_metadata") VALUES
	('a8d2a6a9-1d7f-4c99-8c96-b36e29f20a36', 'passwordcsv', '.emptyFolderPlaceholder', NULL, '2024-09-06 20:40:49.954468+00', '2024-09-06 20:40:49.954468+00', '2024-09-06 20:40:49.954468+00', '{"eTag": "\"d41d8cd98f00b204e9800998ecf8427e\"", "size": 0, "mimetype": "application/octet-stream", "cacheControl": "max-age=3600", "lastModified": "2024-09-06T20:40:50.000Z", "contentLength": 0, "httpStatusCode": 200}', '22025274-c7b1-4e5e-8554-c73aefd51561', NULL, '{}');


--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 1, false);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- Name: passwordplayground_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."passwordplayground_id_seq"', 83, true);


--
-- PostgreSQL database dump complete
--

RESET ALL;
