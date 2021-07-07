import sqlite3
from sqlite3 import Error
import json

conn = None

def create_connection(db_file):
    """ create a database connection to a SQLite database """
    try:
        global conn
        conn = sqlite3.connect(db_file)
        print(sqlite3.version)
    except Error as e:
        print(e)

def create_table():
    try:
        strSql = "create table if not exists words(id integer primary key, word text not null, level text not null, definition text not null)"
        c = conn.cursor()
        c.execute(strSql)
    except Error as e:
        print(e)


def parseJson(file):
    f = open(file, "r", encoding='UTF-8')
    jsonData = f.read()
    f.close()
    text = json.loads(jsonData)

    data = text["data"]
    c = conn.cursor()
    
    for entry in data:
        word = entry["expression"]
        cefr = entry["cefr"]
        definition = entry["definition"]
        strSql = "insert into words(word, level, definition) values ('{w}', '{e}', '{d}')".format(w =escapeQ(word) , e =escapeQ(cefr), d = escapeQ(definition));
        #print(strSql)
        c.execute(strSql)

def escapeQ(w):
    return w.replace("'", "''")

if __name__ == '__main__':
    create_connection(r"C:\GitProjects\vocabjotdown\english\words.db")
    create_table()
    for i in range(1, 3492):
        file = r"C:\GitProjects\vocabjotdown\english\quotes-page={p}.html".format(p=i)
        parseJson(file)
    
    if conn:
        conn.commit()
        conn.close()