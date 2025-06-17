const dishes = [
  {
    id: 1,
    name: "Butter Chicken",
    category: "Main Course",
    cuisineType: "Indian",
    difficultyLevel: "Medium",
    rating: 4.5,
    image: "https://t4.ftcdn.net/jpg/03/61/86/91/360_F_361869194_7JGmIOSj2iUNi0AYoVhVyhKvaN6PkOah.jpg",
    chef: "Chef Arjun Singh",
    time: "45 mins",
    ingredients: ["Chicken", "Butter", "Cream", "Tomatoes", "Spices"],
    tags: ["Spicy", "Rich", "Popular"],
    dietaryRestrictions:"Contains dairy, not vegetarian, not vegan.",
    description: `Butter Chicken — a beloved classic of Indian cuisine — is a rich and indulgent dish that perfectly balances bold spices with creamy textures. Originating in the kitchens of Delhi in the 1950s, this dish was created to transform leftover tandoori chicken into a luscious curry. Tender pieces of marinated chicken are first roasted or grilled to achieve a slightly smoky flavor. These succulent morsels are then simmered in a velvety tomato-based sauce enriched with butter, cream, and a harmonious blend of spices such as garam masala, cumin, coriander, and fenugreek. The result is an irresistible combination of mildly spiced, slightly sweet, and deeply savory flavors that pair beautifully with naan, roti, or fragrant basmati rice.

    Butter Chicken is not just a meal — it’s an experience that reflects the culinary diversity of India. The dish appeals to both spice lovers and those new to Indian food because of its balanced, creamy sauce. It is a staple on Indian restaurant menus worldwide and is equally popular at home, where each family adds its own twist. Whether served at a festive gathering or a casual dinner, Butter Chicken continues to win hearts with its timeless charm and unforgettable taste.`,
  },
  {
    id: 2,
    name: "Margherita Pizza",
    category: "Main Course",
    cuisineType: "Italian",
    difficultyLevel: "Easy",
    rating: 4.2,
    image: "https://t4.ftcdn.net/jpg/03/61/86/91/360_F_361869194_7JGmIOSj2iUNi0AYoVhVyhKvaN6PkOah.jpg",
    chef: "Chef Marco Rossi",
    time: "30 mins",
    ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella", "Basil"],
    tags: ["Vegetarian", "Cheesy", "Classic"],
    dietaryRestrictions:"Contains dairy, not vegetarian, not vegan.",
    description: `Butter Chicken — a beloved classic of Indian cuisine — is a rich and indulgent dish that perfectly balances bold spices with creamy textures. Originating in the kitchens of Delhi in the 1950s, this dish was created to transform leftover tandoori chicken into a luscious curry. Tender pieces of marinated chicken are first roasted or grilled to achieve a slightly smoky flavor. These succulent morsels are then simmered in a velvety tomato-based sauce enriched with butter, cream, and a harmonious blend of spices such as garam masala, cumin, coriander, and fenugreek. The result is an irresistible combination of mildly spiced, slightly sweet, and deeply savory flavors that pair beautifully with naan, roti, or fragrant basmati rice.

    Butter Chicken is not just a meal — it’s an experience that reflects the culinary diversity of India. The dish appeals to both spice lovers and those new to Indian food because of its balanced, creamy sauce. It is a staple on Indian restaurant menus worldwide and is equally popular at home, where each family adds its own twist. Whether served at a festive gathering or a casual dinner, Butter Chicken continues to win hearts with its timeless charm and unforgettable taste.`,
  },
  {
    id: 3,
    name: "Sushi Platter",
    category: "Appetizer",
    cuisineType: "Japanese",
    difficultyLevel: "Hard",
    rating: 3.5,
    image: "https://t4.ftcdn.net/jpg/03/61/86/91/360_F_361869194_7JGmIOSj2iUNi0AYoVhVyhKvaN6PkOah.jpg",
    chef: "Chef Sato Kenji",
    time: "50 mins",
    ingredients: ["Rice", "Seaweed", "Fish", "Vegetables", "Soy Sauce"],
    tags: ["Seafood", "Healthy", "Traditional"],
    dietaryRestrictions:"Contains dairy, not vegetarian, not vegan.",
    description: `Butter Chicken — a beloved classic of Indian cuisine — is a rich and indulgent dish that perfectly balances bold spices with creamy textures. Originating in the kitchens of Delhi in the 1950s, this dish was created to transform leftover tandoori chicken into a luscious curry. Tender pieces of marinated chicken are first roasted or grilled to achieve a slightly smoky flavor. These succulent morsels are then simmered in a velvety tomato-based sauce enriched with butter, cream, and a harmonious blend of spices such as garam masala, cumin, coriander, and fenugreek. The result is an irresistible combination of mildly spiced, slightly sweet, and deeply savory flavors that pair beautifully with naan, roti, or fragrant basmati rice.

    Butter Chicken is not just a meal — it’s an experience that reflects the culinary diversity of India. The dish appeals to both spice lovers and those new to Indian food because of its balanced, creamy sauce. It is a staple on Indian restaurant menus worldwide and is equally popular at home, where each family adds its own twist. Whether served at a festive gathering or a casual dinner, Butter Chicken continues to win hearts with its timeless charm and unforgettable taste.`,
  },
  {
    id: 4,
    name: "Tacos Al Pastor",
    category: "Street Food",
    cuisineType: "Mexican",
    difficultyLevel: "Easy",
    rating: 4.0,
    image: "https://t4.ftcdn.net/jpg/03/61/86/91/360_F_361869194_7JGmIOSj2iUNi0AYoVhVyhKvaN6PkOah.jpg",
    chef: "Chef Maria Lopez",
    time: "25 mins",
    ingredients: ["Pork", "Pineapple", "Tortilla", "Onion", "Cilantro"],
    tags: ["Street Food", "Spicy", "Quick"],
    dietaryRestrictions:"Contains dairy, not vegetarian, not vegan.",
    description: `Butter Chicken — a beloved classic of Indian cuisine — is a rich and indulgent dish that perfectly balances bold spices with creamy textures. Originating in the kitchens of Delhi in the 1950s, this dish was created to transform leftover tandoori chicken into a luscious curry. Tender pieces of marinated chicken are first roasted or grilled to achieve a slightly smoky flavor. These succulent morsels are then simmered in a velvety tomato-based sauce enriched with butter, cream, and a harmonious blend of spices such as garam masala, cumin, coriander, and fenugreek. The result is an irresistible combination of mildly spiced, slightly sweet, and deeply savory flavors that pair beautifully with naan, roti, or fragrant basmati rice.

    Butter Chicken is not just a meal — it’s an experience that reflects the culinary diversity of India. The dish appeals to both spice lovers and those new to Indian food because of its balanced, creamy sauce. It is a staple on Indian restaurant menus worldwide and is equally popular at home, where each family adds its own twist. Whether served at a festive gathering or a casual dinner, Butter Chicken continues to win hearts with its timeless charm and unforgettable taste.`,
  },
  {
    id: 5,
    name: "Pad Thai",
    category: "Main Course",
    cuisineType: "Thai",
    difficultyLevel: "Medium",
    rating: 3.9,
    image: "https://t4.ftcdn.net/jpg/03/61/86/91/360_F_361869194_7JGmIOSj2iUNi0AYoVhVyhKvaN6PkOah.jpg",
    chef: "Chef Anong Srisuk",
    time: "35 mins",
    ingredients: ["Rice Noodles", "Shrimp", "Egg", "Tofu", "Peanuts", "Tamarind Sauce"],
    tags: ["Noodles", "Sweet", "Tangy"],
    dietaryRestrictions:"Contains dairy, not vegetarian, not vegan.",
    description: `Butter Chicken — a beloved classic of Indian cuisine — is a rich and indulgent dish that perfectly balances bold spices with creamy textures. Originating in the kitchens of Delhi in the 1950s, this dish was created to transform leftover tandoori chicken into a luscious curry. Tender pieces of marinated chicken are first roasted or grilled to achieve a slightly smoky flavor. These succulent morsels are then simmered in a velvety tomato-based sauce enriched with butter, cream, and a harmonious blend of spices such as garam masala, cumin, coriander, and fenugreek. The result is an irresistible combination of mildly spiced, slightly sweet, and deeply savory flavors that pair beautifully with naan, roti, or fragrant basmati rice.

    Butter Chicken is not just a meal — it’s an experience that reflects the culinary diversity of India. The dish appeals to both spice lovers and those new to Indian food because of its balanced, creamy sauce. It is a staple on Indian restaurant menus worldwide and is equally popular at home, where each family adds its own twist. Whether served at a festive gathering or a casual dinner, Butter Chicken continues to win hearts with its timeless charm and unforgettable taste.`,
  },
  {
    id: 6,
    name: "Grilled Salmon",
    category: "Main Course",
    cuisineType: "Indian",
    difficultyLevel: "Medium",
    rating: 4.7,
    image: "https://t4.ftcdn.net/jpg/03/61/86/91/360_F_361869194_7JGmIOSj2iUNi0AYoVhVyhKvaN6PkOah.jpg",
    chef: "Chef Laura Johnson",
    time: "40 mins",
    ingredients: ["Salmon", "Lemon", "Garlic", "Herbs", "Olive Oil"],
    tags: ["Healthy", "Grilled", "Seafood"],
    dietaryRestrictions:"Contains dairy, not vegetarian, not vegan.",
    description: `Butter Chicken — a beloved classic of Indian cuisine — is a rich and indulgent dish that perfectly balances bold spices with creamy textures. Originating in the kitchens of Delhi in the 1950s, this dish was created to transform leftover tandoori chicken into a luscious curry. Tender pieces of marinated chicken are first roasted or grilled to achieve a slightly smoky flavor. These succulent morsels are then simmered in a velvety tomato-based sauce enriched with butter, cream, and a harmonious blend of spices such as garam masala, cumin, coriander, and fenugreek. The result is an irresistible combination of mildly spiced, slightly sweet, and deeply savory flavors that pair beautifully with naan, roti, or fragrant basmati rice.

    Butter Chicken is not just a meal — it’s an experience that reflects the culinary diversity of India. The dish appeals to both spice lovers and those new to Indian food because of its balanced, creamy sauce. It is a staple on Indian restaurant menus worldwide and is equally popular at home, where each family adds its own twist. Whether served at a festive gathering or a casual dinner, Butter Chicken continues to win hearts with its timeless charm and unforgettable taste.`,
  },
  {
    id: 7,
    name: "Peking Duck",
    category: "Main Course",
    cuisineType: "Chinese",
    difficultyLevel: "Hard",
    rating: 4.1,
    image: "https://t4.ftcdn.net/jpg/03/61/86/91/360_F_361869194_7JGmIOSj2iUNi0AYoVhVyhKvaN6PkOah.jpg",
    chef: "Chef Wong Wei",
    time: "90 mins",
    ingredients: ["Duck", "Hoisin Sauce", "Cucumber", "Scallions", "Pancakes"],
    tags: ["Crispy", "Classic", "Festive"],
    dietaryRestrictions:"Contains dairy, not vegetarian, not vegan.",
    description: `Butter Chicken — a beloved classic of Indian cuisine — is a rich and indulgent dish that perfectly balances bold spices with creamy textures. Originating in the kitchens of Delhi in the 1950s, this dish was created to transform leftover tandoori chicken into a luscious curry. Tender pieces of marinated chicken are first roasted or grilled to achieve a slightly smoky flavor. These succulent morsels are then simmered in a velvety tomato-based sauce enriched with butter, cream, and a harmonious blend of spices such as garam masala, cumin, coriander, and fenugreek. The result is an irresistible combination of mildly spiced, slightly sweet, and deeply savory flavors that pair beautifully with naan, roti, or fragrant basmati rice.

    Butter Chicken is not just a meal — it’s an experience that reflects the culinary diversity of India. The dish appeals to both spice lovers and those new to Indian food because of its balanced, creamy sauce. It is a staple on Indian restaurant menus worldwide and is equally popular at home, where each family adds its own twist. Whether served at a festive gathering or a casual dinner, Butter Chicken continues to win hearts with its timeless charm and unforgettable taste.`,
  },
  {
    id: 8,
    name: "Falafel Wrap",
    category: "Street Food",
    cuisineType: "Mexican",
    difficultyLevel: "Easy",
    rating: 3.8,
    image: "https://t4.ftcdn.net/jpg/03/61/86/91/360_F_361869194_7JGmIOSj2iUNi0AYoVhVyhKvaN6PkOah.jpg",
    chef: "Chef Leila Hassan",
    time: "20 mins",
    ingredients: ["Chickpeas", "Garlic", "Herbs", "Tahini", "Tortilla"],
    tags: ["Vegan", "Healthy", "Quick"],
    dietaryRestrictions:"Contains dairy, not vegetarian, not vegan.",
    description: `Butter Chicken — a beloved classic of Indian cuisine — is a rich and indulgent dish that perfectly balances bold spices with creamy textures. Originating in the kitchens of Delhi in the 1950s, this dish was created to transform leftover tandoori chicken into a luscious curry. Tender pieces of marinated chicken are first roasted or grilled to achieve a slightly smoky flavor. These succulent morsels are then simmered in a velvety tomato-based sauce enriched with butter, cream, and a harmonious blend of spices such as garam masala, cumin, coriander, and fenugreek. The result is an irresistible combination of mildly spiced, slightly sweet, and deeply savory flavors that pair beautifully with naan, roti, or fragrant basmati rice.

    Butter Chicken is not just a meal — it’s an experience that reflects the culinary diversity of India. The dish appeals to both spice lovers and those new to Indian food because of its balanced, creamy sauce. It is a staple on Indian restaurant menus worldwide and is equally popular at home, where each family adds its own twist. Whether served at a festive gathering or a casual dinner, Butter Chicken continues to win hearts with its timeless charm and unforgettable taste.`,
  },
  {
    id: 9,
    name: "Beef Stroganoff",
    category: "Main Course",
    cuisineType: "Indian",
    difficultyLevel: "Medium",
    rating: 4.6,
    image: "https://t4.ftcdn.net/jpg/03/61/86/91/360_F_361869194_7JGmIOSj2iUNi0AYoVhVyhKvaN6PkOah.jpg",
    chef: "Chef Dmitri Ivanov",
    time: "60 mins",
    ingredients: ["Beef", "Mushrooms", "Onion", "Sour Cream", "Pasta"],
    tags: ["Comfort Food", "Rich", "Creamy"],
    dietaryRestrictions:"Contains dairy, not vegetarian, not vegan.",
    description: `Butter Chicken — a beloved classic of Indian cuisine — is a rich and indulgent dish that perfectly balances bold spices with creamy textures. Originating in the kitchens of Delhi in the 1950s, this dish was created to transform leftover tandoori chicken into a luscious curry. Tender pieces of marinated chicken are first roasted or grilled to achieve a slightly smoky flavor. These succulent morsels are then simmered in a velvety tomato-based sauce enriched with butter, cream, and a harmonious blend of spices such as garam masala, cumin, coriander, and fenugreek. The result is an irresistible combination of mildly spiced, slightly sweet, and deeply savory flavors that pair beautifully with naan, roti, or fragrant basmati rice.

    Butter Chicken is not just a meal — it’s an experience that reflects the culinary diversity of India. The dish appeals to both spice lovers and those new to Indian food because of its balanced, creamy sauce. It is a staple on Indian restaurant menus worldwide and is equally popular at home, where each family adds its own twist. Whether served at a festive gathering or a casual dinner, Butter Chicken continues to win hearts with its timeless charm and unforgettable taste.`,
  },
  {
    id: 10,
    name: "Greek Salad",
    category: "Appetizer",
    cuisineType: "Thai",
    difficultyLevel: "Easy",
    rating: 4.3,
    image: "https://t4.ftcdn.net/jpg/03/61/86/91/360_F_361869194_7JGmIOSj2iUNi0AYoVhVyhKvaN6PkOah.jpg",
    chef: "Chef Nikos Papadopoulos",
    time: "15 mins",
    ingredients: ["Cucumber", "Tomatoes", "Feta Cheese", "Olives", "Olive Oil"],
    tags: ["Healthy", "Fresh", "Vegetarian"],
    dietaryRestrictions:"Contains dairy, not vegetarian, not vegan.",
    description: `Butter Chicken — a beloved classic of Indian cuisine — is a rich and indulgent dish that perfectly balances bold spices with creamy textures. Originating in the kitchens of Delhi in the 1950s, this dish was created to transform leftover tandoori chicken into a luscious curry. Tender pieces of marinated chicken are first roasted or grilled to achieve a slightly smoky flavor. These succulent morsels are then simmered in a velvety tomato-based sauce enriched with butter, cream, and a harmonious blend of spices such as garam masala, cumin, coriander, and fenugreek. The result is an irresistible combination of mildly spiced, slightly sweet, and deeply savory flavors that pair beautifully with naan, roti, or fragrant basmati rice.

    Butter Chicken is not just a meal — it’s an experience that reflects the culinary diversity of India. The dish appeals to both spice lovers and those new to Indian food because of its balanced, creamy sauce. It is a staple on Indian restaurant menus worldwide and is equally popular at home, where each family adds its own twist. Whether served at a festive gathering or a casual dinner, Butter Chicken continues to win hearts with its timeless charm and unforgettable taste.`,
  }
];

export default dishes;
