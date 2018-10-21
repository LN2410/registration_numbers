DROP TABLE IF EXISTS town;
DROP TABLE IF EXISTS reg_numbers;

CREATE TABLE town(
    id serial primary key,
    town_name text not null unique,
    reg_start int not null
);

create table reg_numbers (
    id serial not null primary key,
    reg_number text not null unique,
    town_id int not null,
    foreign key (town_id) references town(id)
);

insert into town(town_name, reg_start) values('Cape Town', 'CA');
insert into town(town_name, reg_start) values('Paarl', 'CL');
insert into town(town_name, reg_start) values('George', 'CAW');
insert into town(town_name, reg_start) values('Bellville', 'CY');
