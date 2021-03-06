drop schema if exists api cascade;
create schema api;
set search_path = api, public;

-- this role will be used as the owner of the views in the api schema
-- it is needed for the definition of the RLS policies
drop role if exists api;
create role api;
-- this is a workaround for RDS where the master user does not have SUPERUSER priviliges  
grant api to current_user;


-- our endpoints
create type customer as (id int, name text, email text, role text);
\ir login.sql
\ir logout.sql
\ir refresh_token.sql
\ir signup.sql
\ir me.sql
\ir todos.sql
\ir views.sql
\ir search_functions.sql