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
#     "stu_form":{
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

#模拟数据接收（以字符串形式呈现）
jsonmessage = "{\"user_id\":\"00000\"}"

tmp = json.loads(jsonmessage)

if tmp['user_id'] != "00000":
    #模拟回送失败消息
    print("无权限")
    exit()

mydb = pymysql.connect("localhost","root","","vote_system" )
gcursor = mydb.cursor()

gcursor.execute("SELECT user_id,user_vote FROM account")
result = gcursor.fetchall()

print(result)
