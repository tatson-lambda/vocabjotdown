import mysql.connector
import os
from pathlib import Path
from mysql.connector.errors import Error
import sqlite3

def db_propagate():
    script_file_path = os.path.realpath(__file__)
    p = Path(script_file_path)
    script_file_dir = str(p.parent)

    strHost = "192.168.100.60"
    strUser = "vocabjotdown"
    strPassword = "Test@123.com"

    mydb = mysql.connector.connect(
    host=strHost,
    user=strUser,
    password=strPassword
    )

    mycursor = mydb.cursor()

    mycursor.execute("use vocabjotdown;")

    # delete all the table
    mycursor.execute("SET FOREIGN_KEY_CHECKS = 0;")

    strSql = "SELECT table_name FROM information_schema.tables WHERE table_schema = '{d}';".format(d="vocabjotdown")
    mycursor.execute(strSql)
    tablez = []
    for (table_name) in mycursor:
        tablez.append(table_name[0])


    for name in tablez:
        strSql = "DROP TABLE IF EXISTS {t};".format(t=name)
        print(strSql)
        mycursor.execute(strSql)
            
    mycursor.execute("SET FOREIGN_KEY_CHECKS = 1;")


    #create all the table by execute the script
    with open(script_file_dir + os.sep + 'schema.sql') as f:
        strSql = f.read()
        try:
            results = mycursor.execute(strSql, multi=True)
            
            for cur in results:
                if cur.with_rows:
                    cur.fetchall()

        except Error as e:
            print(e)

    userIds = []

    # create 2 users: admin and background
    strSql = "delete from user;"
    mycursor.execute(strSql)
    strSql = "insert into user (login_name, common_name, email, status, last_update_time) values ('{loginName}', '{commonName}', '{email}', '{status}', now()); ".format(loginName="admin", commonName="admin", email="tatsonlambda@gmail.com", status="A")
    mycursor.execute(strSql)
    userIds.append(mycursor.lastrowid )
    strSql = "insert into user (login_name, common_name, email, status, last_update_time) values ('{loginName}', '{commonName}', '{email}', '{status}', now()); ".format(loginName="scheduler", commonName="scheduler", email="tatsonlambda@gmail.com", status="A")
    mycursor.execute(strSql)
    userIds.append(mycursor.lastrowid )
    
    strSql = "insert into user_role (user_id, role) values ({uid}, '{role}'); ".format(uid=userIds[0], role="admin")
    mycursor.execute(strSql)

    # init english resources
    strSql = "insert into language (name, code, create_time, last_update_time) values ('{name}', '{code}', now(), now());".format(name="English", code="en")
    print(strSql)
    mycursor.execute(strSql)
    lang_id= mycursor.lastrowid 

    eng_res = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2']
    for x in eng_res:
        strSql = "insert into resource (language_id, name, create_time, last_update_time) values ({langId}, '{name}', now(), now());".format(langId = lang_id, name=x)
        mycursor.execute(strSql)
        res_id= mycursor.lastrowid 
        words = getEnglishWords(x)
    
        for w in words:
            strSql = "insert into resource_word (word, resource_id) values ('{w}', {rid})".format(w = escapeQ(w), rid = res_id)
            mycursor.execute(strSql)
        
    # init japanese resources


    # clean up
    mydb.commit()
    mycursor.close()
    mydb.close()

def escapeQ(w):
    return w.replace("'", "''")

def getEnglishWords(level):
    conn = None
    result = []
    try:
        conn = sqlite3.connect(r"C:\GitProjects\vocabjotdown\sql\data\en-words.db")
        sc = level.upper() + "%"
        cur = conn.cursor()
        strSql = "SELECT word FROM words where level like '{text}'".format(text = sc)
        cur.execute(strSql)

        rows = cur.fetchall()
 
        for row in rows:
            result.append(row[0])

    except Error as e:
        print(e)

    print(result)

    return result

if __name__ == "__main__":
    db_propagate()