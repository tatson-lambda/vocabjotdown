import mysql.connector
import os
from pathlib import Path
from mysql.connector.errors import Error

def prop_test():
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

  cascadeDelete(mycursor, 'test')
  
  # populate test account and information
  # add user
  strSql = "insert into user(login_name, common_name, email, status, last_update_time) values ('test', 'test', 'tom87416@gmail.com', 'A', now())".format()
  mycursor.execute(strSql)
  uid = mycursor.lastrowid 

  # select eng id
  strSql = "select * from language where code='en'"
  mycursor.execute(strSql)
  rows = mycursor.fetchall()
  lid=  rows[0][0]

  # user role
  #strSql = "insert into user_role() values ()".format()
  #mycursor.execute(strSql)

  #add profile
  strSql = "insert into profile (user_id, language_id, level, status, last_update_time) values ({uid}, {lid}, '{l}', '{s}', now())".format(uid=uid, lid=lid, l='C1', s='A')
  mycursor.execute(strSql)
  pid = mycursor.lastrowid 

  #add vocabulary
  words = ['intolerance', 'coherence', 'contraception', 'portrayal']
  meanings = ['lack of tolerance; unwillingness or refusal to tolerate or respect opinions or beliefs contrary to one''s own.', 
    'the act or state of cohering; cohesion.', 'the deliberate prevention of conception or impregnation by any of various drugs, techniques, or devices; birth control.', 
    'the act of portraying.']
  for w in words:
    strSql = "insert into vocabulary (profile_id, word, progress, last_update_time) values ({pid}, '{w}', '{s}', now())  ".format(pid=pid , w=w, s='A')
    mycursor.execute(strSql)

  #add article
  title = "The adoption"
  f = open(r"C:\GitProjects\vocabjotdown\poc\data\english\corpos\steve.txt", "r", encoding='UTF-8')
  content = escapeQ(f.read())
  strSql = "insert into article (profile_id, title, content, status, create_time, last_update_time) values ({pid}, '{t}', '{c}', '{s}', now(), now())".format(pid=pid, t=title, c=content, s='A')
  mycursor.execute(strSql)

  #add flash card deck
  strSql = "insert into flashcarddeck (profile_id, create_time, last_update_time, status) values ({pid}, now(), now(), 'A')".format(pid=pid)
  mycursor.execute(strSql)
  did = mycursor.lastrowid 

  #add flash card
  for w, m in zip(words, meanings):
    strSql = "insert into flashcard (deck_id, word, meaning, last_study, response, create_time, last_update_time, status) values ({did}, '{w}', '{m}', now(), 5, now(), now(), 'A')".format(did=did, w=w, m=m)
    mycursor.execute(strSql)


  # clean up
  mydb.commit()
  mycursor.close()
  mydb.close()

def cascadeDelete(mycursor, username):
  # remove the user if exists
  strSql = "select * from user where login_name='{name}'".format(name=username)
  mycursor.execute(strSql)
  rowsu = mycursor.fetchall()

  for rowu in rowsu:

    uid = rowu[0]

    strSql = "select * from profile where user_id={uid}".format(uid=uid)
    print(strSql)
    mycursor.execute(strSql)
    rows = mycursor.fetchall()

    for row in rows:

      pid = row[0]

      strSql = "delete from vocabulary where profile_id={pid}".format(pid=pid)
      mycursor.execute(strSql)
      
      strSql = "delete from article where profile_id={pid}".format(pid=pid)
      mycursor.execute(strSql)

      strSql = "select * from flashcarddeck where profile_id={pid}".format(pid=pid)
      mycursor.execute(strSql)
      rows2 = mycursor.fetchall()

      for row2 in rows2:
        did = row2[0]

        strSql = "delete from flashcard where deck_id={did}".format(did=did)
        mycursor.execute(strSql)

        strSql = "delete from flashcarddeck where profile_id={pid}".format(pid=pid)
        mycursor.execute(strSql)

      strSql = "delete from profile where id={pid}".format(pid=pid)
      mycursor.execute(strSql)

    strSql = "delete from user where id={uid}".format(uid=uid)
    mycursor.execute(strSql)

def escapeQ(w):
    return w.replace("'", "''")

if __name__ == "__main__":
    prop_test()