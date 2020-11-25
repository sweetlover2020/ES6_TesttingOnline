class MultipleChoice extends Question {
  constructor(id, type, content, answers) {
    super(id, type, content, answers);
  }

  checkExact() {
    var isExact = false;
    // lấy danh sách câu trả lời
    var answersList = document.getElementsByName(`multiple-choice-${this.id}`);
    console.log(answersList);
    answersList.forEach(function (answers) {
      if (answers.checked) {
        if (answers.value == "true") {
          isExact = true;
        } else {
          isExact = false;
        }
      }
    });

    return isExact;
  }
  //return đoạn mã HTML tương ứng với câu hỏi MultipleChoice
  render() {
    var answersHTML = "";

    for (var i = 0; i < this.answers.length; i++) {
      answersHTML += `
            <div>
                <input 
                  type="radio" 
                  name="multiple-choice-${this.id}" 
                  value=${this.answers[i].exact} 
                />
                <label>${this.answers[i].content}</label>
            </div>
        `;
    }

    return `
        <div>
            <h1>Câu hỏi 1: ${this.content}</h1>
            ${answersHTML}

        </div>
      
      `;
  }
}

const newMultipleChoiceQuestion = new MultipleChoice(
  "1",
  "1",
  "Hôm nay là thứ mấy?",
  [
    { content: "Thứ 2" },
    { content: "Thứ 4" },
    { content: "Thứ 5" },
    { content: "Thứ 7" },
  ]
);

console.log(newMultipleChoiceQuestion);
console.log(newMultipleChoiceQuestion.render());
