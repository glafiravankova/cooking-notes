// Ждем, пока весь HTML загрузится
document.addEventListener('DOMContentLoaded', function() {
    
    console.log('🍳 Кулинарные заметки загружены!');
    
    // ========== ФУНКЦИОНАЛ ВКЛАДОК ==========
    
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Функция переключения вкладок
    function switchTab(tabId) {
        // Скрыть все вкладки
        tabContents.forEach(content => {
            content.classList.remove('active');
        });
        
        // Убрать активный класс со всех кнопок
        tabButtons.forEach(button => {
            button.classList.remove('active');
        });
        
        // Показать выбранную вкладку
        const activeContent = document.getElementById(tabId);
        if (activeContent) {
            activeContent.classList.add('active');
        }
        
        // Активировать соответствующую кнопку
        const activeButton = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
        
        // Сохранить выбранную вкладку в localStorage
        localStorage.setItem('lastActiveTab', tabId);
    }
    
    // Добавить обработчики кликов на кнопки вкладок
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            switchTab(tabId);
            
            // Анимация нажатия
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Восстановить последнюю активную вкладку
    const lastActiveTab = localStorage.getItem('lastActiveTab');
    if (lastActiveTab && document.getElementById(lastActiveTab)) {
        switchTab(lastActiveTab);
    } else if (tabButtons.length > 0) {
        const firstTabId = tabButtons[0].getAttribute('data-tab');
        switchTab(firstTabId);
    }
    
    // ========== ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА ==========
    
    // Функция обновления всех текстов
    function updateTexts(lang) {
        // Проверяем, загружен ли translations
        if (typeof translations === 'undefined') {
            console.error('Ошибка: translations.js не загружен!');
            return;
        }
        
        console.log('Обновляем тексты на языке:', lang);
        
        // 1. Заголовок сайта в шапке
        const headerTitle = document.querySelector('.main-header h1');
        if (headerTitle) {
            headerTitle.textContent = translations.common[lang].siteTitle;
        }
        
        // 2. Текст в подвале (год + название)
        const footerTexts = document.querySelectorAll('.main-footer p');
        if (footerTexts.length >= 1) {
            footerTexts[0].textContent = `2026 ${translations.common[lang].footer}`;
        }
        
        // 3. Заметка в подвале
        const footerNote = document.querySelector('.footer-note');
        if (footerNote) {
            footerNote.textContent = translations.common[lang].footerNote;
        }
        
        // 4. Категории (кнопки вкладок)
        const categorySpans = document.querySelectorAll('.tab-btn span');
        categorySpans.forEach((span, index) => {
            if (index < translations.categories[lang].length) {
                span.textContent = translations.categories[lang][index];
            }
        });
        
        // 5. Заголовки категорий (h2)
        const categoryTitles = document.querySelectorAll('.category-title');
        categoryTitles.forEach((title, index) => {
            if (index < translations.categories[lang].length) {
                title.textContent = translations.categories[lang][index];
            }
        });
        
        // 6. Названия рецептов на главной
        const recipeTitles = document.querySelectorAll('.recipe-info h3');
        recipeTitles.forEach(title => {
            // Сохраняем оригинальный русский текст в data-атрибут при первой загрузке
            if (!title.hasAttribute('data-original-ru')) {
                title.setAttribute('data-original-ru', title.textContent.trim());
            }
            
            // Получаем текущий текст
            const currentText = title.textContent.trim();
            
            // Для русского языка - берем сохраненный оригинал
            if (lang === 'ru') {
                const originalRu = title.getAttribute('data-original-ru');
                title.textContent = originalRu;
            } 
            // Для английского - ищем перевод
            else {
                // Пробуем найти перевод по оригинальному русскому тексту
                const originalRu = title.getAttribute('data-original-ru');
                
                if (translations.recipes && translations.recipes[originalRu]) {
                    title.textContent = translations.recipes[originalRu][lang];
                } 
                // Если не нашли по оригиналу, пробуем по текущему тексту
                else if (translations.recipes && translations.recipes[currentText]) {
                    title.textContent = translations.recipes[currentText][lang];
                }
            }
        });
        
        // 7. ВРЕМЯ ПРИГОТОВЛЕНИЯ на главной
        const recipeTimes = document.querySelectorAll('.recipe-time');
        recipeTimes.forEach(timeElement => {
            let timeText = timeElement.textContent;
            
            if (lang === 'en') {
                timeText = timeText.replace(/мин/g, translations.recipeMeta[lang].time);
                if (timeText.includes('активных')) {
                    timeText = timeText.replace('активных', translations.recipeMeta[lang].active);
                }
            } else {
                timeText = timeText.replace(/minutes/g, translations.recipeMeta[lang].time);
                if (timeText.includes('active')) {
                    timeText = timeText.replace('active', translations.recipeMeta[lang].active);
                }
            }
            
            timeElement.textContent = timeText;
        });
        
        // 8. Кнопка "Вернуться к рецептам"
        const backLink = document.querySelector('.back-link');
        if (backLink) {
            const icon = backLink.querySelector('i');
            if (icon) {
                backLink.innerHTML = `${icon.outerHTML} ${translations.common[lang].backToRecipes}`;
            }
        }
        
        // 9. ПЕРЕВОД СТРАНИЦЫ РЕЦЕПТА
        translateRecipePage(lang);
    }
    
    // Функция перевода страницы рецепта
    function translateRecipePage(lang) {
        // Определяем, на какой странице мы находимся
        const path = window.location.pathname;
        let recipeKey = null;
        
        if (path.includes('breakfast_american_style_pancakes')) {
            recipeKey = 'breakfast_american_style_pancakes';
        } else if (path.includes('breakfast_bliny')) {
            recipeKey = 'breakfast_bliny';
        } else if (path.includes('breakfast_oat_porridge')) {
            recipeKey = 'breakfast_oat_porridge';
        } else if (path.includes('breakfast_eggs_sausage_tomato')) {
            recipeKey = 'breakfast_eggs_sausage_tomato';
        } else if (path.includes('snacks_marinated_mashrooms')) {
            recipeKey = 'snacks_marinated_mashrooms';
        } else if (path.includes('snacks_greek_salad')) {
            recipeKey = 'snacks_greek_salad';
        } else if (path.includes('snacks_fried_zucchini')) {
            recipeKey = 'snacks_fried_zucchini';
        } else if (path.includes('snacks_salad_with_yogurt_dressing')) {
            recipeKey = 'snacks_salad_with_yogurt_dressing';
        } else if (path.includes('snacks_marinated_mashrooms')) {
            recipeKey = 'snacks_marinated_mashrooms';
        } else if (path.includes('snacks_semi_salted_cucumbers')) {
            recipeKey = 'snacks_semi_salted_cucumbers';
        } else if (path.includes('snaks_salad_carrot_cabbabege')) {
            recipeKey = 'snaks_salad_carrot_cabbabege';
        } else if (path.includes('snacks_green_salad_with_balsamic')) {
            recipeKey = 'snacks_green_salad_with_balsamic';
        } else if (path.includes('main_dish_chicken_curry')) {
            recipeKey = 'main_dish_chicken_curry';
        } else if (path.includes('main_dish_pelmeni')) {
            recipeKey = 'main_dish_pelmeni';
        } else if (path.includes('main_dish_orzo')) {
            recipeKey = 'main_dish_orzo';
        } else if (path.includes('main_dish_pasta_carbonara')) {
            recipeKey = 'main_dish_pasta_carbonara';
        } else if (path.includes('dessert_banana_bread')) {
            recipeKey = 'dessert_banana_bread';
        } else if (path.includes('dessert_bese')) {
            recipeKey = 'dessert_bese';
        } else if (path.includes('dessert_cupcake_creamchease_straberry_jam')) {
            recipeKey = 'dessert_cupcake_creamchease_straberry_jam';
        } else if (path.includes('dessert_napoleon_individual')) {
            recipeKey = 'dessert_napoleon_individual';
        } else if (path.includes('dessert_panna_cotta')) {
            recipeKey = 'dessert_panna_cotta';
        }  else if (path.includes('dessert_pancake_cake')) {
            recipeKey = 'dessert_pancake_cake';
        } else if (path.includes('soup_chicken_broth')) {
            recipeKey = 'soup_chicken_broth';
        } else if (path.includes('soup_creamy_mashroom_soup')) {
            recipeKey = 'soup_creamy_mashroom_soup';
        } else if (path.includes('dessert_profiterol')) {
            recipeKey = 'dessert_profiterol';
        } else if (path.includes('dessert_grapefruit_cake')) {
            recipeKey = 'dessert_grapefruit_cake';
        } else if (path.includes('dessert_grapefruit_jelly')) {
            recipeKey = 'dessert_grapefruit_jelly';
        } else if (path.includes('dessert_napoleon_cake')) {
            recipeKey = 'dessert_napoleon_cake';
        }
        
        if (recipeKey && translations.recipeDetails && translations.recipeDetails[recipeKey]) {
            const recipe = translations.recipeDetails[recipeKey][lang];
            
            // Заголовок рецепта
            const recipeTitle = document.querySelector('.recipe-header h1');
            if (recipeTitle) recipeTitle.textContent = recipe.title;
            
            // Мета-информация (время и порции)
            const metaSpans = document.querySelectorAll('.recipe-meta span');
            if (metaSpans.length >= 2) {
                metaSpans[0].innerHTML = `<i class="far fa-clock"></i> ${recipe.meta.time}`;
                metaSpans[1].innerHTML = `<i class="fas fa-user-friends"></i> ${recipe.meta.servings}`;
            }

            // Заголовок "Ингредиенты"
            const ingredientsTitle = document.querySelector('.ingredients h2');
            if (ingredientsTitle) {
                ingredientsTitle.innerHTML = `<i class="fas fa-shopping-basket"></i> ${translations.sections[lang].ingredients}`;
            }
            
            // Заголовок "Способ приготовления"
            const instructionsTitle = document.querySelector('.instructions h2');
            if (instructionsTitle) {
                instructionsTitle.innerHTML = `<i class="fas fa-list-ol"></i> ${translations.sections[lang].instructions}`;
            }
            // Ингредиенты
            const ingredientsList = document.querySelector('.ingredients ul');
            if (ingredientsList) {
                ingredientsList.innerHTML = '';
                recipe.ingredients.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    ingredientsList.appendChild(li);
                });
            }
            
            // Инструкции
            const instructionsList = document.querySelector('.instructions ol');
            if (instructionsList) {
                instructionsList.innerHTML = '';
                recipe.instructions.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    instructionsList.appendChild(li);
                });
            }
            
            // Заметка/совет
            const note = document.querySelector('.note');
            if (note && recipe.note && translations.sections[lang]) {
                const tipText = translations.sections[lang].tip;
                note.innerHTML = `<p><strong>${tipText}:</strong> ${recipe.note}</p>`;
            }
        }
    }
    
    // Функция переключения языка
    function switchLanguage(lang) {
        // Обновить активную кнопку в подвале
        document.querySelectorAll('.footer-lang-btn').forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Обновить все тексты
        updateTexts(lang);
        
        // Сохранить выбор
        localStorage.setItem('preferredLang', lang);
        console.log('Язык переключен на:', lang);
    }
    
    // Добавить обработчики на кнопки в подвале
    document.querySelectorAll('.footer-lang-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.dataset.lang;
            switchLanguage(lang);
        });
    });
    
    // Загрузить сохраненный язык
    const savedLang = localStorage.getItem('preferredLang') || 'ru';
    switchLanguage(savedLang);
    
    // ========== ОСТАЛЬНЫЕ ФУНКЦИИ ==========
    
    // Фиксированные вкладки при прокрутке
    window.addEventListener('scroll', function() {
        const tabsContainer = document.querySelector('.categories');
        const header = document.querySelector('.main-header');
        
        if (tabsContainer && header) {
            if (window.scrollY > header.offsetHeight) {
                tabsContainer.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                tabsContainer.style.background = 'rgba(255, 255, 255, 0.95)';
            } else {
                tabsContainer.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
                tabsContainer.style.background = 'white';
            }
        }
    });
    
    // Анимация карточек рецептов
    const recipeCards = document.querySelectorAll('.recipe-card:not(.placeholder)');
    
    recipeCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const img = this.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1.08)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const img = this.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1)';
            }
        });
    });
    
    // Загрузка изображений
    const recipeImages = document.querySelectorAll('.recipe-image img');
    
    recipeImages.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
        
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
    
    console.log('✅ Все функции инициализированы');
});
