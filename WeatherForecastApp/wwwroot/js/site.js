// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Background color toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Load saved theme from localStorage or default to light
    const savedTheme = localStorage.getItem('theme') || 'light-theme';
    body.classList.add(savedTheme);
    updateToggleButtonText(savedTheme);
    
    // Toggle theme on button click
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            if (body.classList.contains('light-theme')) {
                body.classList.remove('light-theme');
                body.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark-theme');
                updateToggleButtonText('dark-theme');
            } else {
                body.classList.remove('dark-theme');
                body.classList.add('light-theme');
                localStorage.setItem('theme', 'light-theme');
                updateToggleButtonText('light-theme');
            }
        });
    }
    
    function updateToggleButtonText(theme) {
        if (toggleButton) {
            toggleButton.textContent = theme === 'light-theme' ? '🌙 Dark' : '☀️ Light';
        }
    }
});
