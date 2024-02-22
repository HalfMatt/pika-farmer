//assume axios is already imported

const API_ENDPOINT = 'https://webtechnologies.site/pika/'; //fixed soontm

async function fetchQuestionsAndOptions() {
  try {
    const response = await axios.get(API_ENDPOINT);
    const data = response.data;
    console.log(data);

    if (!data) {
      window.alert('No data found in the response, check console for output.');
      console.error('No data found in the response.');
      return;
    }
    const questions = data.split('!==!');

// Function to sanitize input
function sanitizeInput(input) {
  const temp = document.createElement('div');
  temp.textContent = input;
  return temp.innerHTML;
}

const formattedQuestions = questions.map((question, index) => {
  // Split the question into its components
  const components = question.split(':::').filter(component => component.length > 0);
  console.log(components);

  const table = document.getElementById('QnA-container');
  const row = document.createElement('tr');
  row.className = 'question-rows';

  // Create the first column
  const questionText = document.createElement('td');
  questionText.className = 'question-text';
  questionText.textContent = sanitizeInput(components.slice(0, 5).join('\r\n'));
  console.log(questionText.textContent);
  row.appendChild(questionText);

  // Create the second column
  const answerText = document.createElement('td');
  answerText.className = 'answer-text';
  answerText.textContent = sanitizeInput(components[5] ? components[5].toUpperCase() : '');
  row.appendChild(answerText);

  // Append the row to the table
  table.appendChild(row);
});

  } catch (error) {
    window.alert('Error fetching questions, check console for more details.');
    console.error('Error fetching questions:', error);
  }
  
}

// Call the function to fetch and format questions
fetchQuestionsAndOptions();



