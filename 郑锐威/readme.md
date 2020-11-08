数据库vote_system：

account表（用户表）：
user_id(学号/特殊号)、user_key（密码,管理员默认为00000，其他则为学号）、user_group_id（组号,没选择默认为0）、user_vote（所投组,没投时为空，有投时以字符串形式呈现，如投1,2,4,5组则记为"1 2 4 5"）
*无法投自己组的票，否则作废。
group_info表（小组信息表）：
group_id(组序号)、vote_num（获得票数）

python代码：

login:登录

choose_group:学生选择所属组

vote:投票

show_stu_info:展示学生数据（老师端）

show_group:展示小组投票数据（学生端）

class_type文件夹：用定义类和函数的格式书写，对应名字与上一级对应的相同

环境搭建：pip,pymysql,django,mysql-connector

pip：简易安装框架工具

在python对应文件目录下打开命令行中输入：

curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py

python get-pip.py

命令行输入以下代码可显示pip版本并检查是否成功安装：

pip --version

django:

命令行输入：
pip install Django -i https://pypi.tuna.tsinghua.edu.cn/simple

通过命令行输入以下代码检查是否安装成功：
django-admin.py startproject HelloWorld

mysql-connector:

命令行输入：
python -m pip install mysql-connector

打开python用以下代码检查是否安装成功：
import mysql.connector
没产生错误则安装成功

pymysql:
命令行输入：
pip install PyMySQL

以上安装后实际运用中调用对应函数功能都需要通过import加载框架