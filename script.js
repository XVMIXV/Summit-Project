document.getElementById("learn-more-btn").addEventListener("click", function() {
    document.getElementById("info-section").scrollIntoView({ 
        behavior: "smooth", 
        block: "start", 
        inline: "nearest" 
    });
});   