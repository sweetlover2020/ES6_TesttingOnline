/**
 * Ex: Testing online (trắc nghiệm trực tuyến)
 * Author: Hiếu đẹp chai
 * Tasks:
 *      1.Call api lấy ds câu hỏi
 *      2.Render ds câu hỏi ra màn hình
 *      3.Tính điểm và show kết quả
 */
var questionList;
var fetchQuestions = function () {
  axios({
    url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions",
    method: "GET",
  })
    .then(function (res) {
      console.log(res);
      questionList = mapData(res.data);
      console.log(questionList);
      renderQuestions(questionList);
    })
    .catch(function (err) {
      console.log(err);
    });
};

var renderQuestions = function (questionList) {
  var questionsHTML = "";

  for (var i = 0; i < questionList.length; i++) {
    questionsHTML += questionList[i].render();
  }

  document.getElementById("questionList").innerHTML = questionsHTML;
};
//Nhận vào ds câu hỏi từ backend => chuyển thành ds câu hỏi của mình
var mapData = function (dataFromDB) {
  var mappedData = [];

  for (var i = 0; i < dataFromDB.length; i++) {
    var currentQuestion = dataFromDB[i];
    //kiểm tra loại câu hỏi để dùng lớp tương ứng
    if (currentQuestion.questionType === 1) {
      mappedData.push(
        new MultipleChoice(
          currentQuestion.id,
          currentQuestion.questionType,
          currentQuestion.content,
          currentQuestion.answers
        )
      );
    } else {
      mappedData.push(
        new FillInBlank(
          currentQuestion.id,
          currentQuestion.questionType,
          currentQuestion.content,
          currentQuestion.answers
        )
      );
    }
  }
  return mappedData;
};

fetchQuestions();

var handleResult = function () {
  var result = 0;

  // duyệt qua từng câu hỏi và kiểm tra xem có đúng hay khong:
  //     nếu đúng thì tăng result lên 1
  //     nếu sai thì không làm gì hết
  questionList.forEach(function (question) {
    // call back function
    // console.log("question : ", question);
    if (question.checkExact()) {
      result += 1;
    }
  });

  // thông báo kết quả cho người dùng
  console.log(`số câu đúng là : ${result}`);
  alert(`số câu đúng là : ${result}`);
};
