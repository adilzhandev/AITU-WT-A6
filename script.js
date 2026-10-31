// Task 0: Run our code after the HTML elements are ready.
$(document).ready(function () {
    console.log("jQuery is ready!");

    // Task 1: Select by ID (#), class (.), and tag name.
    $("#change-text").on("click", function () {
        $("#demo-title").text("Hello from jQuery!");
    });

    $("#change-html").on("click", function () {
        $(".demo-description").html("I can add <strong>bold text</strong> with jQuery.");
    });

    $("#change-css").on("click", function () {
        $("#selector-demo span").css({
            "background-color": "#d6edb7",
            "color": "#18372d",
            "border-color": "#9fbe7f"
        });
    });

    $("#reset-selectors").on("click", function () {
        $("#demo-title").text("A little change starts here.");
        $(".demo-description").text("This paragraph is selected by its class.");
        $("#selector-demo span").removeAttr("style");
    });

    // Task 2: Hide, show, or switch the paragraph's visibility.
    $("#hide-text").on("click", function () {
        $("#visibility-text").hide();
    });
    $("#show-text").on("click", function () {
        $("#visibility-text").show();
    });
    $("#toggle-text").on("click", function () {
        $("#visibility-text").toggle();
    });

    // Task 3: Fade changes the image's opacity. Time is in milliseconds.
    // stop(true, true) finishes the current effect and clears queued effects.
    $("#fade-in").on("click", function () {
        $("#fade-image").stop(true, true).fadeIn(600);
    });
    $("#fade-out").on("click", function () {
        $("#fade-image").stop(true, true).fadeOut(600);
    });
    $("#fade-toggle").on("click", function () {
        $("#fade-image").stop(true, true).fadeToggle(600);
    });

    // Task 4: Slide changes the panel's height.
    $("#slide-up").on("click", function () {
        $("#slide-panel").stop(true, true).slideUp(400);
    });
    $("#slide-down").on("click", function () {
        $("#slide-panel").stop(true, true).slideDown(400);
    });
    $("#slide-toggle").on("click", function () {
        $("#slide-panel").stop(true, true).slideToggle(400);
    });

    // Task 5: Add list items at the end or beginning. Remove the last item.
    let itemNumber = 4;
    $("#add-item").on("click", function () {
        $("#study-list").append("<li>Study item " + itemNumber + "</li>");
        itemNumber++;
        $("#empty-list").hide();
    });
    $("#prepend-item").on("click", function () {
        $("#study-list").prepend("<li>Priority item " + itemNumber + "</li>");
        itemNumber++;
        $("#empty-list").hide();
    });
    $("#remove-item").on("click", function () {
        $("#study-list li:last-child").remove();
        if ($("#study-list li").length === 0) {
            $("#empty-list").show();
        }
    });

    // Task 6: Read and change HTML attributes with attr().
    $("#change-image").on("click", function () {
        if ($("#attribute-image").attr("src") === "assets/mountains.svg") {
            $("#attribute-image").attr("src", "assets/sunset.svg");
            $("#attribute-image").attr("alt", "An illustrated sunset over the hills");
            $("#image-caption").text("Evening hills · sunset.svg");
        } else {
            $("#attribute-image").attr("src", "assets/mountains.svg");
            $("#attribute-image").attr("alt", "An illustrated mountain lake in the morning");
            $("#image-caption").text("Morning mountains · mountains.svg");
        }
    });
    $("#change-link").on("click", function () {
        if ($("#resource-link").attr("href") === "https://jquery.com/") {
            $("#resource-link").attr("href", "https://api.jquery.com/");
            $("#resource-link").text("Visit the jQuery API ↗");
        } else {
            $("#resource-link").attr("href", "https://jquery.com/");
            $("#resource-link").text("Visit the jQuery website ↗");
        }
        $("#link-destination").text($("#resource-link").attr("href"));
    });

    // Task 7: val() reads inputs; text() safely displays what was typed.
    $("#name-input, #email-input").on("input", function () {
        $("#preview-name").text($("#name-input").val() || "Your name");
        $("#preview-email").text($("#email-input").val() || "Your email");
    });
    $("#profile-form").on("submit", function (event) {
        event.preventDefault(); // This demo does not send data to a server.
    });

    // Task 8: Increase the square's size and move it right.
    $("#animate-basic").on("click", function () {
        $("#basic-box").stop(true, true).css({ left: 0, top: 0, width: 64, height: 64 });
        $("#basic-box").animate({ left: 100, width: 100, height: 100 }, 800);
    });
    $("#reset-basic").on("click", function () {
        $("#basic-box").stop(true, true).css({ left: 0, top: 0, width: 64, height: 64 });
    });

    // Task 9: Chained animations run one after another, in order.
    $("#animate-sequence").on("click", function () {
        $("#sequence-box").stop(true, true).css({ left: 0, top: 0, width: 64, height: 64 });
        $("#sequence-box")
            .animate({ left: 130 }, 500)
            .animate({ top: 90 }, 500)
            .animate({ width: 36, height: 36 }, 500)
            .animate({ left: 0, top: 0, width: 64, height: 64 }, 700);
    });
    $("#reset-sequence").on("click", function () {
        $("#sequence-box").stop(true, true).css({ left: 0, top: 0, width: 64, height: 64 });
    });

    // Task 10: One animate() call changes position, size, and opacity together.
    $("#animate-combined").on("click", function () {
        $("#combined-box").stop(true, true).css({ left: 0, top: 0, width: 64, height: 64, opacity: 1 });
        $("#combined-box").animate({ left: 100, top: 45, width: 100, height: 100, opacity: 0.35 }, 1000);
    });
    $("#reset-combined").on("click", function () {
        $("#combined-box").stop(true, true).css({ left: 0, top: 0, width: 64, height: 64, opacity: 1 });
    });

    // Task 11: Move the ball right, then left, and repeat.
    let isBouncing = false;

    function bounceBall() {
        if (!isBouncing) return;

        // The last argument calls this function again after the return trip.
        $("#ball")
            .animate({ left: "100%" }, 1000)
            .animate({ left: "0%" }, 1000, bounceBall);
    }

    $("#start-ball").on("click", function () {
        if (isBouncing) return; // Prevent several animation loops at once.
        isBouncing = true;
        $("#start-ball").prop("disabled", true);
        $("#pause-ball").prop("disabled", false);
        $("#ball-status").text("The ball is bouncing.");
        bounceBall();
    });

    $("#pause-ball").on("click", function () {
        isBouncing = false;
        $("#ball").stop(true); // Clear the queue without jumping to the end.
        $("#start-ball").prop("disabled", false);
        $("#pause-ball").prop("disabled", true);
        $("#ball-status").text("Paused. Press Start to move again.");
    });

    $("#reset-ball").on("click", function () {
        isBouncing = false;
        $("#ball").stop(true).css("left", "0%");
        $("#start-ball").prop("disabled", false);
        $("#pause-ball").prop("disabled", true);
        $("#ball-status").text("Ready to start.");
    });
});
