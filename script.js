function done(obj) {
    console.log(obj.hasAttribute('checked'));
    if (!obj.hasAttribute('checked')) {
        obj.nextElementSibling.nextElementSibling.remove();
        obj.nextElementSibling.remove();
        obj.style.borderRadius = '50px';
        obj.style.maxWidth = '15px';
        obj.setAttribute("checked", "true");
        obj.innerHTML = '<i class="far fa-check-circle"></i>';
    } else {
        obj.removeAttribute('checked');
        obj.removeAttribute('style');
        obj.innerHTML = 'Done';
        obj.insertAdjacentHTML('afterend', '<a href="#popup1" class="button -sun center">Reschedule</a>');
        obj.insertAdjacentHTML('afterend', '<div class="button -salmon center" onclick="notdone(this)">Not done</div>');
    }
}

function notdone(obj) {
    console.log(obj.hasAttribute('checked'));
    if (!obj.hasAttribute('checked')) {
        obj.previousElementSibling.remove();
        obj.nextElementSibling.remove();
        obj.style.borderRadius = '50px';
        obj.style.maxWidth = '15px';
        obj.setAttribute("checked", "true");
        obj.innerHTML = '<i class="far fa-times-circle"></i>';
    } else {
        obj.removeAttribute('checked');
        obj.removeAttribute('style');
        obj.innerHTML = 'Not done';
        obj.insertAdjacentHTML('afterend', '<a href="#popup1" class="button -sun center">Reschedule</a>');
        obj.insertAdjacentHTML('beforebegin', '<div class="button -green center" onclick="done(this)">Done</div>');
    }
}

function save(obj) {
    if (!obj.hasAttribute('checked')) {
        obj.style.borderRadius = '50px';
        obj.style.maxWidth = '15px';
        obj.setAttribute("checked", "true");
        obj.innerHTML = '<i class="far fa-check-circle" href="#"></i>';
    }
}

function addbtn() {
    p = document.querySelectorAll('.pdetail');
    r = document.querySelectorAll('.rdetail');
    console.log(p[0]);
    p.forEach(item => {
        item.insertAdjacentHTML('afterend', '<div class="buttons"></div>');
        item.nextSibling.style.marginTop = '0px'
        item.nextSibling.innerHTML = '<div class="button -regular center" onclick="window.location.href=\'#popup1e\'" style="flex-basis: 150px;"><i class="far fa-edit"></i></div><div class="button -salmon center" style="flex-basis: 150px;"><i class="far fa-trash-alt"></i></div>';
    });
    r.forEach(item => {
        item.insertAdjacentHTML('afterend', '<div class="buttons"></div>');
        item.nextSibling.style.marginTop = '0px'
        item.nextSibling.innerHTML = '<div class="button -regular center" onclick="window.location.href=\'#popup2e\'" style="flex-basis: 150px;"><i class="far fa-edit"></i></div><div class="button -salmon center" style="flex-basis: 150px;"><i class="far fa-trash-alt"></i></div>';
    });
}
