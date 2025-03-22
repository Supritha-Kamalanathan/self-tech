INSERT INTO volunteers (
    name, gender, dob, photo, email, password,
    phone_number, address
)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
RETURNING id;