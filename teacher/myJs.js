var arrFir = [
    { "name": "第一组", "link": "https://www.cnblogs.com/20team1/" },
    { "name": "第二组", "link": "https://www.cnblogs.com/SEteam2/" },
    { "name": "第三组", "link": "https://www.cnblogs.com/whlh/" },
    { "name": "第四组", "link": "https://www.cnblogs.com/dygjc/" },
    { "name": "第五组", "link": "https://www.cnblogs.com/dongdedoudong/" },
    { "name": "第六组", "link": "https://www.cnblogs.com/cjwl/" },
    { "name": "第七组", "link": "https://www.cnblogs.com/bjdkf/" },
    { "name": "第八组", "link": "https://www.cnblogs.com/NO8ruangong/" },
    { "name": "第九组", "link": "https://www.cnblogs.com/wyy12/" },
    { "name": "第十组", "link": "https://www.cnblogs.com/Double-Ten/" },
    { "name": "第十一组", "link": "https://www.cnblogs.com/classzgroup11/" }];
var arrSec = [
    { "group": 1, "member": { "id": ["031802127", "031802515","031802224","031802542","031802244","031802138","031802304","031802329","031802443","031802321"] } },
    { "group": 2, "member": { "id": ["151803103", "031802320","031802322","031802638","031802427","031802302","031802530","031802303","",""] } },
    { "group": 3, "member": { "id": ["021800527", "031802507","031802243","031802438","031801125"] } },
    { "group": 4, "member": { "id": ["031802442", "031802220"] } },
    { "group": 5, "member": { "id": ["031802442", "031802220"] } },
    { "group": 6, "member": { "id": ["031802442", "031802220"] } },
    { "group": 7, "member": { "id": ["031802442", "031802220"] } },
    { "group": 8, "member": { "id": ["031802442", "031802220"] } },
    { "group": 9, "member": { "id": ["031802442", "031802220"] } },
    { "group": 10, "member": { "id": ["031802442", "031802220"] } },
    { "group": 11, "member": { "id": ["031802442", "031802220"] } }];
function searchVote() {
    var user_id = document.getElementById("inputData").value;
    /*axios.get('/user', {
         params: {
             user_id: 12345
         }
     })
         .then(function (response) {
             swal(response.data)
         })
         .catch(function (error) {
             console.log(error);
         });*/
    swal(user_id, "这里显示投给了谁");
}
function GroupDetail(groupNum) {
    alert(groupNum);
    for (var i = 0; i < arrSec[groupNum].member.id.length; i++) {
    /*    axios.get('/user', {
            params: {
                user_id: 12345
            }
        })
            .then(function (response) {
                swal(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });*/
    }
}
$(document).ready(function () {
    for (var i = 0; i < arrFir.length; i++) {
        $('#fir').append('<ul id=' + arrFir[i].name + ' class=groupUl><a href=' + arrFir[i].link + '>' + arrFir[i].name + '</a></ul> ');
        for (var j = 0; j < arrSec[i].member.id.length; j++) {
            (function (i, j) {
                $('#' + arrFir[i].name + '').append('<li id=' + i + '' + arrSec[i].member.id[j] + '>' + arrSec[i].member.id[j] + '</li> ');
                $('#' + i + arrSec[i].member.id[j] + '').on('click', function (e) {
                    e.stopPropagation();
                    /*      axios.get('/user', {
                            params: {
                                user_id: 12345
                            }
                        })
                            .then(function (response) {
                                swal(response.data)
                            })
                            .catch(function (error) {
                                console.log(error);
                            });*/
                    swal(arrSec[i].member.id[j], "这里显示投给了谁");
                })
            })(i, j);
        }
        (function (i) {
            $('#' + arrFir[i].name + '').append('<div class=vote_result>0票</div><button class=vote_detail onclick="GroupDetail(' + i + ')">详情</button>');
        })(i);

    }
});
