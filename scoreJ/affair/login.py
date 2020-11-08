#!/usr/bin/python3
import mysql.connector
import pymysql
import json,os,sys,getopt,argparse



#登录

# 内部接口：
# 从前端接收的：
# {
#     "user_id":"00001",
#     "user_key":"12345"
# }
# 返回的：
# {
#     "status":true,
#     "msg":"登录成功"
# }
# {
#     "status":false,
#     "msg":"?"
# }


class login():
    def my_login(jsonmessage):

        tmp = json.loads(jsonmessage)

        mydb = pymysql.connect("localhost","root","","vote_system" )

        result = {'status':'','msg':''}
        mycursor = mydb.cursor()
        UserName = tmp['user_id']
        UserKey = tmp['user_key']
        mycursor.execute("SELECT user_key FROM account WHERE user_id = %s", UserName)
        ret = mycursor.fetchone()
        if result[0] == UserKey:
            #回送成功消息
            ret['status'] = 'true'
            ret['msg'] = '登录成功'
        else:
            #回送失败消息
            ret['status'] = 'false'
            ret['msg'] = '登录失败'

        mycursor.close()
        mydb.close()
        return json.dumps(ret)
