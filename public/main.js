function start() {
    var window = document.getElementById("window")
    var start = document.getElementById("start")
    var finish = document.getElementById("finish")
    var bird = document.getElementById("bird")
    var score2 = document.getElementById("score")
    var style_bird = getComputedStyle(bird)

    start.style.cssText = "display: none"

        

        /* Падіння пташки */
        var frame = setInterval(() => {

            if (style_bird.marginTop.replace('px', '') >= 475 || style_bird.marginTop.replace('px', '') <= 0) {
                console.log('the end');
                clearInterval(frame)
                clearInterval(score)
                finish.style.cssText = "display: block"
                window.style.animationPlayState = 'paused'
                score2.style.zIndex = '12'
                score2.style.animationPlayState = 'running'
                score2.style.margin = '-310px 0 0 130px'
            } else {
                /* Падіння пташки */
                var current_top = style_bird.marginTop.replace('px', '');
                var number = 5
                var changed_top = Number(current_top) + Number(number);
                bird.style.cssText = "margin-top: " + changed_top + "px;"
            }
        }, 50);

        /* Генерація колонок */
        var column = setInterval(() => {
            if (style_bird.marginTop.replace('px', '') >= 475 || style_bird.marginTop.replace('px', '') <= 0) {
                console.log('the end');
                clearInterval(column)
            } else {
                
                var random = Math.floor(Math.random() * 300) + 1
                var size_up = Number(629) + Number(random) + 'px'
                var size_down = Number(150) + Number(random) + 'px'
                console.log(size_up, size_down);
                
                var img_up = document.createElement('img');
                img_up.setAttribute('id', 'up');
                img_up.setAttribute('src', 'https://cdn1.savepice.ru/uploads/2019/8/24/4bd3155e8f25c8eed20fdac2db6749fa-full.png');
                img_up.style.marginTop = /* '-679px' */ '-' + size_up
                document.getElementById('window').appendChild(img_up);
                
                var img_down = document.createElement('img');
                img_down.setAttribute('id', 'down');
                img_down.setAttribute('src', 'https://romanbmx.github.io/flappybird.github.io/img/pipeBottom.png');
                img_down.style.marginTop = /* '-200px' */ '-' + size_down
                document.getElementById('window').appendChild(img_down);

                //console.log(img_up.getBoundingClientRect());
                var last_axisB = img_down.getBoundingClientRect().y;
                var last_axisA = Number(last_axisB) - Number(100)
                

                var axis = setInterval(() => {
                    var now_bird = bird.getBoundingClientRect().y;
                    console.log("Межа А: " + last_axisA + " Межа B: " + last_axisB + " Поточні координати: " + now_bird);
                    if (last_axisA < now_bird && last_axisB > now_bird) {
                        console.log('GOOOD');
                        
                        var top_bottom = setInterval(() => {
                            var now_bird_top = bird.getBoundingClientRect().y;
                            var now_bird_bottom = Number(now_bird_top) + Number(32);
                            console.log(now_bird_top);
                            if (last_axisA < now_bird_top && last_axisB > now_bird_bottom) {
                                console.log('GOOOOOOOOOOOOOOOOOOOD');
                            } else {
                                console.log('BEEEEEEEEEEEEEEEEEEED');
                                clearInterval(axis)
                                clearInterval(frame)
                                clearInterval(score)
                                clearInterval(column)
                                finish.style.cssText = "display: block"
                                img_up.style.animationPlayState = 'paused'
                                img_down.style.animationPlayState = 'paused'
                                window.style.animationPlayState = 'paused'
                                score2.style.zIndex = '12'
                                score2.style.animationPlayState = 'running'
                                score2.style.margin = '-310px 0 0 130px'
                            }

                        }, 100);

                        setTimeout(() => { clearInterval(top_bottom); }, 1000);

                        clearInterval(axis)
                    } else {
                        console.log('BED');
                        clearInterval(axis)
                        clearInterval(frame)
                        clearInterval(column)
                        clearInterval(score)
                        finish.style.cssText = "display: block"
                        img_up.style.animationPlayState = 'paused'
                        img_down.style.animationPlayState = 'paused'
                        window.style.animationPlayState = 'paused'
                        score2.style.zIndex = '12'
                        score2.style.animationPlayState = 'running'
                        score2.style.margin = '-310px 0 0 130px'
                    }
                }, 3700);
            }
        }, 4110);

        var count = 0;
        var score = setInterval(function () {	
            document.getElementById("score").innerHTML = "Score: " + count;	
            count++;	
        }, 4150);
        
}





function fly() {
    var bird = document.getElementById("bird")
    var style = getComputedStyle(bird)
    
    var current_top = style.marginTop.replace('px', '');
    var changed_top = current_top - 40
    bird.style.cssText = "margin-top: " + changed_top + "px;"

    console.log(bird.getBoundingClientRect());
}


function restart() {
    location.reload();
}