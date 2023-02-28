const loadingPace = () => {
    let preloader = document.querySelector("#preloader");

    if (!preloader) return;

    if (document.body.classList.contains("pace-done")) preloader.classList.add("isdone");

    window.addEventListener("load", () => {
        preloader.classList.add("isdone")
    });

    if (typeof window.Pace === 'undefined') return;

    window.Pace.on("start", () => preloader.classList.remove("isdone"));

    window.Pace.on("done", () => preloader.classList.add("isdone"));
}

export default loadingPace