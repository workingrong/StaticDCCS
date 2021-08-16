const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const table = document.querySelector('table');
const map = document.getElementById('map'); // iframe:google map
const form = document.getElementById('form'); // iframe: google forms - registration form
const schedules = document.getElementById('schedules'); // iframe: google excel - schedules
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        if (table != null) {
            table.setAttribute('class', 'table table-hover table-dark');
        }

        if (map != null) {
            map.setAttribute('style', 'filter: invert(90%)');
        }

        if (form != null) {
            form.setAttribute('style', 'filter: invert(90%)');
        }

        if (schedules != null) {
            schedules.setAttribute('style', 'filter: invert(90%)');
        }
    }
    else {
        toggleSwitch.checked = false;
        if (table != null) {
            table.setAttribute('class', 'table table-hover');
        }

        if (map != null) {
            map.removeAttribute('style');
        }

        if (form != null) {
            form.removeAttribute('style');
        }

        if (schedules != null) {
            schedules.removeAttribute('style')
        }
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (table != null) {
            table.setAttribute('class', 'table table-hover table-dark');
        }
        
        if (map != null) {
            map.setAttribute('style', 'filter: invert(90%)');
        }

        if (form != null) {
            form.setAttribute('style', 'filter: invert(90%)');
        }

        if (schedules != null) {
            schedules.setAttribute('style', 'filter: invert(90%)');
        }

        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        if (table != null) {
            table.setAttribute('class', 'table table-hover');
        }

        if (map != null) {
            map.removeAttribute('style');
        }

        if (form != null) {
            form.removeAttribute('style');
        }

        if (schedules != null) {
            schedules.removeAttribute('style')
        }

        localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);