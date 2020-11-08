/*获取表单数据 */
$(document).ready(function () {
    $('#upload').click(function () {
        // alert("group1's value is "+$('input:checkbox[id=group1]:checked').val());
        // alert("group2's value is "+$('input:checkbox[id=group2]:checked').val());
        // alert("group3's value is "+$('input:checkbox[id=group3]:checked').val());
        // alert("group4's value is "+$('input:checkbox[id=group4]:checked').val());
        // alert("group5's value is "+$('input:checkbox[id=group5]:checked').val());
        // alert("group6's value is "+$('input:checkbox[id=group6]:checked').val());
        // alert("group7's value is "+$('input:checkbox[id=group7]:checked').val());
        // alert("group8's value is "+$('input:checkbox[id=group8]:checked').val());
        // alert("group9's value is "+$('input:checkbox[id=group9]:checked').val());
        // alert("group10's value is "+$('input:checkbox[id=group10]:checked').val());
        // alert("group11's value is "+$('input:checkbox[id=group11]:checked').val());
        var i = 1;
        //获取后端数据并予之更新（增加新数据）
        $.ajax({
            type: "get",
            url: "",
            success: function (data) {
                var data2 = JSON.parse(data);
                var userMessage = [];
                for(let i in data2){
                    let data3 = {};
                    data3[i] = data2[i];
                    userMessage.push(data3[i]);
                }
                var vote_byOne = {};
                while (i < 12) {
                    i = i + 1;
                    if ($('input:checkbox[id=("group"+i)]:checked').val() != undefined) {
                        vote_byOne.push({"i": "1"});
                    }
                    else {
                        vode_byOne.push({"i": "0"});
                    }
                }
                userMessage.push({ "user_id": "", "user_key": "", "Sno": "", "name": "", "user_vote": "vote_byOne" })//从登陆页面获取当前用户的学号，组号，姓名
                alert(userMessage);
            }
        });
        //把更新后的数据返回后端
        $.ajax({
            type: "post",
            url: "",
            data: JSON.stringify(userMessage),
            contentType: 'uers/json; charset=UTF-8',
            dataType: 'json',
        })
    });
});