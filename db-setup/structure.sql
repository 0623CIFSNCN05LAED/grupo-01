DROP DATABASE IF EXISTS maunganui_db;
CREATE DATABASE maunganui_db;
USE maunganui_db;


--
-- Estructura de tabla para la tabla `category`
--
DROP TABLE IF EXISTS `category`;
	CREATE TABLE `category` (
 `id` int(11) NOT NULL,
 `men` varchar(100) NOT NULL,
 `women` varchar(100) NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci
--
-- Estructura de tabla para la tabla `products_category`
--
DROP TABLE IF EXISTS `products_category`;
	CREATE TABLE `products_category` (
 `id` int(11) NOT NULL,
 `product_id` int(11) NOT NULL,
 `category_id` int(11) NOT NULL,
 KEY `category_id` (`category_id`),
 KEY `product_id` (`product_id`),
 CONSTRAINT `products_category_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
 CONSTRAINT `products_category_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci
--
-- Estructura de tabla para la tabla `login`
--
DROP TABLE IF EXISTS `login`;
 	CREATE TABLE `login` (
 `id` int(11) NOT NULL,
 `email` varchar(150) NOT NULL,
 `password` varchar(100) NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci
--
-- Estructura de tabla para la tabla `products`
--
DROP TABLE IF EXISTS `products`;
	CREATE TABLE `products` (
 `id` int(11) NOT NULL,
 `image` varchar(200) NOT NULL,
 `name` varchar(200) NOT NULL,
 `description` text NOT NULL,
 `price` decimal(10,0) NOT NULL,
 `discount` int(11) DEFAULT NULL,
 `color` varchar(50) NOT NULL,
 `size_id` int(4) NOT NULL,
 PRIMARY KEY (`id`),
 KEY `size_id` (`size_id`),
 CONSTRAINT `products_ibfk_1` FOREIGN KEY (`size_id`) REFERENCES `size` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci
--
-- Estructura de tabla para la tabla `size`
--
DROP TABLE IF EXISTS `size`;
 	CREATE TABLE `size` (
 `id` int(11) NOT NULL,
 `S` int(11) NOT NULL,
 `M` int(11) NOT NULL,
 `L` int(11) NOT NULL,
 `XL` int(11) NOT NULL,
 `XXL` int(11) NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci
--
-- Estructura de tabla para la tabla `type_products`
--
DROP TABLE IF EXISTS `type_products`;
	CREATE TABLE `type_products` (
 `id` int(11) NOT NULL,
 `product_id` int(11) NOT NULL,
 `type_id` int(11) NOT NULL,
 PRIMARY KEY (`id`),
 KEY `product_id` (`product_id`),
 KEY `type_id` (`type_id`),
 CONSTRAINT `type_products_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
 CONSTRAINT `type_products_ibfk_2` FOREIGN KEY (`type_id`) REFERENCES `type` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci
--
-- Estructura de tabla para la tabla `type`
--
DROP TABLE IF EXISTS `type`;
 	CREATE TABLE `type` (
 `id` int(11) NOT NULL,
 `sale` varchar(100) DEFAULT NULL,
 `feature` varchar(100) DEFAULT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci
--
-- Estructura de tabla para la tabla `users`
--
DROP TABLE IF EXISTS `users`;
	CREATE TABLE `users` (
 `id` int(11) NOT NULL,
 `first_name` varchar(100) NOT NULL,
 `last_name` varchar(100) NOT NULL,
 `phone` varchar(100) NOT NULL,
 `login_id` int(11) NOT NULL,
 `avatar` varchar(200) DEFAULT NULL,
 `user_type_id` int(11) NOT NULL,
 PRIMARY KEY (`id`),
 KEY `user_type_id` (`user_type_id`),
 KEY `login_id` (`login_id`),
 CONSTRAINT `users_ibfk_1` FOREIGN KEY (`user_type_id`) REFERENCES `user_type` (`id`),
 CONSTRAINT `users_ibfk_2` FOREIGN KEY (`login_id`) REFERENCES `login` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci
--
-- Estructura de tabla para la tabla `user_type`
--
DROP TABLE IF EXISTS `user_type`;
	CREATE TABLE `user_type` (
 `id` int(11) NOT NULL,
 `admin` int(11) NOT NULL,
 `buyer` int(11) NOT NULL,
 `employee` int(11) NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci
--
-- Estructura de tabla para la tabla `cart_shopping`
--
DROP TABLE IF EXISTS `cart_shopping`;
CREATE TABLE `cart_shopping` (
 `id` int(11) NOT NULL,
 `order_id` int(11) NOT NULL,
 `product_id` int(11) NOT NULL,
 `price` decimal(10,0) NOT NULL,
 `SKU` int(11) NOT NULL,
 `quantity` int(11) NOT NULL,
 PRIMARY KEY (`id`),
 KEY `cart_shopping_ibfk_1` (`order_id`),
 KEY `product_id` (`product_id`),
 CONSTRAINT `cart_shopping_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
 CONSTRAINT `cart_shopping_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci
--
-- Estructura de tabla para la tabla `orders`
--
DROP TABLE IF EXISTS `orders`;
	CREATE TABLE `orders` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `user_type_id` int(11) NOT NULL,
 `ammount` int(11) DEFAULT NULL,
 `shipping_adress` varchar(100) NOT NULL,
 `order_adress` varchar(100) NOT NULL,
 `order_email` varchar(100) NOT NULL,
 `order_date` date NOT NULL,
 `order_state` varchar(50) NOT NULL,
 PRIMARY KEY (`id`),
 KEY `user_type_id` (`user_type_id`),
 CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_type_id`) REFERENCES `user_type` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci






