SELECT id, name, email, password 
FROM volunteers 
WHERE email = $1 AND password = $2 AND is_active = true; 