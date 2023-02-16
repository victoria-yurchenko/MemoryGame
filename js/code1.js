$(function () {

    let images = [
        './images/cat.png',
        './images/deer.png',
        './images/dog.png',
        './images/elephant.png',
        './images/mouse.png',
        './images/panda.png',
        './images/rabbit.png',
        './images/snake.png',
        './images/cat.png',
        './images/deer.png',
        './images/dog.png',
        './images/elephant.png',
        './images/mouse.png',
        './images/panda.png',
        './images/rabbit.png',
        './images/snake.png'
    ];

    let cover = './images/paw.png';
    let lastOpenedImage = '';      // the path here
    let isGameStarted = false;
    let isGameOver = false;
    let openedImages = 0;           // the counter of opened images
    let index = 0;
    const countCells = 4;           // field 4x4


    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    function buttonDialog() {

    }

    shuffle(images);


    for (let i = 0; i < countCells; i++) {
        for (let j = 0; j < countCells; j++) {

            let div = $('<div class="cell"></div>');

            div.append('<img src="' + cover + '" class="imgOuter" />');
            div.append('<img src="' + images[index++] + '" class="imgInner" />');

            div.on({
                mouseenter: function () {
                    $($(this)).children().eq(0).css({
                        display: "none"
                    })
                },
                mouseleave: function () {
                    $($(this)).children().eq(0).css({
                        display: "block"
                    })
                },
                click: function () {

                    // hiding the last opened image
                    $(this).mouseleave();

                    $($('div.cell')).off('mouseenter');
                    $($('div.cell')).off('mouseleave');
                    $($('div.cell')).off('click');

                    $($('div.cell')).on({
                        click: function () {

                            $($(this)).children().eq(0).css({
                                display: "none"
                            });

                            if (openedImages % 2 == 0 && openedImages != 0)
                                lastOpenedImage = '';

                            if (lastOpenedImage == '')
                                lastOpenedImage = $($(this)).children().eq(1).attr("src");

                            if (lastOpenedImage == $($(this)).children().eq(1).attr("src"))
                                openedImages++;
                            else {
                                $($('div.cell')).off('click');

                                buttonDialog
                            }
                                

                            if(openedImages == countCells * countCells)
                                //winner here;
                                ;
                            
                        }
                    })

                }
            })

            $($('div.cell-container')[i]).append(div);
        }
    }
});