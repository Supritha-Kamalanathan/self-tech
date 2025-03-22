INSERT INTO oldage_homes (
    name, latitude, longitude, address, available_capacity,
    primary_contact_name, primary_contact_phone,
    alternate_contact_name, alternate_contact_phone,
    website, accepting_residents
)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
RETURNING id; 