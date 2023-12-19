DROP DATABASE IF EXISTS maunganui_db;
CREATE DATABASE maunganui_db;
USE maunganui_db;
--
-- Estructura de tabla para la tabla `cart_shopping`
--

CREATE TABLE `cart_shopping` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` varchar(250) NOT NULL,
  `price` decimal(10,0) NOT NULL,
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

--
-- Volcado de datos para la tabla `category`
--

INSERT INTO `category` (`id`, `name_category`) VALUES
(1, 'Ofertas'),
(2, 'Destacado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `color`
--

CREATE TABLE `color` (
  `id` int(11) NOT NULL,
  `name_color` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `color`
--

INSERT INTO `color` (`id`, `name_color`) VALUES
(1, 'red'),
(2, 'white'),
(3, 'pink'),
(4, 'red'),
(5, 'black'),
(6, 'blue'),
(7, 'green');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genres`
--

CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `genres`
--

INSERT INTO `genres` (`id`, `name`) VALUES
(0, 'MUJER'),
(1, 'HOMBRE');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `user_id` varchar(250) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
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
  `id` varchar(250) NOT NULL,
  `image` varchar(200) NOT NULL,
  `name` varchar(200) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `color_id` int(11) NOT NULL,
  `genre_id` int(11) NOT NULL,
  `sku` varchar(150) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `size_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `image`, `name`, `description`, `price`, `discount`, `color_id`, `genre_id`, `sku`, `created_at`, `updated_at`, `size_id`) VALUES
('1', 'image-1699584700848.jpg', 'chaq', 'chaq', 800000, 0, 2, 1, NULL, '2023-11-10 02:51:40', '2023-11-16 00:11:27', 3),
('21fe8835-0fdf-4447-87e1-289e2b5936b5', 'image-1702949932174.jpg', 'remera teddy', 'remera corta negra con estampa de oso', 18000, 5, 5, 0, 'RTB654123', '2023-12-19 01:38:52', '2023-12-19 02:07:30', 2),
('3', 'image-1699662509192.jpg', 'joggin', 'pant  brown.', 70000, 15, 5, 1, 'asd123', '2023-11-11 00:28:29', '2023-11-11 17:20:32', 3),
('4', 'image-1699723343337.jpg', 'camisa beige', 'camisa de botones manga corta', 35000, 5, 2, 1, 'lkj159', '2023-11-11 17:22:23', '2023-11-11 17:22:23', 2),
('43bb9da0-159c-4f51-8895-5691416ed69e', 'image-1702948881504.jpg', 'remera graffiti', 'Remera ancha color beige con grafitis miniatura ', 25000, 5, 2, 0, 'RGV963258', '2023-12-19 01:21:21', '2023-12-19 01:21:21', 2),
('7079a0ab-71c8-44c9-bdbf-649d77c3ad99', 'image-1702950302626.jpg', 'jaredinera denim', 'jardinera denim celeste', 35000, 5, 6, 0, 'JDW123658', '2023-12-19 01:45:02', '2023-12-19 01:45:02', 2),
('83c6072c-05b1-455b-a425-c38e7b992e8b', 'image-1702949825704.jpg', 'shorts gray', 'shorts de verano gris oscuros', 25000, 0, 5, 1, 'SGD65987', '2023-12-19 01:37:05', '2023-12-19 01:37:05', 3),
('b92a6e62-a825-4ed0-b126-9d983a2c261e', 'image-1702950127347.jpg', 'short denim', 'short mom denim suelto', 23000, 10, 6, 0, 'SDW458712', '2023-12-19 01:42:07', '2023-12-19 01:42:07', 2),
('cbe3c96e-7675-4050-ab09-e71103139ff5', 'image-1702950053890.jpg', 'funnie jacket', 'campera denim con estampa de colores', 50000, 10, 2, 0, 'FJW963258', '2023-12-19 01:40:53', '2023-12-19 01:40:53', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products_category`
--

CREATE TABLE `products_category` (
  `id` int(11) NOT NULL,
  `product_id` varchar(250) NOT NULL,
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

--
-- Volcado de datos para la tabla `size`
--

INSERT INTO `size` (`id`, `name_size`) VALUES
(1, 'S'),
(2, 'M'),
(3, 'L'),
(4, 'XL'),
(5, 'XL');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` varchar(250) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `avatar` varchar(200) DEFAULT NULL,
  `user_type_id` int(11) NOT NULL,
  `password` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `phone`, `avatar`, `user_type_id`, `password`, `email`) VALUES
('388fe52b-0f7d-4321-8b54-55f7c4e3dfea', 'Ricardo', 'Sanchez', '1185296345', 'default.png', 2, '$2a$10$qPiQDXWCarm9XKArkSTpDeS4DtQXpq93LmwXHlWJPyBYZEON5ZQa.', 'ricardo@gmail.comg'),
('442146c1-5494-4fad-abc8-1c47d39ad348', 'Laura', 'Jimenez', '1196857423', 'default.png', 2, '$2a$10$DA3h7OmsqCk12g5180PpHu58eqNHtUP6ef3uS66.yXffOTZAbgInW', 'laura.gime@gmail.com'),
('594b6dc9-43a2-4878-aa6f-9fb3f3d2dfd3', 'admin', 'admin', '3512365444', 'avatar-1702609382269', 1, '$2a$10$RWngnLSlRtEgX8XY9aPSD.k3Dtspr.cKs.dUcXUHh0rYsfeSEe/mm', 'admin@maunganui.com'),
('6608a8f1-7401-4ed6-9046-7731cff90d42', 'juancito', 'gutierrez', '12345678911', 'default.png', 1, '$2a$10$uE3b6Lb0AJ4nfZeTCtE31.STwDnPBZgw3hzvhk8RitpG.4HhtNQFG', 'juanito@gmail.com'),
('7fda4b13-9b37-4290-8e8d-35e80fbf855d', 'Alejandra', 'Funes', '1100446230', 'default.png', 2, '$2a$10$02ntQPTwrP1QNvUP8mFhuuKMUnLQtsVMyO.Pdq5VNYxlYc/IsMeSG', 'alefun@gmail.com'),
('80e10c3c-4d65-4475-a731-2b686d98f942', 'lisa', 'simpson', '12345678999', 'default.png', 1, '$2a$10$f667sGeHoNH91nDHdYUS6updjPut0dOiyroE9Nj.C/6wWa83KImBO', 'lisa@maunganui.com'),
('80e5f20e-a882-466e-b6d6-02c184bb23d4', 'Luis', 'Perez', '1156238912', 'avatar-1702342817510.jpg', 2, '$2a$10$ZlHWHZZa7DNn5Peb3V/3AeIBamG8AUr8N/V89wH.Ii4BTAeqWECPW', 'luis@gmail.com'),
('9139d959-4101-4202-ba44-9a5185c9d9ec', '', '', '', 'default.png', 2, '$2a$10$nLRpYZMLJ2U.kKI32bUn8.D2NdF4H8o7X9/u0r3SEmQVafMkXARUq', ''),
('c2864464-90c1-4546-8cff-f2dded6f6d1e', 'Daniela', 'gomez', '3512365444', 'avatar-1701828878522.jpg', 2, '$2a$10$V.zgyPkkaUhXhmII1Q86N.IrDQpMXEW90Xm1amfGQjoskUwo9b0EK', 'daniela.rodri0201@gmail.com'),
('cf47508d-431a-44ee-b452-95ed72fde792', 'Mariana', 'Montes', '3514785693', 'default.png', 1, '$2a$10$rCSLfKmtLsCaPS62oE1bwusyv0vzxHoqvInxOhLwdXrB8GDtj2vXu', 'marianam@maunganui.com'),
('f6116145-bb3f-43d9-9107-0e7cf0703010', 'Jorge', 'Gaitan', '1150306598', 'default.png', 1, '$2a$10$MCPcT1DurNfPKMv5knuQC.wjJBl01ZMVtas40LCuQxoXhDslouh2S', 'jorgeg@maunganui.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_type`
--

CREATE TABLE `user_type` (
  `id` int(11) NOT NULL,
  `name_user_type` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user_type`
--

INSERT INTO `user_type` (`id`, `name_user_type`) VALUES
(1, 'Admin'),
(2, 'User');

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
-- Indices de la tabla `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `color_id` (`color_id`),
  ADD KEY `genres_id` (`genre_id`),
  ADD KEY `size_id` (`size_id`);

--
-- Indices de la tabla `products_category`
--
ALTER TABLE `products_category`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indices de la tabla `size`
--
ALTER TABLE `size`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products_category`
--
ALTER TABLE `products_category`
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
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`color_id`) REFERENCES `color` (`id`),
  ADD CONSTRAINT `products_ibfk_3` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`),
  ADD CONSTRAINT `products_ibfk_4` FOREIGN KEY (`size_id`) REFERENCES `size` (`id`);

--
-- Filtros para la tabla `products_category`
--
ALTER TABLE `products_category`
  ADD CONSTRAINT `products_category_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  ADD CONSTRAINT `products_category_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`user_type_id`) REFERENCES `user_type` (`id`);
COMMIT;