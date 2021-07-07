
use vocabjotdown;

create table user(
	id					integer NOT NULL AUTO_INCREMENT,
	login_name			varchar(30),
	common_name			varchar(100),
	email				varchar(100),
	status				varchar(1),
	password_hash		varchar(100),
	last_update_time	datetime,
	PRIMARY KEY (id)
);

create table user_role(
	user_id		integer,
	role		varchar(50),
	FOREIGN KEY (user_id) REFERENCES user(id)
);

create table user_activity(
	id				integer NOT NULL AUTO_INCREMENT,
	user_id			integer,
	type			varchar(100),
	message			varchar(100),
	action_time		datetime,
	PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES user(id)
);

create table language(
	id					integer NOT NULL AUTO_INCREMENT,
	name				varchar(100),
	code				varchar(10),
	create_time			datetime,
	last_update_time 	datetime,
	PRIMARY KEY (id)
);


create table profile(
	id					integer NOT NULL AUTO_INCREMENT,
	user_id				integer,
	language_id			integer,
	level				varchar(10),
	status				varchar(1),
	last_update_time	datetime,
	PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES user(id),
	FOREIGN KEY (language_id) REFERENCES language(id)
);

create table vocabulary(
	id					integer NOT NULL AUTO_INCREMENT,
	profile_id			integer,
	word				varchar(100),
	progress			varchar(1),
	last_update_time	datetime,
	PRIMARY KEY (id),
    FOREIGN KEY (profile_id) REFERENCES profile(id)
);

create table article (
	id					integer NOT NULL AUTO_INCREMENT,
	profile_id			integer,
	title				varchar(200),
	content				text,
	status				varchar(1),
	create_time			datetime,
	last_update_time	datetime,
	PRIMARY KEY (id),
    FOREIGN KEY (profile_id) REFERENCES profile(id)
);

create table flashcarddeck(
	id					integer NOT NULL AUTO_INCREMENT,
	profile_id			integer,
	create_time			datetime,
	last_update_time 	datetime,
	status				varchar(1),
	PRIMARY KEY (id),
    FOREIGN KEY (profile_id) REFERENCES profile(id)
);

create table flashcard(
	id					integer NOT NULL AUTO_INCREMENT,
	deck_id				integer,
	word				varchar(100),
	meaning				varchar(500),
	last_study			datetime,
	response			integer,
	create_time			datetime,
	last_update_time	datetime,
	status				varchar(1),
	PRIMARY KEY (id),
    FOREIGN KEY (deck_id) REFERENCES flashcarddeck(id)
);

create table resource(
	id					integer NOT NULL AUTO_INCREMENT,
	language_id			integer,
	name				varchar(100),
	create_time			datetime,
	last_update_time 	datetime,
	PRIMARY KEY (id),
    FOREIGN KEY (language_id) REFERENCES language(id)
);


create table resource_word(
	id			integer NOT NULL AUTO_INCREMENT,
	word		varchar(250),
	resource_id	integer,
	PRIMARY KEY (id)
);

commit;