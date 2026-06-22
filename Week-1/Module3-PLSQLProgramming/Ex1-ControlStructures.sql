DELIMITER //
CREATE PROCEDURE CheckBalance(
    IN bal DECIMAL(10,2)
)
BEGIN
    IF bal >= 1000 THEN
        SELECT 'Minimum balance maintained' AS Result;
    ELSE
        SELECT 'Minimum balance not maintained' AS Result;
    END IF;
END //
DELIMITER ;
CALL CheckBalance(1500);
CALL CheckBalance(500);