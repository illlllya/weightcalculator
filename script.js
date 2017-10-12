$(document).ready(function() {
    var $button = $('button');
    var tpfplateImg = '<img src="./images/2point5.png">';
    var fplateImg = '<img src="./images/5.png">';
    var tplateImg = '<img src="./images/10.png">';
    var tfplateImg = '<img src="./images/25.png">';
    var ffplateImg = '<img src="./images/45.png">';


    $button.click(function() {
        $('.textual').html();
        $('#error').html();

        var userInput = $('.weight').val();
        var userWeight = (userInput - 45) / 2;
        var tpfplate = 0;
        var fplate = 0;
        var tplate = 0;
        var tfplate = 0;
        var ffplate = 0;

        var tpfplateImgLoop = [];
        var fplateImgLoop = [];
        var tplateImgLoop = [];
        var tfplateImgLoop = [];
        var ffplateImgLoop = [];

        // console.log('User Picked ' + userInput);
        // console.log('Minus the bar = ' + (userInput - 45));
        // console.log('Per side = ' + userWeight);


        while (userWeight >= 45) {
            ffplate += 1;
            userWeight -= 45;
            console.log('weight is higher than 45, subtracting 45');
        }

        while (userWeight >= 25) {
            tfplate += 1;
            userWeight -= 25;
            console.log('weight is higher than 25, subtracting 25');
        }

        while (userWeight >= 10) {
            tplate += 1;
            userWeight -= 10;
            console.log('weight is higher than 10, subtracting 10');
        }

        while (userWeight >= 5) {
            fplate += 1;
            userWeight -= 5;
            console.log('weight is higher than 5, subtracting 5');
        }

        while (userWeight >= 2.5) {
            tpfplate += 1;
            userWeight -= 2.5;
            console.log('weight is higher than 2.5, subtracting 2.5');
        }


        for (var i = 0; i < tpfplate; i++) {
            tpfplateImgLoop.push(tpfplateImg);
        };

        for (var i = 0; i < fplate; i++) {
            fplateImgLoop.push(fplateImg);
        };

        for (var i = 0; i < tplate; i++) {
            tplateImgLoop.push(tplateImg);
        };

        for (var i = 0; i < tfplate; i++) {
            tfplateImgLoop.push(tfplateImg);
        };

        for (var i = 0; i < ffplate; i++) {
            ffplateImgLoop.push(ffplateImg);
        };


        if (tpfplate || fplate || tplate || tfplate || ffplate) {
            //$('.textual').html(tpfplate + ' ---> 2.5 Plates' + '<br/>' + fplate + ' ---> 5 Plates' + '<br/>' + tplate + ' ---> 10 Plates' + '<br/>' + tfplate + ' ---> 25 Plates' + '<br/>' + ffplate + ' ---> 45 Plates');
            $('.visual').html(
                '<br><br>' +
                tpfplateImgLoop + fplateImgLoop + tplateImgLoop + tfplateImgLoop + ffplateImgLoop
            );

        } else {
            $('#error').html('Not Valid Input');
        }

    })
});
