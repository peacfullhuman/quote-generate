const ru = document.getElementById('ruBut')
const activeBtn = document.getElementById('enBut')

activeBtn.style.background='#94855e'

function generate(){

    var quates = {
        'Napoleon Hill': 'Whatever the mind of man can conceive and believe, he can achieve.',
        'Albert Einstein': '"Strive not for success, but for the value it gives."',
        'Florence Nightingale': 'I owe my success to the fact that I never made excuses or accepted excuses from others.',
        'Michael Jordan': 'I\'ve missed over 9,000 shots in my career, lost almost 300 games. 26 times I\'ve been trusted to take the final game-winning shot and missed. I\'ve failed over and over and over again. And that\'s why I succeeded. success."',
        'Amelia Earhart': 'The hardest thing is to take action, everything else depends only on perseverance.',
        'Fyodor Dostoevsky': 'One must love life more than the meaning of life.',
        'John Lennon': 'Life is what happens to you while you\'re making plans.',
        'Albert Einstein': 'Logic can take you from point A to point B, but imagination can take you anywhere.',
        'Mark Twain': '"In 20 years you will be more disappointed by the things you didn\'t do than by the things you did do. So set sail from the quiet harbour. Feel the fair wind in your sail. Move forward, act, discover!" ',
        'Boris Strugatsky': '"You should always start with something that sows doubts."',
        'Fazil Iskander': '"True responsibility can only be personal."',
        'Socrates': 'An unmeaning life is not worth living.',
        'Woody Allen': '80% of success is being in the right place at the right time.',
        'Steve Jobs': 'Your time is limited, don\'t waste it living someone else\'s life.',
        'Vince Lombardi': '"Winning is not everything, everything is a constant desire to win."',
        'Immanuel Kant': 'Science is organized knowledge, wisdom is organized life.',
        'Napoleon Bonaparte': '"There is no word "impossible" in my dictionary."',
        'Christopher Columbus': 'You will never cross the ocean unless you have the courage to lose sight of the shore.',
        'Mahatma Gandhi': '"Freedom is worthless unless it includes the freedom to make mistakes."',
        'Jim Rohn': 'Either you control your day, or the day controls you.',
        'Henry Ford': 'If you think you can do something, you\'re right; if you think you can\'t do it, you\'re right, too.',
        'Mark Twain': '"The two most important days in your life: the day you were born, and the day you realized why."',
        'Johann Wolfgang Goethe': '"Begin to do everything you can do - and even what you can even dream of. In courage there is genius, strength and magic."',
        'Frank Sinatra': '"The best revenge is a huge success."'
    }

    var authors = Object.keys(quates)
    
    var author = authors[Math.floor(Math.random()*authors.length)]

    var quate = quates[author]

    document.getElementById('quote').innerHTML = quate
    document.getElementById('author').innerHTML = author
}

ru.addEventListener('click', () => {
    window.location.href = 'index.html'
})
