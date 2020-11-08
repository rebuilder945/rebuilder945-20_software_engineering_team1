#!/usr/bin/python3
import mysql.connector
import pymysql
import json,os,sys,getopt,argparse

#显示组的投票信息

# 内部接口：
# 从前端接收的：
# {
#     "user_id":"00001"
# }
# 返回的：
# {
#     "status":true,
#     "group_form":{
#         {
#             "group_id":"1",
#             "vote_num":"0"
#         },
#         {
#             "group_id":"2",
#             "vote_num":"1"
#         }
#     }
# }
# {
#     "status":false,
#     "msg":"?"
# }


class show_group():
    def my_show_group(jsonmessage):

        tmp = json.loads(jsonmessage)
        mydb = pymysql.connect("localhost","root","","vote_system" )
        gcursor = mydb.cursor()
        gcursor.execute("SELECT group_id,vote_num FROM group_info")
        result = gcursor.fetchall()

        ret = "{\"status\":\"true\",\"group_form\":{"


        group_form = {'group_id':'','vote_num':''}

        for i in result:
            if i[0] != 1:
                ret += ","
            group_form['group_id'] = i[0]
            group_form['vote_num'] = i[1]
            ret += json.dumps(group_form)

        ret += "}}"
        gcursor.close()
        mydb.close()
        #模拟信息回送
        return ret
