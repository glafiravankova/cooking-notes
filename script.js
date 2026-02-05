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
            
            console.log(`Переключились на категорию: ${this.querySelector('span').textContent}`);
        });
    });
    
    // Восстановить последнюю активную вкладку или установить первую
    const lastActiveTab = localStorage.getItem('lastActiveTab');
    if (lastActiveTab && document.getElementById(lastActiveTab)) {
        switchTab(lastActiveTab);
    } else if (tabButtons.length > 0) {
        const firstTabId = tabButtons[0].getAttribute('data-tab');
        switchTab(firstTabId);
    }
    
    // ========== ФИКСИРОВАННЫЕ ВКЛАДКИ ПРИ ПРОКРУТКЕ ==========
    
    window.addEventListener('scroll', function() {
        const tabsContainer = document.querySelector('.categories');
        const header = document.querySelector('.main-header');
        
        if (window.scrollY > header.offsetHeight) {
            tabsContainer.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
            tabsContainer.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            tabsContainer.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
            tabsContainer.style.background = 'white';
        }
    });
    
    // ========== ПЛАВНАЯ ПРОКРУТКА ==========
    
    // Для всех ссылок, которые начинаются с #
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========== АНИМАЦИЯ КАРТОЧЕК РЕЦЕПТОВ ==========
    
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
    
    // ========== ЗАГРУЗКА ИЗОБРАЖЕНИЙ С АНИМАЦИЕЙ ==========
    
    const recipeImages = document.querySelectorAll('.recipe-image img');
    
    recipeImages.forEach(img => {
        // Добавляем класс загрузки
        img.style.opacity = '0';
        
        // Когда изображение загрузится
        img.addEventListener('load', function() {
            this.style.opacity = '1';
            this.style.transition = 'opacity 0.5s ease';
        });
        
        // Если изображение уже загружено (из кэша)
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
    
    // ========== КНОПКА ДОБАВЛЕНИЯ РЕЦЕПТА ==========
    
    const placeholderCards = document.querySelectorAll('.recipe-card.placeholder');
    
    placeholderCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            
            const currentTab = document.querySelector('.tab-content.active');
            const categoryTitle = currentTab.querySelector('.category-title').textContent;
            
            alert(`Вы хотите добавить новый рецепт в категорию "${categoryTitle}"\n\nЭта функция будет реализована в ближайшем обновлении!`);
            
            // Анимация клика
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
    
    // ========== КЛАВИАТУРНЫЕ СОЧЕТАНИЯ ==========
    
    document.addEventListener('keydown', function(e) {
        // Ctrl + цифра от 1 до 7 для переключения вкладок
        if (e.ctrlKey && e.key >= '1' && e.key <= '7') {
            e.preventDefault();
            const index = parseInt(e.key) - 1;
            if (tabButtons[index]) {
                const tabId = tabButtons[index].getAttribute('data-tab');
                switchTab(tabId);
                
                // Подсветка выбранной вкладки
                tabButtons[index].style.backgroundColor = '#f0e6d6';
                setTimeout(() => {
                    tabButtons[index].style.backgroundColor = '';
                }, 300);
            }
        }
        
        // Esc для сброса фильтров (можно добавить позже)
        if (e.key === 'Escape') {
            console.log('Сброс фильтров (функция в разработке)');
        }
    });
    
    // ========== ИНИЦИАЛИЗАЦИЯ ==========
    
    console.log('✅ Все функции инициализированы');
    console.log('Доступные категории:', Array.from(tabButtons).map(btn => btn.querySelector('span').textContent));
    
});