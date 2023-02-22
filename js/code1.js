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
    let lastOpenedImage = '';       // the path here
    let openedImages = 0;           // the counter of opened images
    const countCells = 4;           // field 4x4


    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    $('#btnNewGame').on({
        click: createField
    });

    createField();

    function createField() {

        openedImages = 0;
        lastOpenedImage = '';
        $('#winnerText').html('');

        for (let i = 0; i < countCells; i++)
            $($('div.cell-container')[i]).empty();

        $('#btnNewGame').css({
            display: 'none'
        });

        let index = 0;
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
                                
                                if ($($(this)).children().eq(0).css('display') == 'block' ||
                                    $($(this)).children().eq(0).css('display') == 'inline') {
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
                                        $('#winnerText').html('You lose!');
                                        $('#btnNewGame').css({
                                            display: 'block'
                                        })
                                    }

                                    if (openedImages == countCells * countCells) {
                                        $('#winnerText').html('You win!');
                                        $('#btnNewGame').css({
                                            display: 'block'
                                        })
                                    }
                                }


                            }
                        })

                    }
                })

                $($('div.cell-container')[i]).append(div);
            }
        }
    }







});