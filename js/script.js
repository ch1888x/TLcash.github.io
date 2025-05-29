document.addEventListener('DOMContentLoaded', function() {
    // 响应式菜单
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active'); // 可选：汉堡包图标动画
    });

    // 轮播图功能
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        carouselSlides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % carouselSlides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + carouselSlides.length) % carouselSlides.length;
        showSlide(currentSlide);
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 5000); // 每5秒切换一次
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    if (carouselSlides.length > 0) {
        showSlide(currentSlide);
        startSlideShow();

        prevButton.addEventListener('click', () => {
            stopSlideShow();
            prevSlide();
            startSlideShow(); // 重新开始计时
        });

        nextButton.addEventListener('click', () => {
            stopSlideShow();
            nextSlide();
            startSlideShow(); // 重新开始计时
        });

        // 鼠标移入停止轮播，移出继续
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            heroSection.addEventListener('mouseenter', stopSlideShow);
            heroSection.addEventListener('mouseleave', startSlideShow);
        }
    }


    // 常见问题手风琴效果 (假设 help.html 中有此类结构)
    const faqItems = document.querySelectorAll('.faq-item h3'); // 假设每个问题是 h3

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.nextElementSibling; // 答案紧随问题之后
            if (answer && answer.classList.contains('faq-answer')) {
                answer.classList.toggle('active');
                // 可选：添加或移除箭头图标方向
                item.classList.toggle('active');
            }
        });
    });

    // 假设 help.html 的 FAQ 结构大致如下：
    /*
    <div class="faq-item">
        <h3>问题1标题</h3>
        <div class="faq-answer">
            <p>问题1的答案内容。</p>
        </div>
    </div>
    */
    // 需要在 style.css 中添加 .faq-answer 的样式，如：
    /*
    .faq-answer {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease-out;
        padding: 0 15px;
    }
    .faq-answer.active {
        max-height: 200px; // 根据内容调整
        padding: 15px;
    }
    */
});
