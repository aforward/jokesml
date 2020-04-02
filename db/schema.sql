CREATE TABLE schema_migrations (
  migration varchar(1000),
  migrated_at timestamp DEFAULT NOW(),
  PRIMARY KEY (migration)
);

CREATE SEQUENCE jokes_id_seq;
CREATE TABLE jokes (
  id int DEFAULT nextval('jokes_id_seq'),
  question text,
  answer text,
  PRIMARY KEY (id)
);

INSERT INTO schema_migrations (migration)
VALUES ('20200402094000-create-jokes.sql');
