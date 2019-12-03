const item = "CREATE TABLE IF NOT EXISTS `item` (	`item_id` VARCHAR(255) NULL DEFAULT NULL,	`name` VARCHAR(255) NULL DEFAULT NULL,	`date_created` DATETIME NULL DEFAULT NULL,	UNIQUE INDEX `item_id` (`item_id`))COLLATE='utf8mb4_0900_ai_ci'ENGINE=InnoDB;"


module.exports = item
