class MultipleChoice extends Question {
    constructor(id, type, content, answers) {
        // super: Hàm dùng để kế thừa 
        super(id, type, content, answers);
    }

    // method
    checkExact() {

    }

    // return đoạn mã html tương ứng với câu hỏi MultipleChoice
    render() {
        var answersHTML = '';
        for (var i = 0; i < this.answers.length; i++) {
            answersHTML += `
            <div>
                <input type="radio" />
                <label>${this.answers[i].content}</label>
            </div>
            `
        }
        //Test answersHTML
        console.log(answersHTML);

        return `
        <div>
            <h3>Câu hỏi 1: ${this.content}</h3>
            ${answersHTML}
        </div>
        `
    }
}
const newMultipleChoiceQuestion = new MultipleChoice(1, 'Loại 1', 'Hôm nay là thứ mấy?',
    [
        { content: "Thứ 2" },
        { content: "Thứ 3" },
        { content: "Thứ 4" },
        { content: "Thứ 5" },
        { content: "Thứ 6" },
        { content: "Thứ 7" },
    ]
);

console.log('newQuestion1:',newMultipleChoiceQuestion);
console.log('newQuestion2.render:',newMultipleChoiceQuestion.render());