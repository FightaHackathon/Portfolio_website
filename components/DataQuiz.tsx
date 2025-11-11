import React, { useState } from 'react';

const quizData = [
    {
        question: "What is the time complexity for accessing an element in a hash table, on average?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
        answer: "O(1)"
    },
    {
        question: "Which data structure follows the Last-In, First-Out (LIFO) principle?",
        options: ["Queue", "Stack", "Linked List", "Tree"],
        answer: "Stack"
    },
    {
        question: "A binary tree where each node's value is greater than all values in its left subtree and less than all values in its right subtree is a...",
        options: ["Heap", "Binary Search Tree", "AVL Tree", "Complete Binary Tree"],
        answer: "Binary Search Tree"
    },
    {
        question: "Which of the following is NOT a linear data structure?",
        options: ["Array", "Stack", "Queue", "Tree"],
        answer: "Tree"
    }
];

const BlinkingCursor = () => <span className="blinking-cursor">_</span>;

const DataQuiz: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [showFeedback, setShowFeedback] = useState(false);

    const handleAnswer = (option: string) => {
        if (showFeedback) return; // Prevent answering again
        setSelectedAnswer(option);
        setShowFeedback(true);
        if (option === quizData[currentQuestionIndex].answer) {
            setScore(score + 1);
        }
    };

    const handleNext = () => {
        setShowFeedback(false);
        setSelectedAnswer(null);
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    const handleRestart = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setSelectedAnswer(null);
        setShowFeedback(false);
    };

    if (currentQuestionIndex >= quizData.length) {
        return (
            <div className="text-center p-4 h-full flex flex-col justify-center items-center">
                <h3 className="text-xl text-[#ff007f] text-shadow-pink">[ Quiz Complete ]</h3>
                <p className="text-white my-4">Your final score: <span className="text-[#00f5d4]">{score}</span> out of <span className="text-[#00f5d4]">{quizData.length}</span></p>
                <button
                    onClick={handleRestart}
                    className="mt-2 px-4 py-1 border-2 border-[#00f5d4] text-[#00f5d4] hover:bg-[#00f5d4] hover:text-[#1a0933] transition-colors"
                >
                    RESTART_QUIZ
                </button>
            </div>
        );
    }
    
    const currentQuestion = quizData[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.answer;

    return (
        <div className="p-2 h-full flex flex-col">
            <h3 className="text-lg text-[#ff007f] text-shadow-pink mb-2">[ DataDash Quiz ]</h3>
            <p className="text-gray-300 flex-shrink-0">{currentQuestionIndex + 1}. {currentQuestion.question}</p>
            <div className="mt-3 space-y-2 flex-grow">
                {currentQuestion.options.map((option, index) => {
                    let buttonClass = "w-full text-left px-3 py-1 border border-[#401f68] transition-colors ";
                    if (showFeedback) {
                        if (option === currentQuestion.answer) {
                            buttonClass += "bg-green-500/30 border-green-500 text-white";
                        } else if (option === selectedAnswer) {
                            buttonClass += "bg-red-500/30 border-red-500 text-white";
                        } else {
                            buttonClass += "text-gray-500";
                        }
                    } else {
                         buttonClass += "text-[#00f5d4] hover:bg-[#00f5d4]/10 hover:border-[#00f5d4]";
                    }

                    return (
                        <button key={index} onClick={() => handleAnswer(option)} className={buttonClass} disabled={showFeedback}>
                            {'>'} {option}
                        </button>
                    );
                })}
            </div>
            {showFeedback && (
                 <div className="mt-2 text-center h-12 flex-shrink-0">
                    <p className={`text-lg ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                        {isCorrect ? 'Correct!' : 'Incorrect!'}
                    </p>
                    <button
                        onClick={handleNext}
                        className="mt-1 px-4 py-1 border-2 border-[#00f5d4] text-[#00f5d4] hover:bg-[#00f5d4] hover:text-[#1a0933] transition-colors"
                    >
                        NEXT {'>'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default DataQuiz;
