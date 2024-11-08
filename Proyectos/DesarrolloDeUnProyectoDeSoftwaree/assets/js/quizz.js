
$(document).ready(function () {
    let quizJSON = [
        {
            "title": "¿Cuál es el animal que tiene una trompa larga y orejas grandes?",
            "choices": [
                "Elefante",
                "León",
                "Jirafa",
                "Mono"
            ],
            "correctAnswer": 0,
            "pointerEvents": false,
            "secondsLeft": 20,
            "AnsweredQue": ""
        },
        {
            "title": "¿Cuántos dedos tienes en una mano?",
            "choices": [
                4,
                5,
                6,
                10
            ],
            "correctAnswer": 1,
            "pointerEvents": false,
            "secondsLeft": 20,
            "AnsweredQue": ""
        },
        {
            "title": "¿Cómo se llama el objeto que usamos para medir el tiempo?",
            "choices": [
                "Reloj",
                "Teléfono",
                "Espejo",
                "Computadora"
            ],
            "correctAnswer": 0,
            "pointerEvents": false,
            "secondsLeft": 20,
            "AnsweredQue": ""
        },
        {
            "title": " ¿Cuál es la estación del año en la que hace más calor?",
            "choices": [
                "Invierno",
                "Primavera",
                "Verano",
                "Otoño"
            ],
            "correctAnswer": 2,
            "pointerEvents": false,
            "secondsLeft": 20,
            "AnsweredQue": ""
        },
        {
            "title": "¿Que animal hace miau?",
            "choices": [
                "Perro",
                "Gato",
                "Pájaro",
                "Caballo"
            ],
            "correctAnswer": 1,
            "pointerEvents": false,
            "secondsLeft": 20,
            "AnsweredQue": ""
        },
        {
            "title": "¿Cuántas patas tiene una araña?",
            "choices": [
                4,
                6,
                8,
                10
            ],
            "correctAnswer": 2,
            "pointerEvents": false,
            "secondsLeft": 20,
            "AnsweredQue": ""
        },
        {
            "title": "¿Cuál es el océano más grande?",
            "choices": [
                "Atlántico",
                "Índico",
                "Pacífico",
                "Ártico"
            ],
            "correctAnswer": 2,
            "pointerEvents": false,
            "secondsLeft": 20,
            "AnsweredQue": ""
        }
        ,
        {
            "title": "¿Cuántos lados tiene un triángulo?",
            "choices": [
                3,
                4,
                5,
                6
            ],
            "correctAnswer": 0,
            "pointerEvents": false,
            "secondsLeft": 20,
            "AnsweredQue": ""
        },
        {
            "title": "¿Cuál es la comida favorita de los pandas?",
            "choices": [
                "Plátanos",
                "Bambú",
                "Zanahorias",
                "Chocolate"
            ],
            "correctAnswer": 1,
            "pointerEvents": false,
            "secondsLeft": 20,
            "AnsweredQue": ""
        },
        {
            "title": "¿Qué planeta es conocido como el planeta rojo?",
            "choices": [
                "Júpiter",
                "Marte",
                "Venus",
                "Saturno"
            ],
            "correctAnswer": 1,
            "pointerEvents": false,
            "secondsLeft": 20,
            "AnsweredQue": ""
        },
        {
            "title": "¿Cuántas estaciones del año hay?",
            "choices": [
                1,
                2,
                3,
                4
            ],
            "correctAnswer": 3,
            "pointerEvents": false,
            "secondsLeft": 20,
            "AnsweredQue": ""
        },
        {
            "title": "¿Cuál es el instrumento musical que se toca soplando?",
            "choices": [

                "Guitarra",
                "Flauta",
                "Batería",
                "Piano"
            ],
            "correctAnswer": 1,
            "pointerEvents": false,
            "secondsLeft": 20,
            "AnsweredQue": ""
        },
        {
            "title": " ¿Qué día de la semana viene después del viernes?",
            "choices": [
                "Domingo",
                "Sábado",
                "Domingo",
                "Miércoles"
            ],
            "correctAnswer": 1,
            "pointerEvents": false,
            "secondsLeft": 20,
            "AnsweredQue": ""
        },
        {
            "title": " ¿Cuántos meses tiene un año?",
            "choices": [
                10,
                11,
                12,
                13
            ],
            "correctAnswer": 2,
            "pointerEvents": false,
            "secondsLeft": 20,
            "AnsweredQue": ""
        },
        {
            "title": "¿Cuál es el animal más grande del mundo?",
            "choices": [
                "Elefante",
                "Ballena azul",
                "Jirafa",
                "Rinoceronte"
            ],
            "correctAnswer": 1,
            "pointerEvents": false,
            "secondsLeft": 20,
            "AnsweredQue": ""
        },
        {
            "title": "¿Cuántos colores hay en un arco iris?",
            "choices": [
                3,
                5,
                7,
                10
            ],
            "correctAnswer": 2,
            "pointerEvents": false,
            "secondsLeft": 20,
            "AnsweredQue": ""
        },
        {
            "title": "¿Cómo se llama la estrella que brilla en el día y nos da luz y calor?",
            "choices": [
                "Estrella fugaz",
                "Sol",
                "Luna",
                "Marte"
            ],
            "correctAnswer": 1,
            "pointerEvents": false,
            "secondsLeft": 20,
            "AnsweredQue": ""
        },
        {
            "title": "¿Qué animal tiene una joroba en la espalda y vive en el desierto?",
            "choices": [
                "Tigre",
                "León",
                "Camello",
                "Oso"
            ],
            "correctAnswer": 2,
            "pointerEvents": false,
            "secondsLeft": 20,
            "AnsweredQue": ""
        },
        {
            "title": " ¿Cuál es el animal que tiene una melena y ruge?",
            "choices": [
                "Elefante",
                "León",
                "Jirafa",
                "Mono"
            ],
            "correctAnswer": 1,
            "pointerEvents": false,
            "secondsLeft": 20,
            "AnsweredQue": ""
        },
        {
            "title": "¿Cuántos días tiene una semana?",
            "choices": [
                5,
                6,
                7,
                8
            ],
            "correctAnswer": 2,
            "pointerEvents": false,
            "secondsLeft": 20,
            "AnsweredQue": ""
        },
        {
            "title": " ¿Qué animal tiene una coraza dura y se mueve despacio?",
            "choices": [
                "Liebre",
                "Tortuga",
                "Caballo",
                "Gato"
            ],
            "correctAnswer": 1,
            "pointerEvents": false,
            "secondsLeft": 20,
            "AnsweredQue": ""
        },
        {
            "title": "¿Qué animal vuela y hace quack?",
            "choices": [
                "Pato",
                "Gato",
                "Pájaro",
                "Perro"
            ],
            "correctAnswer": 0,
            "pointerEvents": false,
            "secondsLeft": 20,
            "AnsweredQue": ""
        },
        {
            "title": " ¿Cuántos minutos hay en una hora?",
            "choices": [
                30,
                45,
                60,
                90
            ],
            "correctAnswer": 2,
            "pointerEvents": false,
            "secondsLeft": 20,
            "AnsweredQue": ""
        },
        {
            "title": "¿Cuántos dedos tienes en total en tus dos manos?",
            "choices": [
                10,
                15,
                20,
                5
            ],
            "correctAnswer": 0,
            "pointerEvents": false,
            "secondsLeft": 20,
            "AnsweredQue": ""
        },
        {
            "title": "¿Qué animal es conocido por tener rayas negras y blancas y vive en la sabana?",
            "choices": [
                "León",
                "Cebra",
                "Elefante",
                "Oso"
            ],
            "correctAnswer": 1,
            "pointerEvents": false,
            "secondsLeft": 20,
            "AnsweredQue": ""
        },
        {
            "title": "¿Qué instrumento musical se toca golpeando las teclas con los dedos?",
            "choices": [
                "Violín",
                "Piano",
                "Trompeta",
                "Flauta"
            ],
            "correctAnswer": 1,
            "pointerEvents": false,
            "secondsLeft": 20,
            "AnsweredQue": ""
        },
        {
            "title": "¿Cuál es el río más largo del mundo?",
            "choices": [
                "Nilo",
                "Amazonas",
                "Mississippi",
                "Yangtsé"
            ],
            "correctAnswer": 1,
            "pointerEvents": false,
            "secondsLeft": 20,
            "AnsweredQue": ""
        },
        {
            "title": "¿Cuál es el animal que tiene una trompa larga y colmillos grandes?",
            "choices": [
                "Mono",
                "Elefante",
                "León",
                "Jirafa"
            ],
            "correctAnswer": 1,
            "pointerEvents": false,
            "secondsLeft": 20,
            "AnsweredQue": ""
        },
        {
            "title": "¿Qué animal bate sus alas y produce miel?",
            "choices": [
                "Abeja",
                "Mariposa",
                "Pájaro",
                "Murciélago"
            ],
            "correctAnswer": 0,
            "pointerEvents": false,
            "secondsLeft": 20,
            "AnsweredQue": ""
        },
        {
            "title": "¿Qué animal es famoso por ser el rey de la selva?",
            "choices": [
                "León",
                "Tigre",
                "Elefante",
                "Pez"
            ],
            "correctAnswer": 0,
            "pointerEvents": false,
            "secondsLeft": 20,
            "AnsweredQue": ""
        }
    ]
    quizJSON = JSON.stringify(quizJSON);
    const quiz = JSON.parse(quizJSON);
    console.log(quiz);
    // Json work finished

    var questionnumber = -1;
    let scndsLftOfQueArr = [];
    let radioBtnChecked = [];

    // Some work for DOM Manipulation start


    $("#mainButton").click(function () {
        $(".quizh1").text("Reglas");
        $(".descriptionh3").text("Lea las Reglas y entiéndalas.");
        $(this).parent().fadeIn();
        $(this).parent().parent().remove();
        $(".info_box").fadeIn();
    });


    $(".quit").click(function () {
        location.reload();
    });

    $(".continue").click(function () {
        $(".quizbody").slideUp(1000);
        $(".questionbody").fadeIn(1000);
        questionnumber++;
        countTotalTime();
        showquestionnum();
        showquestion();
        diablingButtons();
        saveRadioBtnValue();
        // startTimeLeft();
        // checkTODisabelPointer();
    });

    $('.btn').on('mouseenter', function () {
        $(this).addClass('active');
    });
    $('.btn').on('mouseleave', function () {
        $(this).removeClass('active');
    });
    function diablingButtons() {
        if (questionnumber == 0) {
            $(".backk").addClass('disable');
        }
        else {
            $(".backk").removeClass('disable');
        }
    }
    // Some work for DOM Manipulation end

    //allowing uncheck the radio button -->
    document.querySelectorAll('input[type=radio][name=option]').forEach((elem) => {
        elem.addEventListener('click', allowUncheck);
        elem.previous = elem.checked;
    });


    function allowUncheck(e) {
        if (this.previous) {
            this.checked = false;
        }
        document.querySelectorAll(
            `input[type=radio][name=${this.name}]`).forEach((elem) => {
                elem.previous = elem.checked;
            });
    };
    //allowing uncheck the radio button <--

    // starting the quiz's logical work

    let randomnumber;
    let randomnumarr = [];
    let indexpre = randomnumarr[questionnumber];
    let index = quiz[indexpre];

    //getting the random number function -->
    function getrandomnumber() {
        randomnumber = Math.floor(Math.random() * 29) + 1;
    };
    //getting the random number function <--

    //checking the Random Number for not getting same number -->
    function checkRandomNumber() {
        for (let i = 0; i < 31; i++) {
            getrandomnumber()
            let checkRN = jQuery.inArray(randomnumber, randomnumarr);
            if (checkRN == -1) {
                randomnumarr[questionnumber] = randomnumber;
                break;
            }
        }
        indexpre = randomnumarr[questionnumber];
        index = quiz[indexpre]
    }
    //checking the Random Number for not getting same number <--


    //showing the QUESTIONS function -->
    function showquestion() {
        radioButtons = $("input:radio[name='option']");
        if (questionnumber < randomnumarr.length) {
            indexpre = randomnumarr[questionnumber];
            index = quiz[indexpre];

            // Verificar si 'index' es válido y tiene 'correctAnswer'
            if (index && typeof index.correctAnswer !== 'undefined') {
                saveRadioBtnValue();
            }

            $(".que_text").text(index.title);
            $("label").eq(0).text(index.choices[0]);
            $("label").eq(1).text(index.choices[1]);
            $("label").eq(2).text(index.choices[2]);
            $("label").eq(3).text(index.choices[3]);
            for (var x = 0; x < radioButtons.length; x++) {
                var idVal = $(radioButtons[x]).attr("id");
                radioBtnCheckedVal = $("label[for='" + idVal + "']").text();
                if (radioBtnCheckedVal === radioBtnChecked[questionnumber]) {
                    radioButtons[x].checked = true;
                }
                if (radioBtnChecked[questionnumber] === " ") {
                    radioButtons[x].checked = false;
                }
            }
            if (questionnumber > 0) {
                resetingTheTime();
            }
            startTimeLeft();
        }
        else {
            checkRandomNumber();
            $(".que_text").text(index.title);
            $("label").eq(0).text(index.choices[0]);
            $("label").eq(1).text(index.choices[1]);
            $("label").eq(2).text(index.choices[2]);
            $("label").eq(3).text(index.choices[3]);
            $("input:radio[name='option']").each(function (i) {
                this.checked = false;
            });
            console.log(index.correctAnswer);
            if (questionnumber > 0) {
                resetingTheTime();
            }
            startTimeLeft();
        }
    };




    //  starting the time of question start function-->
    let secondSetInterval;
    let width;
    function startTimeLeft() {
        secondSetInterval = setInterval(function () {
            index.secondsLeft -= 1;
            width = (index.secondsLeft / 20) * 100;
            if (index.secondsLeft < 10) {
                $(".timer_sec").text("0" + index.secondsLeft);
            }
            else {
                $(".timer_sec").text(index.secondsLeft);
            }
            if (index.secondsLeft == 0) {
                $(".option_list").addClass("pointerNone");
                index.pointerEvents = true;
                $(".quiz_box").prepend(`<marquee id="marquee" class="marquee my-2" width="100%" direction="right" height="20px">
                No puedes seleccionar ninguna opción ahora.
                </marquee>`);
                // $(".time_line").hide();
                clearInterval(secondSetInterval);
            }
        }, 1000);
    };
    function resetingTheTime() {
        clearInterval(secondSetInterval);
        secondsForTimeOut = index.secondsLeft;
        scndsLftOfQueArr[questionnumber] = index.secondsLeft;
        secondCount = index.secondsLeft;
        $(".timer_sec").text(index.secondsLeft);
    };
    let totalSetInterval;
    let totaltime = 0;
    function countTotalTime() {
        totalSetInterval = setInterval(function () {
            totaltime += 1;
        }, 1000);
    };
    let radioBtnCheckedVal;
    function saveRadioBtnValue() {
        console.log("Saving radio button value for question", questionnumber);
        $("input:radio[name='option']").each(function (i) {
            if ($(this).is(':checked')) {
                var idVal = $(this).attr("id");
                radioBtnCheckedVal = $("label[for='" + idVal + "']").text();
                console.log("radioBtnChecked:", radioBtnCheckedVal);
                return false;
            } else {
                radioBtnCheckedVal = " "
            }
            if (typeof radioBtnChecked !== 'undefined') {
                quiz[questionnumber].userAnswer = radioBtnChecked;
                console.log("Saved radio button value: " + radioBtnChecked);
            }
        });
        var userAns = radioBtnCheckedVal;
        radioBtnChecked[questionnumber] = userAns;
        console.log("Saved radio button value:", userAns);
    }
    function showquestionnum() {
        $(".QNO").text(questionnumber + 1 + " ");
    }

    $(".backk").click(function () {


        if (questionnumber <= 19 && questionnumber >= 1) {
            $(".result").hide();
            $(".next").show();
            $(".skip").removeClass('disable');
            $("#marquee").remove();
            saveRadioBtnValue();
            clearInterval(secondSetInterval);
            questionnumber--;
            showquestionnum();
            showquestion();
            diablingButtons();
            if (index.pointerEvents === true) {
                $(".option_list").addClass("pointerNone");
                $(".quiz_box").prepend(`<marquee id="marquee" class="marquee my-2" width="100%" direction="right" height="20px">
                    You cannot select any option Now.
                    </marquee>`)
                clearInterval(secondSetInterval);
                $(".timer_sec").text("00");
            }
            else {
                $(".option_list").removeClass("pointerNone");
            }

        }
        else {
            diablingButtons();
        }
    });


    $(".next, .skip").click(function () {

        if (questionnumber <= 19) {
            $("#marquee").remove();
            clearInterval(secondSetInterval);
            console.log("Question number:", questionnumber);
            console.log("Saving radio button value...");
            saveRadioBtnValue();
            console.log("Incrementing question number...");
            questionnumber++;
            console.log("New question number:", questionnumber);
            showquestionnum();
            showquestion();
            diablingButtons();
            indexpre = randomnumarr[questionnumber];
            index = quiz[indexpre]
            if (index.pointerEvents === true) {
                $(".option_list").addClass("pointerNone");
                $(".quiz_box").prepend(`<marquee id="marquee" class="marquee my-2" width="100%" direction="right" height="20px">
                    You cannot select any option Now.
                    </marquee>`)
                clearInterval(secondSetInterval);
                $(".timer_sec").text("00");
            }
            else {
                $(".option_list").removeClass("pointerNone");
            }
        }
        if (questionnumber == 19) {
            $(".skip").hide();
            $(".next").hide();
            $(".questionbody").remove();
            $(".resultbody").fadeIn();
            clearInterval(totalSetInterval);
            checkResults();
            gettingPerc();
            gettingPercTime();
            $(".percentage").text(`${perc1}%`);
            $(".skip-ans-given").text(SA);
            $(".wrong-ans-given").text(WA - 1);
            $(".Correct-ans-given").text(CA);
        }
    });
    let CA = 0;
    let SA = 0;
    let WA = 0;
    let correctAnswers = [];
    let incorrectAnswers = [];

    function checkResults() {
        CA = 0;
        correctAnswers = [];
        incorrectAnswers = [];

        for (let i = 0; i < randomnumarr.length; i++) {
            let indexpre = randomnumarr[i];
            let index = quiz[indexpre];

            if (radioBtnChecked[i] == index.choices[index.correctAnswer]) {
                CA++;
                correctAnswers.push(index.title);
            } else if (radioBtnChecked[i] == " ") {
                SA++;
            } else {
                WA++;
                incorrectAnswers.push({
                    question: index.title,
                    userAnswer: radioBtnChecked[i],
                    correctAnswer: index.choices[index.correctAnswer]
                });
            }
        }
    }


    let width1 = 0;
    let perc1 = 0;
    function gettingPerc() {
        perc1 = (CA / 20) * 100;
        perc1 = Math.round(perc1);
        width1 = perc1;
        $(".perc-line").css({
            "width": `${width1}%`,
            "transition": "width 1s linear"
        });
    }

    let width2 = 0;
    let perc2 = 0;
    function gettingPercTime() {
        perc2 = (totaltime / 400) * 100;
        width2 = perc2;
        $(".time-line").css({
            "width": `${width2}%`,
            "transition": "width 1s linear"
        });
    }
    // CHECKING THE PECENTAGE



    $(".result").click(function () {
       $(".questionbody").remove();
    $(".resultbody").fadeIn();
    saveRadioBtnValue();
    clearInterval(totalSetInterval);
    checkResults();
    gettingPerc();
    gettingPercTime();
    $(".percentage").text(`${perc1}%`);
    $(".skip-ans-given").text(SA);
    $(".wrong-ans-given").text(WA);
    $(".Correct-ans-given").text(CA);
    $(".time").text(totaltime);
    });

    // adding the functionalities to buttons ends
    $(".icons i").click(function () {
        $(this).siblings().css(
            {
                "display": "none"
            }, 1000);
        $(this).css({
            "color": "#007bff"
        });
    });
    $(".restart").click(function () {
        location.reload();

    });
});
