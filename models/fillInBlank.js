class FillInBlank extends Question {
  constructor(id, type, content, answers) {
    super(id, type, content, answers);
  }

  checkExact() {
    // lấy value của input
    var value = document.getElementById(`fill-in-blank-${this.id}`).value;
    // kiểm tra đúng sai
    if (this.answers[0].content.toLowerCase() === value.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  }
  //return đoạn mã HTML tương ứng với câu hỏi MultipleChoice
  render() {
    return `
          <div>
            <h1>Câu hỏi 1: ${this.content}</h1>
            <input type="text" id="fill-in-blank-${this.id}" />
          </div>
        
        `;
  }
}
