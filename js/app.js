function button_click(){
    var day_light = document.getElementById('db_section');
    var active_light = document.getElementById('mode_change');
    day_light.classList.toggle('dark');
    active_light.classList.toggle('mode_change');
    
}

function button_click_view(){
    var active_view = document.getElementById('mode_change_view');
    var active_view_layout = document.getElementById('view');
    active_view.classList.toggle('mode_change');
    active_view_layout.classList.toggle('change_layout');
    
}




