const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    scrollbarThumb.addEventListener("mousedown" , (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            const maxThumbPosition = sliderScollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

            const boundedPosition = Math.max(0 , Math.min(maxThumbPosition , newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
        
            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }
        const handleMouseUp = () => {
            document.removeEventListener("mousemove" , handleMouseMove);
            document.removeEventListener("mouseup" , handleMouseUp);
        }

        document.addEventListener("mousemove" , handleMouseMove);
        document.addEventListener("mouseup" , handleMouseUp);
    });

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    }
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`
    }
    imageList.addEventListener("scroll" , () => {
        handleSlideButtons();
        updateScrollThumbPosition();
    })
};

window.addEventListener("load", initSlider);

const initSlider2 = () => {
    const imageList2 = document.querySelector(".slider-wrapper2 .image-list2");
    const slideButtons2 = document.querySelectorAll(".slider-wrapper2 .slide-button2");
    const sliderScollbar2 = document.querySelector(".container .slider-scrollbar2");
    const scrollbarThumb2 = sliderScollbar2.querySelector(".scrollbar-thumb2");
    const maxScrollLeft2 = imageList2.scrollWidth - imageList2.clientWidth;

    scrollbarThumb2.addEventListener("mousedown" , (e2) => {
        const startX = e2.clientX;
        const thumbPosition2 = scrollbarThumb2.offsetLeft;
        const handleMouseMove = (e2) => {
            const deltaX = e2.clientX - startX;
            const newThumbPosition2 = thumbPosition2 + deltaX;
            const maxThumbPosition2 = sliderScollbar2.getBoundingClientRect().width - scrollbarThumb2.offsetWidth;

            const boundedPosition2 = Math.max(0 , Math.min(maxThumbPosition2 , newThumbPosition2));
            const scrollPosition2 = (boundedPosition2 / maxThumbPosition2) * maxScrollLeft2;
        
            scrollbarThumb2.style.left = `${boundedPosition2}px`;
            imageList2.scrollLeft = scrollPosition2;
        }
        const handleMouseUp = () => {
            document.removeEventListener("mousemove" , handleMouseMove);
            document.removeEventListener("mouseup" , handleMouseUp);
        }

        document.addEventListener("mousemove" , handleMouseMove);
        document.addEventListener("mouseup" , handleMouseUp);
    });

    slideButtons2.forEach(button => {
        button.addEventListener("click", () => {
            const direction2 = button.id === "prev-slide2" ? -1 : 1;
            const scrollAmount2 = imageList2.clientWidth * direction2;
            imageList2.scrollBy({ left: scrollAmount2, behavior: "smooth" });
        });
    });
    const handleSlideButtons = () => {
        slideButtons2[0].style.display = imageList2.scrollLeft <= 0 ? "none" : "block";
        slideButtons2[1].style.display = imageList2.scrollLeft >= maxScrollLeft2 ? "none" : "block";
    }
    const updateScrollThumbPosition = () => {
        const scrollPosition2 = imageList2.scrollLeft;
        const thumbPosition2 = (scrollPosition2 / maxScrollLeft2) * (sliderScollbar2.clientWidth - scrollbarThumb2.offsetWidth);
        scrollbarThumb2.style.left = `${thumbPosition2}px`
    }
    imageList2.addEventListener("scroll" , () => {
        handleSlideButtons();
        updateScrollThumbPosition();
    })
};

window.addEventListener("load", initSlider2);