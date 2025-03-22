INSERT INTO contributions (
    volunteer_id, resource_type, quantity, 
    latitude, longitude, notes
)
VALUES ($1, $2, $3, $4, $5, $6)
RETURNING id; 