let z_index = 0;
var selected;

$('.draw-button').click(function () { /*когда происходит нажатие на класс draw-button*/
    let amount = $('#amount-of-figures').val(); /*получаем значение из текстового поля*/
    let shapeType = $(this).attr('shape-type') /*присвание значение типа фигуры с кнопки */
    createShapes(shapeType, amount); /*передаем в функцию 2 параметра: тип фигуры и количество фигур*/
}); 

function createShapes(shapeType, amount) {
    let maxWidth = $(window).width(); /*считываем ширину окна*/
    let maxHeight = $(window).height();/*считываем длину окна*/

    for (let i = 0; i < amount; i++) { /*создаем нужное количество фигур */
        z_index += 1; /*каждая новая фигура на свой выше */

        let pos_x, pos_y; /*создаем переменные позиций х,у */
        let size = Math.ceil(Math.random() * (200 - 50)) + 20; /*задаем размер фигур рандомным способом с округлением вверх  */
        let properties; /*создаем массив свойств*/

        switch (shapeType) {
            case 'square': /*если тип квадрат */
                pos_x = Math.floor(Math.random() * (maxWidth - size / 2) + size / 2); /*позиция х рандом способом с округлением вниз */
                pos_y = Math.floor(Math.random() * maxHeight - size) + size / 2 + 50; /*позиция у рандом способом с округлением вниз */
                properties = `top: ${pos_x}px; left: ${pos_y}px; width: ${size}px; height: ${size}px; z-index: ${z_index};`;
                break;

            case 'triangle':/*если тип треугольник */
                pos_x = Math.floor(Math.random() * (maxWidth - size / 2) + size / 2); /*позиция х рандом способом с округлением вниз */
                pos_y = Math.floor(Math.random() * maxHeight - size) + size / 2 + 50; /*позиция у рандом способом с округлением вниз */
                properties = `top: ${pos_x}px; left: ${pos_y}px; width: ${size}px; height: ${size}px; z-index: ${z_index};`; /*задаем параметры фигуре: верхнюю левую точку, ширину, высоту, слой */
                break;

            case 'circle':/*если тип круг */
                pos_x = Math.floor(Math.random() * (maxWidth - size / 2) + size / 2); /*позиция х рандом способом с округлением вниз */
                pos_y = Math.floor(Math.random() * maxHeight - size) + size / 2 + 50; /*позиция у рандом способом с округлением вниз */
                properties = `top: ${pos_x}px; left: ${pos_y}px; width: ${size}px; height: ${size}px; z-index: ${z_index};`; /*задаем параметры фигуре: верхнюю левую точку, ширину, высоту, слой */
                properties = properties.concat(`border-radius: ${size / 2}px;`); /*добавляем радиус скругления к параметрам */
                break;
        }

        let object = $('<div class="shape"></div>'); /*создаем объект */

        object.attr("style", properties); /*назначаем свойства в стиль объекта */
        object.addClass(shapeType); /*назначаем класс объекта значение shapeType */

        $("#wrapper").append(object); /*добавляем объекст в id=wrapper */
    }
}

$('#wrapper').on('click', 'div.shape', function () { /*если кликнуть на фигуру */
    if ($(this).is(selected)) {
        $(this).remove(); 
    } else {
        selected?.removeClass('selected-shape');
        $(this).addClass('selected-shape');
        selected = $(this);
    }
});