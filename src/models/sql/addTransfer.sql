INSERT INTO transfers (
    homeless_person_id, oldage_home_id, volunteer_id,
    status, transfer_date, notes
)
VALUES ($1, $2, $3, $4, $5, $6)
RETURNING id; 