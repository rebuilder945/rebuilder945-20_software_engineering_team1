function sum_up() {
    //获取投票信息
    $.ajax({
        type: "get",
        url: "",
        success: function (data) {
            var vote_num = [
                {
                    name:group1,
                    value:0
                },
                {
                    name:group2,
                    value:0
                },
                {
                    name:group3,
                    value:0
                },
                {
                    name:group4,
                    value:0
                },
                {
                    name:group5,
                    value:0
                },
                {
                    name:group6,
                    value:0
                },
                {
                    name:group7,
                    value:0
                },
                {
                    name:group8,
                    value:0
                },
                {
                    name:group9,
                    value:0
                },
                {
                    name:group10,
                    value:0
                },
                {
                    name:group11,
                    value:0
                }
            ];
            for(var i in data){
                for(var j in i.user_vote){
                    if(i.user_vote.j == 1){
                        vote_num.getElementByid("group"+j).value = vote_num.getElementByid("group"+j).value + 1;
                    }
                }
            }
            
        }
    })
};
