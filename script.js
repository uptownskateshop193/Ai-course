document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quizForm');
    const scoreDisplay = document.getElementById('scoreDisplay');

    if (quizForm) {
        quizForm.addEventListener('submit', function(event) {
            event.preventDefault();
            let score = 0;
            const answers = {
                q1: 'c',
                q2: 'b',
                q3: 'b',
                q4: 'c',
                q5: 'b'
            };

            const formData = new FormData(quizForm);

            for (const question in answers) {
                if (formData.get(question) === answers[question]) {
                    score++;
                }
            }

            localStorage.setItem('quizScore', score);
            window.location.href = 'results.html';
        });
    }

    if (scoreDisplay) {
        const finalScore = localStorage.getItem('quizScore');
        if (finalScore !== null) {
            scoreDisplay.textContent = `Your final score is: ${finalScore} out of 5`;
            localStorage.removeItem('quizScore'); // Clear the score after displaying
        } else {
            scoreDisplay.textContent = 'No score to display.';
        }
    }
});
