CREATE TABLE IF NOT EXISTS volunteers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    gender VARCHAR(50) NOT NULL,
    dob DATE NOT NULL,
    photo TEXT NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    address TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT true
);

CREATE TABLE IF NOT EXISTS encounters (
    id SERIAL PRIMARY KEY,
    volunteer_id INTEGER REFERENCES volunteers(id),
    latitude DECIMAL NOT NULL,
    longitude DECIMAL NOT NULL,
    date TIMESTAMP NOT NULL,
    notes TEXT,
    photo TEXT,
    num_of_people INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS homeless_people (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    age INTEGER,
    gender VARCHAR(50),
    dob DATE,
    willing_to_move BOOLEAN,
    has_id_proof BOOLEAN,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS oldage_homes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    latitude DECIMAL NOT NULL,
    longitude DECIMAL NOT NULL,
    address TEXT NOT NULL,
    available_capacity INTEGER NOT NULL,
    primary_contact_name VARCHAR(255) NOT NULL,
    primary_contact_phone VARCHAR(20) NOT NULL,
    alternate_contact_name VARCHAR(255),
    alternate_contact_phone VARCHAR(20),
    website TEXT,
    accepting_residents BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS contributions (
    id SERIAL PRIMARY KEY,
    volunteer_id INTEGER REFERENCES volunteers(id),
    resource_type VARCHAR(100) NOT NULL,
    quantity INTEGER NOT NULL,
    latitude DECIMAL NOT NULL,
    longitude DECIMAL NOT NULL,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS transfers (
    id SERIAL PRIMARY KEY,
    homeless_person_id INTEGER REFERENCES homeless_people(id),
    oldage_home_id INTEGER REFERENCES oldage_homes(id),
    volunteer_id INTEGER REFERENCES volunteers(id),
    status VARCHAR(50) NOT NULL,
    transfer_date DATE NOT NULL,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
); 