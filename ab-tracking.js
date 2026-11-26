document.querySelectorAll("[data-ab-group]").forEach((button) => {
    button.addEventListener("click", () => {
        const eventName = button.dataset.abGroup === "B"
            ? "ab_variant_add_to_cart_click"
            : "ab_control_add_to_cart_click";
        console.info(eventName);

        if (typeof window.clarity === "function") {
            window.clarity("event", eventName);
        }

        if (typeof window.gtag === "function") {
            window.gtag("event", eventName, {
                ab_group: button.dataset.abGroup,
                product: "kit-escritorio-premium"
            });
        }
    });
});
