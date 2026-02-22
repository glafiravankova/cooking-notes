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
        "Американские оладьи": {
            ru: "Американские оладьи",
            en: "American Pancakes"
        },
        "Блины": {  
            ru: "Блины",
            en: "Russian Crepes"
        },
        "Овсянка": {
            ru: "Овсянка",
            en: "Oat Porridge"
        },
        "Яйца с сосиской и томатами": {
            ru: "Яйца с сосиской и томатами",
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
            en: "Marinated Mushrooms"
        },
        "Маринованные огурцы": {  
            ru: "Маринованные огурцы",
            en: "Marinated Cucumbers"
        },
        "Салатные листья с бальзамиком": {  
            ru: "Салатные листья с бальзамиком",
            en: "Salad Leaves with Balsamic Dressing"
        }, 
        "Салат из капусты с морковью": {  
            ru: "Салат из капусты с морковью",
            en: "Cabbage and Carrot Salad"
        },
        // Супы
        "Название супа": {
            ru: "Название супа",
            en: "Soup name"
        },
        // Основные блюда
        "Курица карри": {  
            ru: "Курица карри",
            en: "Chicken Curry"
        },
        "Орзо с греческой колбаской": {  
            ru: "Орзо с греческой колбаской",
            en: "Orzo with Greek Sausage"
        },
        "Паста карбонара": {  
            ru: "Паста карбонара",
            en: "Pasta Carbonara"
        },
        "Пельмени": {  
            ru: "Пельмени",
            en: "Pelmeni"
        },
        // Гарниры
        "Название гарнира": {
            ru: "Название гарнира",
            en: "Side dish name"
        },
        // Десерты
        "Банановый хлеб": {  
            ru: "Банановый хлеб",
            en: "Banana Bread"
        },
        "Безе": {  
            ru: "Безе",
            en: "Meringue"
        },
        "Блинный торт": {  
            ru: "Блинный торт",
            en: "Pancake Cake"
        },
        "Капекейки с клубничной начинкой и крем-чизом": {  
            ru: "Капекейки с клубничной начинкой и крем-чизом",
            en: "Cupcakes with Strawberry Filling and Cream Cheese Frosting"
        },
        "Наполеон с малиновым джемом в стаканчике": {  
            ru: "Наполеон с малиновым джемом в стаканчике",
            en: "Napoleon with Raspberry Jam in a Cup"
        },
        "Панна-котта c клубничным джемом": {  
                ru: "Панна-котта c клубничным джемом",
                en: "Panna Cotta with Strawberry Jam"
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
                title: "Американские оладьи",
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
                    "Не перемешивая повторно, переложите тесто в кондитерский мешок или оставьте в миске на 15-30 минут.",
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
        "breakfast_bliny":  {
            ru: {
                title: "Блины",
                meta:  {
                    time: "90 мин",
                    servings: "~10 блинчиков"
                  },
                ingredients: [
                "2 яйца", 
                "40 г сахара", 
                "300 мл молока", 
                "125 г муки", 
                "90 мл кипятка",
                "2 ст.л. растительного масла", 
                "Щепотка соли", 
                "Подсолнечное масло, чтобы периодически смазывать сковородку", 
                "Сливочное масло, чтобы смазавать готовый блин", 

                ],
                instructions: [
                "Взбейте яйца с сахаром и солью, добавьте половину молока.", 
                "Постепенно всыпьте муку, тщательно перемешивая.", 
                "Влейте оставшееся молоко.", 
                "Затем, помешивая массу, тонкой струйкой влейте крутой кипяток, добавьте масло, перемешайте и оставьте тесто на 20-30 минут.", 
                "Выпекайте блины на среднем огне, смазав сковороду растительным маслом.", 
                "Переворачивайте блины силиконовой лопаткой.", 
                "Готовые блины смазывайте сливочным маслом и складывайте стопкой, накрыв полотенцем.", 

                ],
                note: "Время готовки можно значительно сократить, если жарить блинчике на двух или трех сковородках."
             },
            en: {
                title: "Russian Crepes",
                meta:  {
                    time: "90 min",
                    servings: "~10 crepes"
                  },
                ingredients: [
                "2 eggs", 
                "40 g sugar", 
                "300 ml milk", 
                "125 g flour", 
                "90 ml boiling water",
                "2 tbsp vegetable oil", 
                "A pinch of salt", 
                "Sunflower oil, for greasing the pan as needed", 
                "Butter, for brushing the finished pancakes", 

                ],
                instructions: [
                "Whisk the eggs with the sugar and salt, then add half of the milk.", 
                "Gradually sift in the flour, mixing thoroughly to achieve a smooth batter.", 
                "Pour in the remaining milk.", 
                "Slowly stream in the freshly boiled water, stirring constantly, add oil, mix and then let the batter rest for 20–30 minutes.", 
                "Cook the pancakes over medium heat, lightly greasing the pan with vegetable oil.", 
                "Flip the pancakes using a silicone spatula.", 
                "Brush the finished pancakes with butter and stack them, covering with a towel to keep warm.", 

                ],
                note: "Cooking time can be significantly reduced by using two or three pans simultaneously."
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
                    "60 г овсянки",
                    "280 г воды",
                    "145 г молока",
                    "5 г сливочного масла",
                    "Щепотка соли",
                    "Подсластители по вкусу (необязательно)"
                ],
                instructions: [
                    "На 1/3 стакана овсяных хлопьев возьмите 2/3 стакана воды и 1/3 стакана молока.",
                    "Доведите воду с молоком до кипения. Чтобы ускорить процесс, можно использовать заранее вскипяченную воду.",
                    "Добавьте овсяные хлопья, уменьшите огонь до среднего и варите, регулярно помешивая. По мере загустения перемешивайте чаще.",
                    "В конце приготовления добавьте соль, подсластитель и масло, аккуратно перемешайте.",
                    "Снимите кастрюлю с плиты и накройте крышкой.",
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
                title: "Яйца с сосиской и томатами",
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
                    "100 г зеленого салата", 
                    "5 г оливкового масла", 
                    "5 г бальзамического крема", 

                ],
                instructions: [
                    "Выложите зеленые листья в миску.", 
                    "Добавьте оливковое масло и бальзамический крем, перемешайте.", 

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
                            "1 перец Рамиро (не болгарский)", 
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
        "snacks_fried_zucchini":  {
            ru: {
                title: "Жареные кабачки",
                meta:  {
                    time: "20 мин",
                    servings: "2-4 порции"
                  },
                ingredients: [
                "1 средний кабачок", 
                "Подсолнечное масло - для жарки", 

                ],
                instructions: [
                "Очистите кабачок от кожуры и нарежьте тонкими кружочками.", 
                "Разогрейте сковороду и добавьте небольшое количество подсолнечного масла.", 
                "Выложите кабачок в один слой.", 
                "Обжаривайте без крышки с обеих сторон до золотистой корочки.", 

                ],
                note: "Удобнее переворачивать кружочки двумя лопатками: поддевать мягкой силиконовой и придерживать более плотной."
             },
            en: {
                title: "Fried Zucchini",
                meta:  {
                    time: "20 min",
                    servings: "Serves 2-4"
                  },
                ingredients: [
                "1 medium courgette", 
                "Мegetable oil - for frying", 

                ],
                instructions: [
                "Peel the courgette and slice it into thin rounds.", 
                "Heat a frying pan and add a small amount of sunflower oil.", 
                "Arrange the courgette slices in a single layer.", 
                "Fry uncovered on both sides until golden.", 

                ],
                note: "It is easier to turn the slices using two spatulas: lift with a soft silicone one and steady with a firmer spatula."
             }
        },
        "snacks_salad_with_yogurt_dressing":  {
            ru: {
                title: "Зеленый салат с йогуртовым соусом",
                meta:  {
                    time: "7 мин",
                    servings: "2 порции"
                  },
                ingredients: [
                "150 г зеленых листьев (по выбору)", 
                "100 г греческого йогурта", 
                "1 зубчик чеснока", 
                "Небольшой пучок укропа", 
                "Соль, сахар, по вкусу", 

                ],
                instructions: [
                "Промойте, обсушите и нарежьте салатные листья.", 
                "Измельчите укроп, натрите чеснок, добавьте йогурт, соль и сахар по вкусу, перемешайте.", 
                "Заправку для салата добавьте прямо перед подачей на стол.", 

                ],
                note: "Если за столом присутствуют люди с разными предпочтениями по чесноку в соусе, подавайте соус отдельно."
             },
            en: {
                title: "Green Salad with Yogurt Dressing",
                meta:  {
                    time: "7 minutes",
                    servings: "Serves 2"
                  },
                ingredients: [
                "150 g green leaves (of your choice)", 
                "100 g Greek yogurt", 
                "1 clove of garlic", 
                "A small bunch of dill", 
                "Salt and sugar, to taste", 

                ],
                instructions: [
                "Rinse, dry, and slice the salad leaves.", 
                "Finely chop the dill, grate the garlic, then add the yogurt, salt, and sugar to taste; mix well.", 
                "The dressing should be added to the salad immediately before serving.", 

                ],
                note: "If your guests have different preferences regarding garlic in the dressing, serve the sauce separately."
             }
        },
        "snacks_marinated_mashrooms":  {
            ru: {
                title: "Маринованные грибы",
                meta:  {
                    time: "60 мин",
                    servings: "4-6 порций"
                  },
                ingredients: [
                "500 г шампиньонов", 
                "1 болгарский перец", 
                "1 небольшой красный лук", 
                "3 зубчика чеснока", 
                "1 пучок петрушки", 
                "50 г соевого соуса", 
                "1/2 ст. л. сахара", 
                "1 ст. л. зернистой горчицы", 
                "1 ст. л. растительного масла", 
                "1 ч. л. лимонного сока", 
                "1/2 ч. л. соли", 

                ],
                instructions: [
                "Тщательно вымойте шампиньоны. Если грибы крупные, разрежьте их на четвертинки.", 
                "Поместите шампиньоны в кастрюлю, залейте водой, доведите до кипения и варите в течение 10 минут.", 
                "Тем временем нарежьте лук полукольцами, чеснок и болгарский перец нарежьте тонкими полосками.", 
                "Разложите сваренные шампиньоны на ровной поверхности, чтобы они быстрее остыли.", 
                "После полного остывания добавьте к грибам нарезанные овощи, растительное масло, зернистую горчицу, лимонный сок, соевый соус, соль и сахар.", 
                "Переложите все в банку, закройте крышкой и оставьте мариноваться в холодильнике.", 

                ],
                note: "Грибы уже будут вкусные через час, но через 12-24 часа их вкус станет более нежным."
             },
            en: {
                title: "Marinated Mushrooms",
                meta:  {
                    time: "60 minutes",
                    servings: "Serves 4-6"
                  },
                ingredients: [
                "500 g button mushrooms", 
                "1 bell pepper", 
                "1 small red onion", 
                "3 cloves of garlic", 
                "1 bunch of parsley", 
                "50 g soy sauce", 
                "1/2 tbsp sugar", 
                "1 tbsp wholegrain mustard", 
                "1 tbsp vegetable oil", 
                "1 tsp lemon juice", 
                "1/2 tsp salt", 

                ],
                instructions: [
                "Wash the mushrooms thoroughly. If they are large, cut them into quarters.", 
                "Place the mushrooms in a saucepan, cover with water, bring to a boil, and cook for 10 minutes.", 
                "Meanwhile, finely chop the garlic and onion, and slice the bell pepper into thin strips.", 
                "Spread the cooked mushrooms out on a flat surface to cool more quickly.", 
                "Once completely cooled (about 10-15 minutes), add the chopped vegetables, vegetable oil, wholegrain mustard, lemon juice, soy sauce, salt, and sugar.", 
                "Transfer everything to a jar, seal with a lid, and leave to marinate in the refrigerator.", 

                ],
                note: "The mushrooms are ready after one hour, but after 12-24 hours their flavour becomes more delicate."
             }
        },
        "snacks_semi_salted_cucumbers":  {
            ru: {
                title: "Маринованные огурцы",
                meta:  {
                    time: "65 мин",
                    servings: "2 порции"
                  },
                ingredients: [
                "2 свежих огурца", 
                "1 небольшой пучок укропа", 
                "1 зубчик чеснока", 
                "Соль, сахар, по вкусу", 

                ],
                instructions: [
                "Нарежьте огурец, натрите чеснок и измельчите укроп.", 
                "Соедините все ингредиенты в миске, добавьте соль и щепотку сахара, перемешайте.", 
                "Уберите в холодильник на 1 час.", 

                ],
                note: "Можете добавить дополнительные специи по вкусу, например, гвоздику."
             },
            en: {
                title: "Marinated Cucumbers",
                meta:  {
                    time: "65 minutes",
                    servings: "Serves 2"
                  },
                ingredients: [
                "2 fresh cucumbers", 
                "1 small bunch of dill", 
                "1 clove of garlic", 
                "Salt and sugar, to taste", 

                ],
                instructions: [
                "Slice the cucumbers, grate the garlic, and finely chop the dill.", 
                "Combine all the ingredients in a bowl, add salt and a pinch of sugar, and mix.", 
                "Refrigerate for 1 hour before serving.", 

                ],
                note: "You may add additional spices to taste, such as cloves."
             }
        },
        "snaks_salad_carrot_cabbabege":  {
            ru: {
                title: "Салат из капусты с морковью",
                meta:  {
                    time: "7 мин",
                    servings: "2 порции"
                  },
                ingredients: [
                "150 г капусты", 
                "50 г моркови", 
                "5 мл растительного масла", 
                "Щепотка соли", 

                ],
                instructions: [
                "Мелко нашинкуйте капусту и слегка помните ее руками.", 
                "Натрите морковь на терке.", 
                "Объедините все в миске и хорошо перемешайте.", 

                ],
                note: "Можно добавить чуть-чуть сахара, если капуста горчит."
             },
            en: {
                title: "Cabbage and Carrot Salad",
                meta:  {
                    time: "7 min",
                    servings: "Serves 2"
                  },
                ingredients: [
                "150 g cabbage", 
                "50 g carrot", 
                "5 ml vegetable oil", 
                "A pinch of salt", 

                ],
                instructions: [
                "Finely shred the cabbage and gently squeeze it with your hands.", 
                "Grate the carrot.", 
                "Mix everything in a bowl and stir well.", 

                ],
                note: "You can add a little sugar if the cabbage tastes bitter."
             }
        },
        "main_dish_chicken_curry":  {
            ru: {
                title: "Курица карри",
                meta:  {
                    time: "40 мин",
                    servings: "4 порции"
                  },
                ingredients: [
                "700 г куриной грудки", 
                "500 г нарезанных помидоров", 
                "200 г 20% сливок", 
                "1 луковица", 
                "10 г кукурузного крахмала (по желанию, для более приятной текстуры)", 
                "Соль, перец, приправа карри, хлопья чили (по желанию, для любителей острого)", 

                ],
                instructions: [
                "Нарежьте куриное филе кусочками и обжарьте на сильном огне. Готовьте 3-5 минут на максимальном нагреве. Приправьте солью и перцем.", 
                "После того, как перевернете курицу, добавьте на сковороду лук, нарезанный четвертинками колец.", 
                "Когда курица будет почти готова, убавьте огонь до среднего и добавьте нарезанные помидоры, потомите.", 
                "Добавьте сливки, перемешайте и снова оставьте томиться на 3-5 минут.", 
                "Добавляйте приправу карри постепенно, регулируя количество по вкусу. Если хотите получить более острый карри, можно также добавить хлопья чили.", 
                "Смешайте все вместе, убавьте огонь до минимума и всыпьте кукурузный крахмал.", 
                "Перемешайте и дайте курице потушиться в течение 10-15 минут, чтобы она полностью пропиталась соусом.", 

                ],
                note: "Острая курица карри отлично идет с рисом и салатными листьями."
             },
            en: {
                title: "Chicken Curry",
                meta:  {
                    time: "40 min",
                    servings: "Serves 4"
                  },
                ingredients: [
                "700 g chicken breast", 
                "500 g chopped tomatoes", 
                "200 g 20% cream", 
                "1 onion", 
                "10 g cornstarch (optional, for a smoother texture)", 
                "Salt, pepper, curry seasoning, chili flakes (optional, for spice lovers)", 

                ],
                instructions: [
                "Cut the chicken fillet into pieces and fry over high heat. Cook for 3-5 minutes at maximum heat level. Season with salt and pepper.", 
                "After flipping the chicken, add the onion sliced into quarter rings to the pan.", 
                "When the chicken is almost cooked through, reduce the heat to medium and add the chopped tomatoes. Let it simmer.", 
                "Add the cream, stir, and let it simmer again for 3-5 minutes.", 
                "Add the curry seasoning gradually, adjusting the amount to taste. If you prefer a spicier curry, you can also add chili flakes.", 
                "Mix everything together, reduce the heat to minimum, and add the cornstarch.", 
                "Stir and let the chicken simmer for 10-15 minutes so it fully absorbs the sauce.", 

                ],
                note: "Spicy chicken curry goes great with rice and salad greens."
             }
        },
        "main_dish_orzo":  {
            ru: {
                title: "Орзо с греческой колбаской",
                meta:  {
                    time: "25 мин",
                    servings: "6 порций"
                  },
                ingredients: [
                "500 г орзо", 
                "300 г бульона", 
                "200 г греческой колбасы", 
                "50 г феты", 
                "50 г томатной пасты", 
                "1 луковица", 
                "4 зубчика чеснока", 
                "Соль, перец, паприка, чили", 

                ],
                instructions: [
                "Сварите орзо в подсоленной воде согласно инструкции на упаковке.", 
                "Тем временем обжарьте колбасу на сильном огне. Добавьте лук и выдавите чеснок.", 
                "Когда орзо сварится, слейте почти всю воду, оставив небольшое количество воды, в которой варилась паста.", 
                "Убавьте огонь до минимума, добавьте бульон, томатную пасту, обжаренную колбасу с луком и чесноком, раскрошенную руками фету и приправы.", 
                "Хорошо перемешайте, доведите до слабого кипения, затем снимите с огня и дайте постоять 5–10 минут перед подачей.", 

                ],
                note: "Если нет бульона, то его можно заменить на бульонный кубик, но вместо томатной пасты потребуется 500 г протертых помидоров."
             },
            en: {
                title: "Orzo with Greek Sausage",
                meta:  {
                    time: "25 minutes",
                    servings: "Serves 6"
                  },
                ingredients: [
                "500 g orzo", 
                "300 g broth", 
                "200 g Greek sausage", 
                "50 g feta", 
                "50 g tomato paste", 
                "1 onion", 
                "4 cloves of garlic", 
                "Salt, pepper, paprika, and chili", 

                ],
                instructions: [
                "Cook the orzo in salted water according to the package instructions.", 
                "Meanwhile, sear the sausage over high heat. Add the onion and press in the garlic.", 
                "Once the orzo is cooked, drain most of the water, reserving a small amount of the cooking liquid.", 
                "Reduce the heat to low, then add the broth, tomato paste, sautéed sausage with onion and garlic, hand-crumbled feta, and the seasonings.", 
                "Stir well, bring to a gentle simmer, then remove from the heat and let stand for 5–10 minutes before serving.", 

                ],
                note: "If broth is unavailable, you may substitute a stock cube; however, replace the tomato paste with 500 g of crushed tomatoes."
             }
        },
        "main_dish_pelmeni":  {
            ru: {
                title: "Пельмени",
                meta:  {
                    time: "180 мин",
                    servings: "6 порций"
                  },
                ingredients: [
                "600 г фарша", 
                "500 г муки", 
                "200 г ледяной воды", 
                "1 луковица", 
                "1/2 бульонного кубика", 
                "Соль, перец", 

                ],
                instructions: [
                "Добавьте щепотку соли в ледяную воду и влейте ее в муку.", 
                "Замешивайте тесто в течение 8-12 минут. Оно должно получиться мягким, тянуться, не рваться и не липнуть к рукам.", 
                "Дайте тесту отдохнуть 30 минут.", 
                "Измельчите лук в блендере и добавьте его в фарш.", 
                "Растворите половину бульонного кубика в 50 мл воды и добавьте к фаршу. Приправьте солью и перцем, а также добавьте дополнительные специи по вкусу, например, паприки и чили, если хотите.", 
                "Слегка припылите рабочую поверхность мукой и раскатайте тесто.", 
                "Вырежьте кружочки диаметром 5-7 см. Отложите обрезки отдельно, не вмешивая их обратно в основное тесто.", 
                "Выложите примерно по 1 чайной ложке фарша на каждый кружок.", 
                "Смочите одну половину внешнего края водой, сложите в форме полумесяца, защипните края и сверните в пельмень.", 
                "Если пельмени планируете есть сразу, отварите в кипящей подсоленной воде после всплытия минут 6-7", 
                "Если пельмени замораживаете, то выложите готовые пельмени на припыленный мукой противень так, чтобы они не соприкасались.", 
                "Охладите пельмени в холодильнике в течение 20-30 минут, затем уберите в морозилку.", 
                "Через 4-6 часов переложите их в пакет или контейнер, где их можно хранить слоями.", 
                "Чтобы сварить замороженные или свежие пельмени, бросьте их в кипящую воду и варите 6-7 минут после того, как они всплывут на поверхность.", 

                ],
                note: "Лучше не раскатывать все тесто сразу, а разделить на несколько частей и сделать несколько раскаток. Остатки теста можно использовать для последней порции пельменей."
             },
            en: {
                title: "Pelmeni",
                meta:  {
                    time: "180 min",
                    servings: "Serves 6"
                  },
                ingredients: [
                "600 g ground meat", 
                "500 g flour", 
                "200 g ice-cold water", 
                "1 onion", 
                "1/2 bouillon cube", 
                "Salt, pepper", 

                ],
                instructions: [
                "Add a pinch of salt to the ice-cold water and pour it into the flour.", 
                "Knead the dough for 8-12 minutes. It should become soft, elastic, not tear, and not stick to your hands.", 
                "Let the dough rest for 30 minutes.", 
                "Blend the onion and add it to the ground meat.", 
                "Dissolve half of the bouillon cube in 50 ml of water and add it to the meat. Season with salt and pepper, and add additional spices to taste, such as paprika and chili if desired.", 
                "Lightly dust the work surface with flour and roll out the dough.", 
                "Cut out circles 5-7 cm in diameter. Set the scraps aside without kneading them back into the main dough.", 
                "Place about 1 teaspoon of filling onto each circle.", 
                "Moisten one half of the outer edge with water, fold into a half-moon shape, pinch the edges together, and shape into a dumpling.", 
                "If you plan to eat the dumplings right away, boil them in salted water for 6-7 minutes after they float to the surface.", 
                "If you are freezing the dumplings, place them on a flour-dusted tray so that they do not touch each other.", 
                "Chill the dumplings in the refrigerator for 20-30 minutes, then transfer them to the freezer.", 
                "After 4-6 hours, move them to a bag or container where they can be stored in layers.", 
                "To cook frozen or fresh dumplings, drop them into boiling water and cook for 6-7 minutes after they float to the surface.",            

                ],
                note: "It is better not to roll out all the dough at once, but to divide it into several parts and do several rollouts. The remaining dough can be used for the final batch of dumplings."
             }
        },
        "main_dish_pasta_carbonara":  {
            ru: {
                title: "Паста карбонара",
                meta:  {
                    time: "15 мин",
                    servings: "2 порции"
                  },
                ingredients: [
                "200 мл сливок (15-20%)", 
                "180 г спагетти", 
                "150 г копченого бекона", 
                "2 зубчика чеснока", 
                "1 яичный желток", 
                "Соль, перец", 
                "Пармиджано для подачи", 

                ],
                instructions: [
                "Сварите спагетти в слегка подсоленной воде согласно инструкции на упаковке.", 
                "Тем временем обжарьте бекон на сильном огне и добавьте чеснок.", 
                "В небольшой миске смешайте сливки с яичным желтком, солью и перцем.", 
                "Когда паста сварится, слейте почти всю воду, оставив немного воды, в которой варились спагетти.", 
                "Верните спагетти в кастрюлю и убавьте огонь до очень слабого.", 
                "Влейте сливочно-яичную смесь в бекон, постоянно помешивая, около 30 секунд. Затем добавьте все к спагетти и готовьте на слабом огне около 5 минут, аккуратно перемешивая.", 
                "Подавайте, слегка посыпав сыром пармезан.", 

                ],
                note: ""
             },
            en: {
                title: "Pasta Carbonara",
                meta:  {
                    time: "15 min",
                    servings: "Serves 2"
                  },
                ingredients: [
                "200 ml cream (15–20%)", 
                "180 g spaghetti", 
                "150 g smoked bacon", 
                "2 cloves of garlic", 
                "1 egg yolk", 
                "Salt, pepper", 
                "Parmigiano for sprinkling", 

                ],
                instructions: [
                "Cook the spaghetti in lightly salted water according to the package instructions.", 
                "Meanwhile, fry the bacon over high heat and add the garlic.", 
                "In a small bowl, mix the cream with the egg yolk, salt, and pepper.", 
                "When the pasta is cooked, drain almost all the water, leaving a little of the spaghetti cooking water.", 
                "Return the spaghetti to the pot and reduce the heat to very low.", 
                "Pour the cream and egg mixture into the bacon, stirring constantly for about 30 seconds. Then add everything to the spaghetti and cook over low heat for about 5 minutes, stirring gently.", 
                "Serve lightly sprinkled with Parmesan cheese.", 

                ],
                note: ""
             }
        },
        "dessert_banana_bread":  {
            ru: {
                title: "Банановый хлеб",
                meta:  {
                    time: "60 мин",
                    servings: "10 порций"
                  },
                ingredients: [
                "2 средних банана", 
                "2 средних яйца (или 1 большое)", 
                "200 г муки100 г сахара", 
                "75 г сливочного масла", 
                "1/2 ч.л. соды", 
                "1 пакетик ванилина (1-2 гр)", 
                "Щепотка соли", 

                ],
                instructions: [
                "Разогрейте духовку до 175°C в режиме верхнего и нижнего нагрева.", 
                "Растопите сливочное масло.", 
                "Разомните бананы вилкой.", 
                "Добавьте масло к бананам и перемешайте.", 
                "Добавьте соду, соль, сахар, ванилин и яйцо, затем перемешайте.", 
                "Просейте муку и добавьте в тесто, перемешайте до почти однородной консистенции.", 
                "Застелите форму для выпечки пергаментом, вылейте тесто и слегка постучите формой по столу, чтобы выпустить пузырьки воздуха.", 
                "Поставьте форму в разогретую духовку на 10 минут.", 
                "Сделайте на поверхности кекса продольный разрез, отступив 2-3 см от края — это поможет кексу красиво раскрыться при выпекании.", 
                "Выпекайте еще 35 минут, готовность проверьте деревянной зубочисткой.", 

                ],
                note: ""
             },
            en: {
                title: "Banana Bread",
                meta:  {
                    time: "60 min",
                    servings: "Serves 10"
                  },
                ingredients: [
                "2 medium bananas", 
                "2 medium eggs (or 1 large egg)", 
                "200 g flour", 
                "100 g sugar", 
                "75 g butter", 
                "1/2 tsp baking soda", 
                "1 sachet of vanilla (1-2 g)", 
                "A pinch of salt", 

                ],
                instructions: [
                "Preheat the oven to 175°C using conventional top-and-bottom heat", 
                "Melt the butter", 
                "Mash the bananas with a fork", 
                "Add the butter to the bananas and mix well", 
                "Add the baking soda, salt, sugar, vanilla, and egg, then stir to combine", 
                "Sift the flour and fold it into the batter, mixing until nearly smooth", 
                "Line a baking tin with parchment paper, pour in the batter, and gently tap the tin on the counter to release air bubbles", 
                "Place the tin in the preheated oven and bake for 10 minutes", 
                "Make a lengthwise slit on the surface of the cake, 2-3 cm from the edge — this helps the cake open neatly while baking", 
                "Continue baking for a further 35 minutes, check for doneness with a wooden toothpick", 

                ],
                note: ""
             }
        },
        "dessert_bese":  {
            ru: {
                title: "Безе",
                meta:  {
                    time: "130 мин",
                    servings: "10 порций"
                  },
                ingredients: [
                "2 яйца (понадобится только белок)", 
                "90 г сахара", 
                "Щепотка соли", 

                ],
                instructions: [
                "Тщательно обезжирьте и высушите миску, в которой будете взбивать белки.", 
                "Аккуратно отделите белки от желтков (рекомендуется делать это над отдельной чашкой для каждого яйца, чтобы в белки не попала ни капли желтка).", 
                "Добавьте к белкам щепотку соли и начните взбивать на минимальной скорости до появления белой пены.", 
                "Увеличьте скорость до максимальной и продолжайте взбивать до тех пор, пока от венчика не начнет оставаться четкий след.", 
                "Затем постепенно всыпьте сахар, продолжая взбивать до устойчивых пиков (при поднятии венчика пик из белка должен сохранять форму и не оседать).", 
                "Застелите противень (или, лучше, решетку) бумагой для выпечки.", 
                "Разогрейте духовку до 95°C - безе нужно не испечь, а высушить.", 
                "Выложите безе на бумагу с помощью двух ложек или кондитерского мешка и поместите в духовку.", 
                "Точное время приготовления безе в духовке указать невозможно, так как оно зависит от размера безе (чем они больше, тем дольше сушка) и желаемой текстуры (чем суше вы хотите получить безе, тем больше времени потребуется). Начинать проверять готовность можно через 1,5–2 часа.", 

                ],
                note: "Чтобы точно рассчитать количество сахара, взвесьте белки и возьмите сахар в пропорции 1:1,5 (например, на 100 г белков потребуется 150 г сахара). Если среди ваших гостей есть поклонники разных видов безе — одни любят с тянучкой внутри, а другие полностью сухие, — вы можете сделать одну партию безе чуть меньше и достать их позже (для сухих), а другую — крупнее и вынуть пораньше (для мягких)."
             },
            en: {
                title: "Meringue",
                meta:  {
                    time: "130 min",
                    servings: "Serves 10"
                  },
                ingredients: [
                "2 eggs (whites only)", 
                "90 g sugar", 
                "A pinch of salt", 

                ],
                instructions: [
                "Thoroughly degrease and dry the bowl you will use for whipping the egg whites.", 
                "Carefully separate the whites from the yolks (it is advisable to do this over a separate cup for each egg to ensure that not a drop of yolk enters the whites).", 
                "Add a pinch of salt to the whites and begin whisking at the lowest speed until a light white foam forms.", 
                "Increase the speed to maximum and continue whisking until the whisk leaves a distinct trace.", 
                "Gradually add the sugar while continuing to whisk until stiff, stable peaks form (when lifting the whisk, the peak should hold its shape without collapsing).", 
                "Line a baking tray (or preferably a rack) with baking parchment.", 
                "Preheat the oven to 95°C — the meringues should dry rather than bake.", 
                "Spoon or pipe the meringue onto the parchment using two spoons or a piping bag, then place in the oven.", 
                "The exact drying time cannot be specified, as it depends on the size of the meringues (larger ones require longer drying) and the desired texture (the drier the result, the longer the drying). Begin checking for readiness after 1.5–2 hours.", 

                ],
                note: "To calculate the precise amount of sugar, weigh the egg whites and use a ratio of 1:1.5 (for example, 100 g of egg whites requires 150 g of sugar). If your guests prefer different meringue textures — some with a soft, chewy centre and others fully crisp — you may pipe one batch smaller and remove it later (for a drier finish), and another batch larger and take it out earlier (for a softer centre)."
             }
        },

        "dessert_pancake_cake":  {
            ru: {
                title: "Блинный торт",
                meta:  {
                    time: "240 мин",
                    servings: "8 порций"
                  },
                ingredients: [
                "Для блинов:", 
                "4 яйца", 
                "80 г сахара", 
                "600 мл молока", 
                "250 г муки", 
                "180 мл кипятка", 
                "4 ст.л. растительного масла", 
                "Щепотка соли", 
                "Подсолнечное масло, чтобы периодически смазывать сковородку", 
                "Сливочное масло, чтобы смазавать готовый блинДля начинки:", 
                "500 г свежей клубники", 
                "700 г творожного сыра", 
                "140 г холодных 33% сливок", 
                "100 г сахарной пудры", 
                "Ягоды и листики мяты для украшения", 

                ],
                instructions: [
                "Начните с приготовления блинов. Взбейте яйца с сахаром и солью, затем добавьте половину молока.", 
                "Постепенно всыпьте муку, тщательно перемешивая, чтобы не осталось комочков.", 
                "Влейте оставшееся молоко и снова перемешайте до однородности.", 
                "Помешивая массу, тонкой струйкой влейте крутой кипяток, добавьте растительное масло, еще раз перемешайте и оставьте тесто на 20-30 минут при комнатной температуре.", 
                "Выпекайте блины на среднем огне, слегка смазав сковороду растительным маслом перед первым блином.", 
                "Переворачивайте блины с помощью силиконовой лопатки.", 
                "Готовые блины смазывайте сливочным маслом, складывайте стопкой и накрывайте полотенцем, чтобы они оставались мягкими.", 
                "Перейдите к приготовлению крема. Вмешайте сахарную пудру в творожный сыр до однородности.", 
                "Взбейте сливки до устойчивых пиков, затем аккуратно вмешайте в них творожный сыр с сахарной пудрой.", 
                "Нарежьте клубнику тонкими пластинками вдоль.", 
                "Подготовьте кондитерское кольцо, соответствующее диаметру блинов. Чтобы сформировать красивые стенки торта, выложите блины следующим образом: поместите блин внутрь кольца так, чтобы центральная часть блина закрывала кондитерское кольцо, а края свешивались наружу. Следующий блин уложите внахлест, постепенно закрывая внутреннюю поверхность кольца. Края блинов, свисающие наружу, позже закроют верх торта.", 
                "На дно (поверх блинов, которые формируют стенки) выложите один целый блин. Смажьте его тонким слоем крема и выложите слой клубничных пластинок.", 
                "Повторяйте слои: блин, крем, клубника - пока не закончатся ингредиенты или не будет заполнено кольцо.", 
                "Заверните свисающие края блинов наверх торта, формируя аккуратное покрытие.", 
                "Сверху положите красивый блин - он станет основой для украшения.", 
                "Украсьте поверхность по желанию. Торт готов к подаче сразу после сборки.", 

                ],
                note: "Возьмите две сковородки и подружку, тогда время готовки снизится с 4 часов до 1,5."
             },
            en: {
                title: "Pancake Cake",
                meta:  {
                    time: "240 minutes",
                    servings: "Serves 8"
                  },
                ingredients: [
                "For the pancakes:", 
                "4 eggs", 
                "80 g sugar", 
                "600 ml milk", 
                "250 g flour", 
                "180 ml boiling water", 
                "4 tbsp vegetable oil", 
                "A pinch of salt", 
                "Sunflower oil, for greasing the pan as needed", 
                "Butter, for brushing the finished pancakes", 
                "For the filling:", 
                "500 g fresh strawberries", 
                "700 g cream cheese", 
                "140 g cold 33% cream", 
                "100 g icing sugar", 
                "Berries and mint leaves, for decoration", 

                ],
                instructions: [
                "Begin by preparing the pancakes. Whisk the eggs with the sugar and salt, then add half of the milk.", 
                "Gradually add the flour, mixing thoroughly until no lumps remain.", 
                "Pour in the remaining milk and stir until smooth.", 
                "While stirring, slowly stream in the boiling water. Add the vegetable oil, mix again, and let the batter rest for 20–30 minutes at room temperature.", 
                "Cook the pancakes over medium heat, lightly greasing the pan before the first pancake.", 
                "Flip using a silicone spatula.", 
                "Brush the finished pancakes with butter, stack them, and cover with a towel to keep them soft.", 
                "Prepare the cream. Mix the icing sugar into the cream cheese until smooth.", 
                "Whip the cream to stiff peaks, then gently fold it into the cream cheese mixture.", 
                "Slice the strawberries lengthwise into thin pieces.", 
                "Prepare a pastry ring matching the diameter of the pancakes. To create neat sides, place a pancake inside the ring so that the centre covers the base and the edges hang over. Overlap additional pancakes until the inner wall of the ring is lined. The overhanging edges will later cover the top.", 
                "Place one whole pancake on the bottom. Spread a thin layer of cream and add a layer of strawberries.", 
                "Repeat the layers: pancake, cream, strawberries, until the ring is filled or the ingredients are used up.", 
                "Fold the overhanging pancake edges over the top to seal the cake.", 
                "Finish with a smooth pancake on top as the base for decoration.", 
                "Decorate as desired. The cake may be served immediately.", 

                ],
                note: "Use two frying pans and a helpful friend, this way the preparation time shrinks from four hours to about one and a half."
             }
        },
        "dessert_cupcake_creamchease_straberry_jam":  {
            ru: {
                title: "Капекейки с клубничной начинкой и крем-чизом",
                meta:  {
                    time: "60 мин",
                    servings: "9 порций"
                  },
                ingredients: [
                "Для капкейков:", 
                "3 яйца", 
                "105 г сахара", 
                "65 г муки", 
                "8 г ванильного сахара",
                "Щепотка соли", 
                "Для начинки:", 
                "100 г замороженной клубники", 
                "10 г сахара", 
                "5 г кукурузного крахмала", 
                "Для крема:", 
                "200 г творожного сыра", 
                "65 г сливочного масла", 
                "55 г сахарной пудры", 
                "2 г ванилина", 

                ],
                instructions: [
                "Начните с начинки, так как ей потребуется больше всего времени для остывания. Разморозьте клубнику, пробейте в блендере и протрите через сито.", 
                "Переложите клубничное пюре в сотейник, добавьте сахар и начните нагревать массу на среднем огне.", 
                "Когда сахар растворится, добавьте крахмал и варите, постоянно помешивая, до загустения.", 
                "Когда масса загустеет, перелейте соус в широкую тарелку, накройте пленкой в контакт и оставьте остывать при комнатной температуре.", 
                "Перейдите к приготовлению маффинов для капкейков. Тщательно обезжирьте и высушите миску, в которой будете взбивать белки.", 
                "Аккуратно отделите белки от желтков (рекомендуется делать это над отдельной чашкой для каждого яйца, чтобы в белки не попала ни капли желтка).", 
                "Добавьте к белкам щепотку соли и начните взбивать на минимальной скорости до появления белой пены.", 
                "Увеличьте скорость до максимальной и продолжайте взбивать до тех пор, пока от венчика не начнет оставаться четкий след.", 
                "Затем постепенно всыпьте половину сахара, продолжая взбивать до устойчивых пиков (при поднятии венчика пик из белка должен сохранять форму и не оседать).", 
                "В другой миске смешайте оставшиеся желтки, вторую половину сахара и ванильный сахар. Взбивайте массу до тех пор, пока она не станет пышной.", 
                "Затем к желтковой массе переложите треть белковой и аккуратно перемешайте силиконовой лопаткой движениями снизу вверх.", 
                "Затем добавьте дважды просеянную муку и снова перемешайте аккуратными движениями снизу вверх.", 
                "Добавьте массу к белкам и снова аккуратно перемешайте.", 
                "Разогрейте духовку до 180°C с нагревом сверху и снизу.", 
                "Распределите тесто по формочкам для маффинов. Лучше внутрь вложить бумажные вкладыши для капкейков - так капкейк не заветрится и будет мягким несколько дней.", 
                "Поставьте маффины в духовку на средний уровень примерно на 12 минут. Ориентируйтесь по своей духовке: когда маффины начнут покрываться золотистым цветом, проверьте готовность деревянной зубочисткой. Если она осталась сухой - маффины готовы.", 
                "Выньте маффины и оставьте их остывать при комнатной температуре, накрыв чистым полотенцем.", 
                "Перейдите к приготовлению крема. Смешайте масло, творожный сыр, сахарную пудру и ванилин в однородную массу.", 
                "Когда начинка и капкейки остынут, сделайте неглубокий надрез по кругу в центре капкейка, снимите получившуюся шапочку, положите внутрь начинку, а затем снова накройте шапочкой.", 
                "Затем с помощью кондитерского мешка выложите крем сверху капкейка. Если основание капкейка будет закрывать бумага, а верх - крем, капкейк останется мягким несколько дней.", 

                ],
                note: "Если хочется, можно использовать вместо клубники малину, но ее стоит взять чуть побольше, так как процент отходов у малины больше. Подойдут и другие ягоды. Или можно вообще не использовать начинку."
             },
            en: {
                title: "Cupcakes with Strawberry Filling and Cream Cheese Frosting",
                meta:  {
                    time: "60 minutes",
                    servings: "Serves 9"
                  },
                ingredients: [
                "For the cupcakes:", 
                "3 eggs", 
                "105 g sugar", 
                "65 g flour", 
                "8 g vanilla sugar",
                "Pinch of salt",
                "For the filling:", 
                "100 g frozen strawberries", 
                "10 g sugar", 
                "5 g cornstarch",
                "For the frosting:", 
                "200 g cream cheese", 
                "65 g butter", 
                "55 g icing sugar", 
                "2 g vanilla", 

                ],
                instructions: [
                "Begin with the filling, as it requires the most time to cool. Thaw the strawberries, blend until smooth, then strain through a sieve.", 
                "Transfer the strawberry purée to a saucepan, add the sugar, and heat over medium.", 
                "Once the sugar has dissolved, add the cornstarch and cook, stirring constantly, until thickened.", 
                "Pour the thickened sauce onto a wide plate, cover with cling film in direct contact, and leave to cool at room temperature.", 
                "Proceed with the cupcakes. Thoroughly degrease and dry the bowl for whipping the egg whites.", 
                "Carefully separate the whites from the yolks (it is best to do this over a separate cup for each egg to avoid any yolk entering the whites).", 
                "Add a pinch of salt to the whites and whisk at low speed until a light foam forms.", 
                "Increase the speed to maximum and whisk until the whisk leaves a distinct trace.", 
                "Gradually add half of the sugar, continuing to whisk until stiff peaks form.", 
                "In a separate bowl, combine the yolks, the remaining sugar, and the vanilla sugar. Whisk until pale and fluffy.", 
                "Gently fold one-third of the whipped whites into the yolk mixture using a silicone spatula, lifting from the bottom upwards.", 
                "Add the twice-sifted flour and fold gently until incorporated.", 
                "Fold the yolk mixture back into the remaining whites, mixing carefully.", 
                "Preheat the oven to 180°C using top-and-bottom heat.", 
                "Divide the batter among muffin moulds. Paper liners are recommended to keep the cupcakes soft for several days.", 
                "Bake on the middle rack for about 12 minutes. Adjust to your oven: once lightly golden, test with a wooden toothpick. If it comes out dry, they are done.", 
                "Remove the cupcakes and allow them to cool at room temperature, covered with a clean towel.", 
                "Prepare the frosting by mixing the butter, cream cheese, icing sugar, and vanilla until smooth.", 
                "Once both filling and cupcakes have cooled, cut a shallow circular cavity in the centre of each cupcake, remove the top, add the filling, and replace the top.", 
                "Pipe the frosting onto the cupcakes using a piping bag. Properly stored, the cupcakes will remain soft for several days.", 

                ],
                note: "If desired, raspberries may be used instead of strawberries, though a slightly larger quantity is recommended due to greater waste. Other berries are also suitable, or the filling may be omitted entirely."
             }
        },
        "dessert_napoleon_individual":  {
            ru: {
                title: "Наполеон с малиновым джемом в стаканчике",
                meta:  {
                    time: "180 мин",
                    servings: "9 порций"
                  },
                ingredients: [
                "400 г слоеного теста", 
                "Для заварного крема:", 
                "500 мл молока", 
                "150 г сахара", 
                "100 г масла", 
                "2 яйца", 
                "40 г муки", 
                "10 г ванильного сахара", 
                "Для джема:100 г замороженной малины", 
                "10 г сахара", 
                "5 г крахмала", 

                ],
                instructions: [
                "Начните с крема, так как ему потребуется больше всего времени для остывания. В маленькой кастрюльке взбейте вместе муку, сахар, ванильный сахар и яйца до получения однородной массы.", 
                "Постепенно влейте небольшое количество молока, тщательно взбивая, чтобы удалить комочки.", 
                "Продолжайте добавлять оставшееся молоко, взбивая, пока смесь не станет полностью однородной.", 
                "Поставьте кастрюлю на слабый огонь. Готовьте, постоянно помешивая, особенно по дну, чтобы не образовались комочки.", 
                "Как только заварной крем загустеет и начнет закипать, снимите его с огня.", 
                "Добавьте размягченное сливочное масло в горячий заварной крем и перемешивайте, пока оно полностью не растает.", 
                "Переложите заварной крем в широкую миску, чтобы он быстрее остыл. Накройте пищевой пленкой в контакт.", 
                "Перейдите к приготовлению джема. Разморозьте малину, пробейте в блендере и протрите через сито.", 
                "Переложите малиновое пюре в сотейник, добавьте сахар и начните нагревать массу на среднем огне.", 
                "Когда масса загустеет, перелейте соус в широкую тарелку, накройте пленкой в контакт и оставьте остывать при комнатной температуре.", 
                "Перейдите к приготовлению коржей. Разогрейте духовку до 210°C. Разрежьте готовое слоеное тесто на несколько частей, чуть меньше высоты вашего блендера.", 
                "Выложите слоеное тесто на противень, застеленный бумагой для выпечки.", 
                "Поместите коржи в духовку на 10-12 минут, в зависимости от вашей духовки. Они будут готовы, когда появится золотистая корочка.", 
                "Выньте коржи и положите их на решетку, чтобы они остыли.", 
                "Когда коржи остынут, перебейте их в блендере в крошку.", 
                "Когда крем и джем остынут, можете приступать к сборке десерта.", 
                "На дно стакана выложите немного крема, затем крошку, немного прижмите крошку ложкой, чтобы ее уплотнить.", 
                "Затем крем, джем, крем и снова крошка. Важно выкладывать крем сначала у стенок стаканчика, затем в середине, чтобы джем не мог протечь на нижние слои. Малиновый джем сам по себе имеет яркий вкус, поэтому его нужно значительно меньше, чем заварного крема.", 
                "Повторяйте, пока не останется 1-1,5 см до края стаканчика.", 
                "Последний слой должен быть крошкой от слоеного теста.", 
                "Можете подавать сразу, если любите, чтобы крошка хрустела, либо если любите пропитанный наполеон, подождите не меньше 5 часов.", 

                ],
                note: "Для джема подойдут и другие ягоды или можно вообще не использовать начинку."
             },
            en: {
                title: "Napoleon with Raspberry Jam in a Cup",
                meta:  {
                    time: "180 minutes",
                    servings: "Serves 9"
                  },
                ingredients: [
                "400 g puff pastry", 
                "For the custard cream:", 
                "500 ml milk", 
                "150 g sugar", 
                "100 g butter", 
                "2 eggs", 
                "40 g flour", 
                "10 g vanilla sugar", 
                "For the jam:", 
                "100 g frozen raspberries", 
                "10 g sugar", 
                "5 g corn starch", 

                ],
                instructions: [
                "Begin with the custard cream, as it requires the most time to cool. In a small saucepan, whisk together the flour, sugar, vanilla sugar, and eggs until smooth.", 
                "Gradually pour in a small amount of the milk, whisking thoroughly to remove any lumps.", 
                "Add the remaining milk, whisking until the mixture is completely smooth.", 
                "Place the saucepan over low heat. Cook, stirring constantly, especially along the bottom, to prevent lumps.", 
                "As soon as the custard thickens and begins to boil, remove it from the heat.", 
                "Add the softened butter to the hot custard and stir until fully melted and incorporated.", 
                "Transfer the custard to a wide bowl to cool more quickly. Cover with cling film in direct contact.", 
                "Prepare the jam. Thaw the raspberries, blend until smooth, then strain through a sieve.", 
                "Transfer the raspberry purée to a saucepan, add the sugar, and heat over medium.", 
                "Once thickened, pour the jam onto a wide plate, cover with cling film in contact, and leave to cool at room temperature.", 
                "Prepare the pastry layers. Preheat the oven to 210°C. Cut the puff pastry into several pieces slightly smaller than the height of your blender.", 
                "Place the pastry on a baking tray lined with parchment paper.", 
                "Bake for 10-12 minutes, depending on your oven, until golden.", 
                "Remove and allow the pastry to cool on a rack.", 
                "Once cooled, pulse the pastry in a blender into coarse crumbs.", 
                "When the custard and jam have cooled, assemble the dessert.", 
                "Spoon a layer of custard into the bottom of each glass, followed by a layer of crumbs. Lightly press the crumbs with a spoon.", 
                "Continue layering: custard, jam, custard, and crumbs. Spread the custard along the sides of the glass first, then add the jam in the centre to prevent it from seeping downward. As raspberry jam has a pronounced flavour, use less jam than custard.", 
                "Repeat until 1-1.5 cm remains to the rim.", 
                "Finish with a layer of puff pastry crumbs.", 
                "Serve immediately for a crisp texture, or chill for at least 5 hours for a softened, infused dessert.", 

                ],
                note: "Other berries may be used for the jam, or the filling may be omitted entirely."
             }
        },
        "dessert_panna_cotta":  {
            ru: {
                title: "Панна-котта c клубничным джемом",
                meta:  {
                    time: "240 мин",
                    servings: "4 порций"
                  },
                ingredients: [
                "Для панна-котты:", 
                "300 г 20% сливок", 
                "100 г молока", 
                "50 г сахара", 
                "50 г воды", 
                "10 г желатина", 
                "Для джема:", 
                "250 г замороженной клубники", 
                "30 г сахарной пудры", 
                "5 г крахмала", 

                ],
                instructions: [
                "Замочите желатин в холодной воде.Замочите желатин в холодной воде.", 
                "В кастрюле смешайте сливки, молоко, сахар и ванильный сахар и доведите до 70°С. Снимите кастрюлю с плиты.", 
                "Добавьте размягченный желатин в горячую смесь и перемешайте до полного растворения.", 
                "Разлейте кремовую смесь по порционным формочкам. Удобно сначала взвесить смесь и разделить ее на количество порций, исходя из размера используемой посуды.", 
                "Дайте ей немного остыть при комнатной температуре, затем поставьте в холодильник на 2 часа.", 
                "Добавьте размягченное сливочное масло в горячий заварной крем и перемешивайте, пока оно полностью не растает.", 
                "Затем измельчите клубнику, процедите ее через сито в кастрюлю и добавьте сахарную пудру.", 
                "Взвесьте клубничную массу, разделите ее на равные порции и вылейте поверх слоя крема.", 
                "Поставьте в холодильник еще на 2 часа до полного застывания. ", 

                ],
                note: ""
             },
            en: {
                title: "Panna Cotta with Strawberry Jam",
                meta:  {
                    time: "240 minutes",
                    servings: "Serves 4"
                  },
                ingredients: [
                "For the panna cotta:", 
                "300 g 20% cream", 
                "100 g milk", 
                "50 g sugar", 
                "50 g water", 
                "10 g gelatin", 
                "For the jam:", 
                "250 g frozen strawberries", 
                "30 g icing sugar", 
                "5 g starch", 

                ],
                instructions: [
                "Soak the gelatin in cold water and leave it to bloom.", 
                "In a saucepan, combine the cream, milk, sugar, and (optionally) vanilla sugar, then heat gently to about 70°C. Remove from the heat.", 
                "Add the softened gelatin to the hot mixture and stir until completely dissolved.", 
                "Pour the mixture into serving moulds. For precision, you may weigh the mixture and divide it evenly according to the number of portions.", 
                "Allow it to cool slightly at room temperature, then refrigerate for about 2 hours.", 
                "Prepare the jam by blending the strawberries and straining the purée into a saucepan. Add the icing sugar.", 
                "Heat the mixture gently until slightly thickened, then cool to room temperature.", 
                "Divide the strawberry layer evenly and pour it over the chilled panna cotta.", 
                "Return to the refrigerator for a further 2 hours, or until fully set.", 

                ],
                note: ""
             }
        },

    }
};