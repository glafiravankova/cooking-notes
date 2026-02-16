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
                    "100 г зеленого салата", 
                    "5 г оливкового масла", 
                    "5 г бальзамического крема", 

                ],
                instructions: [
                    "Выложите зеленые листья в миску.", 
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
                "Смешайте все в миске и хорошо перемешайте.", 

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
                "Нарежьте куриное филе кусочками и обжарьте на сильном огне. Готовьте 3-5 минут на нагреве 9/9. Приправьте солью и перцем.", 
                "После того, как перевернете курицу, добавьте на сковороду лук, нарезанный четвертинками колец.", 
                "Когда курица будет почти готова, убавьте огонь до 5/9 и добавьте нарезанные помидоры, потомите.", 
                "Добавьте сливки, перемешайте и снова оставьте томиться на 3-5 минут.", 
                "Добавляйте приправу карри постепенно, регулируя количество по вкусу. Если хотите получить более острый карри, можно также добавить хлопья чили.", 
                "Смешайте все вместе, убавьте огонь до минимума (1/9) и всыпьте кукурузный крахмал.", 
                "Перемешайте и дайте курице потушиться в течение 10–15 минут, чтобы она полностью пропиталась соусом.", 

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
                "Cut the chicken fillet into pieces and fry over high heat. Cook for 3–5 minutes at heat level 9/9. Season with salt and pepper.", 
                "After flipping the chicken, add the onion sliced into quarter rings to the pan.", 
                "When the chicken is almost cooked through, reduce the heat to 5/9 and add the chopped tomatoes. Let it simmer.", 
                "Add the cream, stir, and let it simmer again for 3–5 minutes.", 
                "Add the curry seasoning gradually, adjusting the amount to taste. If you prefer a spicier curry, you can also add chili flakes.", 
                "Mix everything together, reduce the heat to minimum (1/9), and add the cornstarch.", 
                "Stir and let the chicken simmer for 10–15 minutes so it fully absorbs the sauce.", 

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
                "500 г концентрированного томатного сока", 
                "200 г греческой колбасы", 
                "50 г феты", 
                "1 луковица", 
                "4 зубчика чеснока", 
                "1 бульонный кубик", 
                "Соль, перец, паприка, чили", 

                ],
                instructions: [
                "Сварите орзо в подсоленной воде согласно инструкции на упаковке.", 
                "Тем временем обжарьте колбасу на сильном огне. Добавьте лук и выдавите чеснок.", 
                "Когда орзо сварится, слейте почти всю воду, оставив небольшое количество воды, в которой варились макароны.", 
                "Убавьте огонь до минимума, добавьте томатный сок, обжаренную колбасу с луком и чесноком, раскрошенную фету и приправы.", 
                "Хорошо перемешайте, доведите до слабого кипения, затем снимите с огня и дайте постоять 5–10 минут перед подачей.", 

                ],
                note: ""
             },
            en: {
                title: "Orzo with Greek Sausage",
                meta:  {
                    time: "25 min",
                    servings: "Serves 6"
                  },
                ingredients: [
                "500 g orzo", 
                "500 g concentrated tomato juice", 
                "200 g Greek sausage", 
                "50 g feta", 
                "1 onion", 
                "4 cloves of garlic", 
                "1 bouillon cube", 
                "Salt, pepper, paprika, chili", 

                ],
                instructions: [
                "Cook the orzo in salted water according to the package instructions.", 
                "Meanwhile, fry the sausage over high heat. Add the onion and press in the garlic.", 
                "When the orzo is cooked, drain almost all the water, leaving a small amount of the pasta cooking water.", 
                "Reduce the heat to low, add the tomato juice, the fried sausage with onion and garlic, crumbled feta, and the seasonings.", 
                "Mix well, bring to a gentle simmer, then remove from the heat and let it rest for 5–10 minutes before serving.", 

                ],
                note: ""
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
                "Замешивайте тесто в течение 8–12 минут. Оно должно получиться мягким, тянуться, не рваться и не липнуть к рукам.", 
                "Дайте тесту отдохнуть 30 минут.", 
                "Измельчите лук в блендере и добавьте его в фарш.", 
                "Растворите половину бульонного кубика в 50 мл воды и добавьте к фаршу. Приправьте солью и перцем, а также добавьте дополнительные специи по вкусу, например, паприки и чили, если хотите.", 
                "Слегка припылите рабочую поверхность мукой и раскатайте тесто.", 
                "Вырежьте кружочки диаметром 5–7 см. Отложите обрезки отдельно, не вмешивая их обратно в основное тесто.", 
                "Выложите примерно по 1 чайной ложке фарша на каждый кружок.", 
                "Смочите одну половину внешнего края водой, сложите в форме полумесяца, защипните края и сверните в пельмень.", 
                "Если пельмени планируете есть сразу, отварите в кипящей подсоленной воде после всплытия минут 6-7", 
                "Если пельмени замораживаете, то выложите готовые пельмени на припыленный мукой противень так, чтобы они не соприкасались.", 
                "Охладите пельмени в холодильнике в течение 20–30 минут, затем уберите в морозилку.", 
                "Через 4–6 часов переложите их в пакет или контейнер, где их можно хранить слоями.", 
                "Чтобы сварить замороженные или свежие пельмени, бросьте их в кипящую воду и варите 6–7 минут после того, как они всплывут на поверхность.", 

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
                "Knead the dough for 8–12 minutes. It should become soft, elastic, not tear, and not stick to your hands.", 
                "Let the dough rest for 30 minutes.", 
                "Blend the onion and add it to the ground meat.", 
                "Dissolve half of the bouillon cube in 50 ml of water and add it to the meat. Season with salt and pepper, and add additional spices to taste, such as paprika and chili if desired.", 
                "Lightly dust the work surface with flour and roll out the dough.", 
                "Cut out circles 5–7 cm in diameter. Set the scraps aside without kneading them back into the main dough.", 
                "Place about 1 teaspoon of filling onto each circle.", 
                "Moisten one half of the outer edge with water, fold into a half-moon shape, pinch the edges together, and shape into a dumpling.", 
                "If you plan to eat the dumplings right away, boil them in salted water for 6–7 minutes after they float to the surface.", 
                "If you are freezing the dumplings, place them on a flour-dusted tray so that they do not touch each other.", 
                "Chill the dumplings in the refrigerator for 20–30 minutes, then transfer them to the freezer.", 
                "After 4–6 hours, move them to a bag or container where they can be stored in layers.", 
                "To cook frozen or fresh dumplings, drop them into boiling water and cook for 6–7 minutes after they float to the surface.",            

                ],
                note: "It is better not to roll out all the dough at once, but to divide it into several parts and do several rollouts. The remaining dough can be used for the final batch of dumplings."
             }
        },
        "main_dish_pasta_carbonara":  {
            ru: {
                title: "Паста карбонара",
                meta:  {
                    time: "15 мин",
                    servings: "2 порций"
                  },
                ingredients: [
                "200 мл сливок (15–20%)", 
                "180 г спагетти", 
                "150 г копченого бекона", 
                "2 зубчика чеснока", 
                "1 яичный желток", 
                "Соль, перец", 
                "Пармиджано для посыпания", 

                ],
                instructions: [
                "Сварите спагетти в слегка подсоленной воде согласно инструкции на упаковке.", 
                "Тем временем обжарьте бекон на сильном огне и добавьте чеснок.", 
                "В небольшой миске смешайте сливки с яичным желтком, солью и перцем.", 
                "Когда паста сварится, слейте почти всю воду, оставив немного воды, в которой варились спагетти.", 
                "Верните спагетти в кастрюлю и убавьте огонь до очень слабого.", 
                "Влейте сливочно-яичную смесь в бекон, постоянно помешивая, около 30 секунд. Затем добавьте всё к спагетти и готовьте на слабом огне около 5 минут, аккуратно перемешивая.", 
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


    }
};