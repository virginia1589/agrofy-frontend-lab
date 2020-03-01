window.addEventListener("scroll", () => {
    const getScrollTop = () => {
        if (window.pageYOffset) return window.pageYOffset;
            return document.documentElement.clientHeight
                ? document.documentElement.scrollTop
                : document.body.scrollTop;
    }

    const scrollTop = getScrollTop();

    const header = document.getElementsByTagName("header")[0];

    console.log(header);

    if(scrollTop > 80) {
        header.classList.add("scroll");
    }
    else {
        header.classList.remove("scroll");
    }
});

