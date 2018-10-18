DROP TABLE IF EXISTS Town;
DROP TABLE IF EXISTS reg_numbers;

CREATE TABLE town(
    id serial primary key,
    town_name text not null unique,
    reg_start int not null
);

create table reg_numbers (
    id serial not null primary key,
    reg_numbers text not null unique,
    town_id int not null,
    foreign key (town_id) references town(id)
);