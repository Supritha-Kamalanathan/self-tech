INSERT INTO encounters (
    volunteer_id,
    latitude,
    longitude,
    date,
    notes,
    photo,
    num_of_people
)
VALUES ($1, $2, $3, $4, $5, $6, $7)
RETURNING id; 