class Question {
  constructor(id, type, content, answers) {
    this.id = id;
    this.questionType = type;
    this.content = content;
    this.answers = answers;
  }

  //method
  checkExact() {}

  render() {}
}

const newQuestion = new Question("1", "1", "Hôm nay là thứ mấy?", [
  { content: "Thứ 2" },
  { content: "Thứ 4" },
  { content: "Thứ 5" },
  { content: "Thứ 7" },
]);

console.log(newQuestion);

// var Question = function(){

//     this.checkExact = function(){

//     }
//     this.render = function(){

//     }
// }
