/* ### MAIN JAVASCRIPT ### */

/* jQuery for text overlay on main image */

$(function() {
    $("h1")
    .wrapInner("<span>")

    $("h1 br")
    .before ("<span class='spacer'>")
    .after("<span class='spacer'>");
});