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
    let lastClickedImage = '';      // the path here
    let isGameStarted = false;
    let isGameOver = false;
    let openedImages = 0;           // the counter of opened images

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    shuffle(images);

    $('div.cell').each(function () {
        $(this).append('<img src="' + cover + '" />');
    });

    for (let i = 0; i < $('div.cell').length; i++) {

        $($('div.cell')[i]).on({
            mouseenter: function () {
                $($(this)).empty();
                $($(this)).append('<img src="' + images[i] + '" width="200px" height="200px" />');
            },
            mouseleave: function () {
                $($(this)).empty();
                $($(this)).append('<img src="' + cover + '" width="200px" height="200px" />');
            },
            click: function () {

                if (!isGameStarted) {
                    for (let j = 0; j < $('div.cell').length; j++) {

                        $($('div.cell')[j]).empty();
                        $($('div.cell')[j]).append('<img src="' + cover + '" width="200px" height="200px" />');
                    }

                    $($('div.cell')).off('mouseenter');
                    $($('div.cell')).off('mouseleave');

                    isGameStarted = true;

                    return;
                }

                console.log('clicked');

                $($(this)).empty();
                $($(this)).append('<img src="' + images[i] + '" width="200px" height="200px" />')

                if (lastClickedImage == '') {
                    openedImages++;
                    lastClickedImage = images[i];
                }
                else if (lastClickedImage == images[i]) {
                    openedImages++;

                }

                if(openedImages == 16){
                    //winner
                }

            }
        });
    }



});