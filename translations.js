// translations.js
const translations = {
    // Общие фразы
    common: {
        ru: {
            siteTitle: "Кулинарные заметки",
            backToRecipes: "Вернуться к рецептам",
            footer: "Кулинарные заметки",
            footerNote: "С любовью к вкусной еде ❤️"
        },
        en: {
            siteTitle: "Cooking Notes",
            backToRecipes: "Back to recipes",
            footer: "Cooking Notes",
            footerNote: "With love for delicious food ❤️"
        }
    },
    
    // Категории
    categories: {
        ru: [
            "Завтраки", "Закуски", "Супы", 
            "Основные блюда", "Гарниры", "Десерты", "Кремы/Соусы"
        ],
        en: [
            "Breakfast", "Snacks", "Soups",
            "Main Courses", "Side Dishes", "Desserts", "Creams/Sauces", 
        ]
    },
    
    // Рецепты (для главной страницы)
    recipes: {
        // Завтраки
        "Американские оладья": {
            ru: "Американские оладья",
            en: "American pancakes"
        },
        "Овсянка": {
            ru: "Овсянка",
            en: "Oat porridge"
        },
        "Яйца с сосикой и томатами": {
            ru: "Яйца с сосикой и томатами",
            en: "Eggs with sausage and tomatoes"
        },
        
        // Закуска
        "Греческий салат": {  
            ru: "Греческий салат",
            en: "Greek Salad"
        },
        "Жареные кабачки": {
            ru: "Жареные кабачки",
            en: "Fried Zucchini"
        },
        "Зеленый салат с йогуртовым соусом": {
            ru: "Зеленый салат с йогуртовым соусом",
            en: "Green Salad with Yogurt Dressing"
        },
        "Маринованные грибы": {
            ru: "Маринованные грибы",
            en: "Marinated mushrooms"
        },
        "Маринованные огурцы": {
            ru: "Маринованные огурцы",
            en: "Quick Pickled Cucumbers"
        },
        "Салатные листья с бальзамиком": {  
            ru: "Салатные листья с бальзамиком",
            en: "Salad Leaves with Balsamic Dressing"
            },
        // Супы
        "Название супа": {
            ru: "Название супа",
            en: "Soup name"
        },
        // Основные блюда
        "Название основного блюда": {
            ru: "Название основного блюда",
            en: "Main dish name"
        },
        // Гарниры
        "Название гарнира": {
            ru: "Название гарнира",
            en: "Side dish name"
        },
        // Десерты
        "Название Десерта": {
            ru: "Название Десерта",
            en: "Dessert name"
        },
        // Кремы/соусы
        "Название кремы": {
            ru: "Название кремы",
            en: "Sauce name"
        },
    },
    
    // Время и порции
    recipeMeta: {
        ru: {
            time: "мин",
            active: "активных",
            servings: "порций"
        },
        en: {
            time: "minutes",
            active: "active time", 
            servings: "servings"
        }
    },
    
    // Секции страницы
    sections: {
        ru: {
            ingredients: "Ингредиенты",
            instructions: "Способ приготовления",
            tip: "Совет"
        },
        en: {
            ingredients: "Ingredients",
            instructions: "Instructions",
            tip: "Tip"
        }
    },
    // =================================

    // Детали рецептов (для страниц рецептов)
    recipeDetails: {
        "breakfast_american_style_pancakes": {
            ru: {
                title: "Американские оладья",
                meta: {
                    time: "45 минут",
                    servings: "3-4 порции"
                },
                ingredients: [
                    "330 мл теплого кефира",
                    "200 г муки",
                    "1 яйцо",
                    "1,5 ст.л. сахара",
                    "2 ст.л. подсолнечного масла",
                    "1 ч.л. разрыхлителя",
                    "1/2 ч.л. соды",
                    "1/3 ч.л. соли"
                ],
                instructions: [
                    "Смешайте кефир, яйцо, сахар и растопленное масло до однородной консистенции.",
                    "В отдельной миске соедините муку, разрыхлитель, соду и соль.",
                    "Добавьте сухие ингредиенты к кефирной смеси и быстро перемешайте. Небольшие комочки допустимы.",
                    "Не перемешивая повторно, переложите тесто в кондитерский мешок или оставьте в миске на 15–30 минут.",
                    "Хорошо разогрейте сковороду и выпекайте на среднем огне на сухой поверхности, не накрывая крышкой."
                ],
                note: "Оладья удобно высаживать кондитерским мешком, так они получаются круглые и одного размера."
            },
            en: {
                title: "American Pancakes",
                meta: {
                    time: "45 minutes",
                    servings: "Serves 3-4"
                },
                ingredients: [
                    "330 ml warm kefir",
                    "200 g all-purpose flour",
                    "1 egg",
                    "1 1/2 tbsp sugar",
                    "2 tbsp sunflower oil",
                    "1 tsp baking powder",
                    "1/2 tsp baking soda",
                    "1/3 tsp salt"
                ],
                instructions: [
                    "Whisk together the warm kefir, egg, sugar, and oil until smooth.",
                    "In a separate bowl, combine the flour, baking powder, baking soda, and salt.",
                    "Add the dry ingredients to the kefir mixture and stir briefly until just combined. A few small lumps are perfectly fine.",
                    "Without stirring again, transfer the batter to a piping bag or leave it in the bowl to rest for 15-30 minutes.",
                    "Heat a pan well and cook over medium heat on a dry surface, uncovered, until golden and cooked through."
                ],
                note: "Using a piping bag makes it easier to form evenly sized, perfectly round pancakes."
            }
        },
        "breakfast_oat_porridge": {
            ru: {
                title: "Овсянка",
                meta: {
                    time: "15 минут",
                    servings: "1 порция"
                },
                ingredients: [
                    "330 мл теплого кефира",
                    "200 г муки",
                    "1 яйцо",
                    "1,5 ст.л. сахара",
                    "2 ст.л. подсолнечного масла",
                    "1 ч.л. разрыхлителя",
                    "1/2 ч.л. соды",
                    "1/3 ч.л. соли"
                ],
                instructions: [
                    "На 1/3 стакана овсяных хлопьев возьмите 2/3 стакана воды и 1/3 стакана молока.",
                    "Доведите воду с молоком до кипения. Чтобы ускорить процесс, можно использовать заранее вскипяченную воду.",
                    "Добавьте овсяные хлопья, уменьшите огонь до среднего и варите, регулярно помешивая. По мере загустения перемешивайте чаще.",
                    "В конце приготовления добавьте соль, подсластитель и масло, аккуратно перемешайте.",
                    "Снимите кастрюлю с плиты и накройте крышкой",
                    "Перед подачей дайте каше настояться 5 минут.",
                ],
                note: "Сгущенка дает более нежную сладость по сравнению с сахаром. Также можно добавлять разные виды курдов или джемов."
            },
            en: {
                title: "Oat Porridge",
                meta: {
                    time: "15 minutes",
                    servings: "Serves 1"
                },
                ingredients: [
                    "60 g rolled oats",
                    "280 g water",
                    "145 g milk",
                    "5 g butter",
                    "A pinch of salt",
                    "Sweetener to taste (optional)"
                ],
                instructions: [
                    "For every 1/3 cup of oats, use 2/3 cup of water and 1/3 cup of milk.",
                    "Bring the water and milk to a boil. To speed up the process, you can use pre-boiled water.",
                    "Add the oats, reduce the heat to medium, and cook while stirring regularly. Stir more frequently as the porridge thickens.",
                    "Toward the end of cooking, add the salt, sweetener, and butter, and stir gently to combine.",
                    "Remove the saucepan from the heat and cover with lid.",
                    "Let the porridge rest for 5 minutes before serving."
                ],
                
                note: "Sweetened condensed milk provides a softer, more delicate sweetness than sugar. You can also serve the porridge with different types of curds or jams."
            }
        },
        "breakfast_eggs_sausage_tomato": {
            ru: {
                title: "Яйца с сосикой и томатами",
                meta: {
                    time: "10 минут",
                    servings: "1 порция"
                },
                ingredients: [
                    "2 яйца",
                    "1 сосиска",
                    "1 небольшой помидор",
                    "Соль, перец, копченая паприка по вкусу"
                ],
                instructions: [
                    "Нарежьте сосиску и помидор.",
                    "На небольшом огне сначала обжарьте сосиску, затем добавьте помидор и готовьте еще 1–2 минуты.",
                    "В миске взбейте яйца, добавьте специи по вкусу.",
                    "Вылейте яичную смесь в сковороду и готовьте на медленном огне, периодически помешивая, до полной готовности."
                ],
                note: "В целом, в яйца можете добавить все, что залежалоь в холодильнике, например, сыр или зелень."
            },
            en: {
                title: "Eggs with Sausage and Tomatoes",
                meta: {
                    time: "10 minutes",
                    servings: "Serves 1"
                },
                ingredients: [
                    "2 eggs",
                    "1 sausage",
                    "1 small tomato",
                    "Salt, black pepper, and smoked paprika to taste"
                ],
                instructions: [
                    "Slice the sausage and the tomato.",
                    "In a pan over low heat, cook the sausage first, then add the tomato and sauté for another 1–2 minutes.",
                    "In a bowl, whisk the eggs and season with salt, pepper, and smoked paprika.",
                    "Pour the egg mixture into the pan and cook over low heat, stirring occasionally, until fully set."
                ],
                note: "Feel free to add anything you have on hand — grated cheese, fresh herbs, or leftover vegetables work especially well."
            }
        },
        "snacks_green_salad_with_balsamic":  {
            ru: {
                title: "Салатные листья с бальзамиком",
                meta:  {
                    time: "5 мин",
                    servings: "2 порции"
                  },
                ingredients: [
                    "100 г зелёного салата", 
                    "5 г оливкового масла", 
                    "5 г бальзамического крема", 

                ],
                instructions: [
                    "Выложите зелёные листья в миску.", 
                    "Добавьте оливковое масло и бальзамический крем, аккуратно перемешайте.", 

                ],
                note: "Можно сбрызнуть капелькой лимона для кокетства."
             },
            en: {
                title: "Salad Leaves with Balsamic Dressing",
                meta:  {
                    time: "5 minutes",
                    servings: "Serves 2"
                  },
                ingredients: [
                "100 g green salad", 
"5 g olive oil", 
"5 g balsamic cream", 

                ],
                instructions: [
                "Place the green leaves in a bowl.", 
"Add the olive oil and balsamic cream, and mix gently.", 

                ],
                note: "You can spritz a little lemon for a touch of flair."
             }
        },
        "snacks_greek_salad":  {
            ru: {
                title: "Греческий салат",
                meta:  {
                    time: "10 мин",
                    servings: "2 порции"
                  },
                ingredients: [
                "2 средних огурца", 
"1 помидор", 
"1 сладкий перец (не болгарский)", 
"1/2 средней красной луковицы", 
"50 г феты", 
"2 столовые ложки оливкового масла", 
"Соль, орегано по вкусу", 

                ],
                instructions: [
                "Нарежьте все овощи и смешайте их в миске, добавьте соль и орегано.", 
"Выложите целый кусок феты сверху овощей и полейте оливковым маслом.", 
"Разломайте фету прямо в миске ложкой.", 

                ],
                note: "Огурец обязательно очистить от кожуры, а фету ни в коем случае не нарезать заранее. Можете добавить 50 г оливок Каламата."
             },
            en: {
                title: "Greek Salad",
                meta:  {
                    time: "10 minutes",
                    servings: "Serves 2"
                  },
                ingredients: [
                "2 medium cucumbers", 
"1 tomato", 
"1 sweet pepper (not bell pepper)", 
"1/2 medium red onion", 
"50 g feta cheese", 
"2 tablespoons olive oil", 
"Salt and oregano to taste", 

                ],
                instructions: [
                "Chop all the vegetables and combine them in a bowl. Add salt and oregano to taste.", 
"Place a whole piece of feta on top of the vegetables and drizzle with olive oil.", 
"Break the feta directly in the bowl using a spoon.", 

                ],
                note: "Be sure to peel the cucumbers, and do not cut the feta in advance. You can also add 50 g of Kalamata olives."
             }
        },


    }
};