/**
 * Ex: Testing online (Trắc nghiệm trực tuyến)
 * Author: Hiếu đẹp trai
 * Task:
 *  1. Call api lấy ds câu hỏi
 *  2. Render ds câu hỏi ra màn hình
 *  3. Tính điểm và show kết quả
 */

var fetchQuestions = function () {
    axios({
        url: 'https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions',
        method: "get"
    })
        .then(function (res) {
            // console.log(res);
            var questionList = mapData(res.data);
            // console.log('sau khi render:', questionList);
            renderQuestions(questionList);
           
        })
        .catch(function (err) {
            console.log(err);
        })

    // promise => pending, fulfill, reject : Trạng thái
    // promise => then, catch : Phương thức
}

var renderQuestions = (questionList) => {
    console.log(questionList);
    var questionsHTML = "";
    for (var i = 0; i < questionList.length; i++) {
        questionsHTML += questionList[i].render();
    }
    document.getElementById('questionList').innerHTML = questionsHTML;
    // console.log(questionsHTML);
}

// function nhận vào mảng câu hỏi của be chuyển thành của mình
var mapData = (dataFormDB) => {
    var mappedData = [];
    for (var i = 0; i < dataFormDB.length; i++) {
        var currentQuestion = dataFormDB[i];
        // kiểm tra loại câu hỏi đẻ dùng lơp đối tượng tương ứng
        if (currentQuestion.questionType === 1) {
            mappedData.push(
                new MultipleChoice(currentQuestion.id, currentQuestion.questionType, currentQuestion.content, currentQuestion.answers)
            )
        } else {
            mappedData.push(
                new FillInBlank(currentQuestion.id, currentQuestion.questionType, currentQuestion.content, currentQuestion.answers)
            )
        }
    }
    return mappedData;
}

fetchQuestions();


//  // Declaration function
//  function a(){}

//  // expression function
//  var a = function(){

//  }