INSERT INTO homeless_people (name, age, gender, dob, willing_to_move, has_id_proof, notes)
VALUES ($1, $2, $3, $4, $5, $6, $7)
ON CONFLICT (name, dob) DO UPDATE
SET age = EXCLUDED.age,
    gender = EXCLUDED.gender,
    willing_to_move = EXCLUDED.willing_to_move,
    has_id_proof = EXCLUDED.has_id_proof,
    notes = EXCLUDED.notes
RETURNING id; 