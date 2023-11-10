button.onclick = function () {
    // если фон кнопки чёрный
    if (button.style.backgroundColor == 'black') { // изменим его на белый, а текст сделаем чёрным
    button.style.backgroundColor = 'red';
    button.style.color = 'pink';
    }
    else {
    // иначе сделаем фон чёрным, а текст белым
    button.style.backgroundColor = 'black';
    button.style.color = 'white';
    }
}