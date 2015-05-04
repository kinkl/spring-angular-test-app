create table users (
  username character varying(50) primary key,
  password character varying(50) not null,
  enabled boolean not null
);

alter table users owner to kittens;

insert into users (username, password, enabled) values ('ADMIN', '1qazxsw2', true);
insert into users (username, password, enabled) values ('TEST_USER_1', '!QAZxsw2', true);
insert into users (username, password, enabled) values ('TEST_USER_2', '1qazXSW@3edc', true);

create table authorities (
  id integer primary key,
  username character varying(50) not null references users(username),
  authority character varying(50) not null
);

alter table authorities owner to kittens;

insert into authorities (id, username, authority) values (1, 'ADMIN', 'ROLE_ADMIN');
insert into authorities (id, username, authority) values (2, 'ADMIN', 'ROLE_USER');
insert into authorities (id, username, authority) values (3, 'TEST_USER_1', 'ROLE_USER');
insert into authorities (id, username, authority) values (4, 'TEST_USER_2', 'ROLE_USER');