DROP DATABASE IF EXISTS maunganui_db;
CREATE DATABASE maunganui_db;
USE maunganui_db;
--
-- Estructura de tabla para la tabla `cart_shopping`
--
CREATE TABLE `cart_shopping` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `SKU` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `category`
--
CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name_category` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `color`
--
CREATE TABLE `color` (
  `id` int(11) NOT NULL,
  `name_color` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `orders`
--
CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `user_type_id` int(11) NOT NULL,
  `ammount` int(11) DEFAULT NULL,
  `shipping_adress` varchar(100) NOT NULL,
  `order_adress` varchar(100) NOT NULL,
  `order_email` varchar(100) NOT NULL,
  `order_date` date NOT NULL,
  `order_state` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `products`
--
CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `image` varchar(200) NOT NULL,
  `name` varchar(200) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `color_id` int(11) NOT NULL,
  `size_id` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `products_category`
--
CREATE TABLE `products_category` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `size`
--
CREATE TABLE `size` (
  `id` int(11) NOT NULL,
  `name_size` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `type`
--
CREATE TABLE `type` (
  `id` int(11) NOT NULL,
  `sale` varchar(100) DEFAULT NULL,
  `feature` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `type_products`
--
CREATE TABLE `type_products` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `type_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `users`
--
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `avatar` varchar(200) DEFAULT NULL,
  `user_type_id` int(11) NOT NULL,
  `password` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `user_type`
--
CREATE TABLE `user_type` (
  `id` int(11) NOT NULL,
  `admin` int(11) NOT NULL,
  `buyer` int(11) NOT NULL,
  `employee` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cart_shopping`
--
ALTER TABLE `cart_shopping`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cart_shopping_ibfk_1` (`order_id`),
  ADD KEY `product_id` (`product_id`);
--
-- Indices de la tabla `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);
--
-- Indices de la tabla `color`
--
ALTER TABLE `color`
  ADD PRIMARY KEY (`id`);
--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_type_id` (`user_type_id`);
--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `size_id` (`size_id`),
  ADD KEY `color_id` (`color_id`);
--
-- Indices de la tabla `products_category`
--
ALTER TABLE `products_category`
  ADD KEY `category_id` (`category_id`),
  ADD KEY `product_id` (`product_id`);
--
-- Indices de la tabla `size`
--
ALTER TABLE `size`
  ADD PRIMARY KEY (`id`);
--
-- Indices de la tabla `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`id`);
--
-- Indices de la tabla `type_products`
--
ALTER TABLE `type_products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `type_id` (`type_id`);
--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `user_type_id` (`user_type_id`);
--
-- Indices de la tabla `user_type`
--
ALTER TABLE `user_type`
  ADD PRIMARY KEY (`id`);
--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `color`
--
ALTER TABLE `color`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cart_shopping`
--
ALTER TABLE `cart_shopping`
  ADD CONSTRAINT `cart_shopping_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `cart_shopping_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Filtros para la tabla `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_type_id`) REFERENCES `user_type` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`size_id`) REFERENCES `size` (`id`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`color_id`) REFERENCES `color` (`id`);

--
-- Filtros para la tabla `products_category`
--
ALTER TABLE `products_category`
  ADD CONSTRAINT `products_category_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  ADD CONSTRAINT `products_category_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Filtros para la tabla `type_products`
--
ALTER TABLE `type_products`
  ADD CONSTRAINT `type_products_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `type_products_ibfk_2` FOREIGN KEY (`type_id`) REFERENCES `type` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`user_type_id`) REFERENCES `user_type` (`id`);
COMMIT;





