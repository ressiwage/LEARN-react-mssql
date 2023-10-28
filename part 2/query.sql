with cte as 
(
    select
        *, 0 as level
    from
        testdb.dbo.subdivisions 
    where
        parent_id=(
            SELECT
                subdivision_id                                     
            FROM
                testdb.dbo.collaborators                                     
            WHERE
                testdb.dbo.collaborators.id = 710253
        )     
    union all     
	select t.*, level+1 as level 
    from
        cte          
    inner join
        testdb.dbo.subdivisions t 
            on cte.id = t.parent_id
)
SELECT
    testdb.dbo.collaborators.*, cte.level
FROM
    testdb.dbo.collaborators INNER JOIN cte on testdb.dbo.collaborators.subdivision_id = cte.id
WHERE
    testdb.dbo.collaborators.subdivision_id IN      (
        SELECT
            id     
        FROM
            testdb.dbo.subdivisions      
        WHERE
            testdb.dbo.subdivisions.id in (
                SELECT id from cte
            )
        )

	AND age<40 AND LEN(testdb.dbo.collaborators.name)>11 AND subdivision_id != 100055 AND subdivision_id != 100059 
	ORDER BY level;
    


