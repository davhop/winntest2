const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://postgres:chocolat@localhost:5432/transports';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'CREATE TABLE transports(id SERIAL PRIMARY KEY,\n\
                            title VARCHAR(40) not null,\n\
                            coordinates_from_lat REAL not null,\n\
                            coordinates_from_lon REAL not null,\n\
                            coordinates_to_lat REAL not null,\n\
                            coordinates_to_lon REAL not null,\n\
                            depart_name VARCHAR(50) ,\n\
                            end_name VARCHAR(50) ,\n\
                            vehicle VARCHAR(20) not null,\n\
                            comment TEXT not null,\n\
                            map VARCHAR(50) not null)');
query.on('end', () => { client.end(); });


