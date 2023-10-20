-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS homehub_web_app;

-- Use the database
USE homehub_web_app;

-- Create the 'members' table
CREATE TABLE members (
  id VARCHAR(255) NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY (username)
);

-- Create the 'homehub_home_accts' table
CREATE TABLE homehub_home_accts (
  id VARCHAR(255) NOT NULL,
  time_zone VARCHAR(50) NOT NULL,
  name VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

-- Create the 'home_members' table
CREATE TABLE home_members (
  homehub_home_id VARCHAR(255) NOT NULL,
  member_id VARCHAR(255) NOT NULL,
  isAdmin TINYINT(1) NOT NULL,
  PRIMARY KEY (homehub_home_id, member_id)
);

-- Commit the changes
COMMIT;
