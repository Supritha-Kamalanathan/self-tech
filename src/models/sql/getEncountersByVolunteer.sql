SELECT 
    e.*,
    v.name as volunteer_name
FROM encounters e
JOIN volunteers v ON e.volunteer_id = v.id
WHERE e.volunteer_id = $1
ORDER BY e.date DESC; 