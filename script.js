<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="https://cdn.pixabay.com/photo/2012/04/14/12/40/letter-q-33754_1280.png">
    <link rel="stylesheet" href="styles.css">
    <title>QuizLeapBooks | Free NCERT and ICSE Textbook Questions & Quizzes</title>
    <meta name="description"
        content="QuizLeapBooks provides free NCERT and ICSE textbook questions and quizzes for Class 6, 7, and 8. Explore various types of questions and quizzes to help you study and excel in your exams." />
    <meta name="keywords"
        content="NCERT Quiz, ICSE Quiz, Class 6 Questions, Class 7 Questions, Class 8 Questions, Free Textbook Questions, Educational Quizzes" />
    <meta property="og:title" content="QuizLeapBooks | Free NCERT and ICSE Textbook Questions & Quizzes" />
    <meta property="og:description"
        content="QuizLeapBooks offers a variety of free questions and quizzes from NCERT and ICSE textbooks for Class 6, 7, and 8. Improve your understanding and ace your exams with our resources." />
    <meta property="og:image" content="https://cdn.pixabay.com/photo/2012/04/14/12/40/letter-q-33754_1280.png" />
    <meta property="og:url" content="https://www.quizleapbooks.com/" />
    <meta name="twitter:title" content="QuizLeapBooks | Free NCERT and ICSE Textbook Questions & Quizzes" />
    <meta name="twitter:description"
        content="Explore free questions and quizzes from NCERT and ICSE textbooks for Class 6, 7, and 8 on QuizLeapBooks. Boost your exam preparation with our study resources." />
    <meta name="twitter:image" content="https://cdn.pixabay.com/photo/2012/04/14/12/40/letter-q-33754_1280.png" />
    <meta name="twitter:card" content="summary_large_image" />
</head>

<body>
    <section>
        <header>
            <div class="header-content">
                <img src="https://cdn.pixabay.com/photo/2012/04/14/12/40/letter-q-33754_1280.png" class="logo"
                    alt="QuizLeapBooks Logo">
                <span class="web-name">
                    <big><b>
                            <span class="quiz">Quiz</span>
                            <span class="leap">Leap</span>
                            <span class="books">Books</span>
                        </b></big>
                </span>
                <div class="menu-icon" onclick="toggleMenu()">&#9776;</div>
                <nav class="nav1" id="navbar">
                     <a href="https://quizleapsbooks.github.io/Welcome_Quiz_Leap_Books/" class="headerlinks1">Home</a>
                    <a href="https://quizleapsbooks.github.io/Feedback_Quiz_Leap_Books/" class="headerlinks2" target="_blank">Feedback</a>
                    <a href="/helpme.html" class="headerlinks1">Help</a>
                    <a href="https://quizleapsbooks.github.io/SignUp-SignIn/signin.html" class="headerlinks1">Sign in</a>
                    <a href="https://quizleapsbooks.github.io/SignUp-SignIn/index.html" class="headerlinks1">Sign up</a>
                </nav>
            </div>
        </header>
        <hr class="hr">
        <section class="dynamic-text-container">
            <h3 id="dynamic-title"></h3>
        </section>
    </section>
    <section class="scrolling-text-container">
        <div class="scrolling-text">
            <h1 class="title-letter">Quiz Leap Books | Get free questions and quiz from NCERT and ICSE board of Class 6, Class 7, and Class 8.</h1>
        </div>
    </section>
    <section>
        <div class="container">
            <div class="pictureandtext">
                <div>
                    <a href="https://quizleapsbooks.github.io/NCERT_Quiz_Leap_Books/"><img alt="NCERT" src="https://cee.ncert.gov.in/public/images/1.jpg" class="image-1" width="100%"></a>
                </div>
                <h2><a class="underlineremover" href="https://quizleapsbooks.github.io/NCERT_Quiz_Leap_Books/">Click here to get NCERT Questions</a></h2>
                <p class="font">Access a wide range of questions from NCERT textbooks for Classes 6, 7, and 8. Improve your understanding with diverse question types and quizzes.</p>
            </div>
            <div class="pictureandtext1">
                <div class="rounded-lg h-64 overflow-hidden">
                    <a href="icse.html"><img alt="ICSE" src="https://images.hindustantimes.com/img/2021/09/03/1600x900/13eca768-a19d-11eb-99e8-864a4eb6b705_1618898795816_1630645303525.jpg" width="100%" class="image"></a>
                </div>
                <h2><a class="underlineremover" href="/icse.html">Click here to get ICSE Questions</a></h2>
                <p class="font">Explore a variety of questions from ICSE textbooks for Classes 6, 7, and 8. Find quizzes and practice questions to enhance your learning.</p>
            </div>
        </div>
    </section>
    <div class="button-container">
        <button id="myButton">
            <img src="https://cdn.pixabay.com/photo/2016/10/03/15/42/button-1711967_960_720.png" width="70px" alt="Contact Us!">
        </button>
    </div>
    
    <script>
        document.getElementById('myButton').addEventListener('click', function() {
            window.location.href = 'https://quizleapsbooks.github.io/Contact_Us_QuizLeapBooks/';
        });

        function toggleMenu() {
            const navbar = document.getElementById('navbar');
            navbar.classList.toggle('active');
        }

        document.addEventListener('DOMContentLoaded', () => {
            const titleElement = document.getElementById('dynamic-title');
            const text = "Quiz Leap Books";
            const textArray = text.split('');

            titleElement.innerHTML = textArray.map((letter, i) =>
                `<span style="animation-delay:${i * 0.1}s;">${letter}</span>`
            ).join('');
        });

        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });

        document.addEventListener('keydown', function(e) {
            if ((e.ctrlKey && e.key === 'c') || (e.ctrlKey && e.key === 'x') || (e.ctrlKey && e.key === 'v') || (e.ctrlKey && e.key === 'u') || (e.ctrlKey && e.key === 's')) {
                e.preventDefault();
            }
        });
    </script>

</body>
</html>

