#!/usr/bin/python3
import mysql.connector
import pymysql
import json,os,sys,getopt,argparse

#显示学生投票数据

# 内部接口：
# 从前端接收的：
# 待修改
# {
#     "user_id":"00000",
# }
# 返回的：
# {
#     "status":true,
#     "msg":{
#         {
#             "user_id":"00001",
#             "user_vote":"2 3 4"
#         },
#         {
#             "user_id":"00002",
#             "user_vote":"1 3 4"
#         }
#         ....
#     }
# }
# {
#     "status":false,
#     "msg:":"?"
# }


class show_stu_info():
    def my_show_stu_info(jsonmessage):

        tmp = json.loads(jsonmessage)
        ret = {'status':'','msg':''}
        if tmp['user_id'] != "00000":
            #模拟回送失败消息
            ret['status'] = 'false'
            ret['msg'] = '无权限'
            return json.dumps(ret)

        mydb = pymysql.connect("localhost","root","","vote_system" )
        gcursor = mydb.cursor()

        gcursor.execute("SELECT user_id,user_vote FROM account")
        result = gcursor.fetchall()

        ret = "{\"status\":\"true\",\"msg\":{"


        student_form = {'user_id':'','user_vote':''}
        cnt = 1
        for i in result:
            if cnt != 1:
                ret += ","
            ++cnt
            student_form['user_id'] = i[0]
            student_form['user_vote'] = i[1]
            ret += json.dumps(student_form)

        ret += "}}"
        gcursor.close()
        mydb.close()
        #模拟信息回送
        return ret