// src/data/questions.js
const questions = [
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Delhi"
  },
  {
    question: "Which is the largest continent on Earth?",
    options: ["Asia", "Africa", "Europe", "Australia"],
    answer: "Asia"
  },
  {
    question: "Who was the first Prime Minister of India?",
    options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Indira Gandhi", "Rajendra Prasad"],
    answer: "Jawaharlal Nehru"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    answer: "Mars"
  },
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the capital city of Japan?",
    options: ["Tokyo", "Osaka", "Kyoto", "Nagoya"],
    answer: "Tokyo",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["William Shakespeare", "Mark Twain", "Charles Dickens", "Ernest Hemingway"],
    answer: "William Shakespeare",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
    answer: "Blue Whale",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Oxygen", "Gold", "Silver", "Helium"],
    answer: "Oxygen",
  },
  {
    question: "In which year did World War II end?",
    options: ["1940", "1942", "1945", "1950"],
    answer: "1945",
  },
  {
    question: "Which country is famous for the Eiffel Tower?",
    options: ["Italy", "Germany", "France", "Spain"],
    answer: "France",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Diamond", "Iron", "Granite"],
    answer: "Diamond",
  },
  {
    question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    question: "What is the chemical formula for water?",
    options: ["H2O", "O2", "CO2", "H2"],
    answer: "H2O",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Mark Twain", "Charles Dickens", "Jane Austen"],
    answer: "William Shakespeare",
  },
];
export default questions;

// const randomQuestion = (data) => {
//   return data.sort(() => (Math.random() > 0.5 ? 1 : -1));
// };
// console.log(randomQuestion([2, 3, 4, 56, 7]));
// const [current, setCurrent] = useState(() => randomQuestion(questions))