#!/usr/bin/env python

import os
import time


def auto_backup():
    DB_HOST = '127.0.0.1'
    DB_PORT = '32768'
    DB_USER = 'root'
    DB_USER_PASSWORD = '123456'
    DB_NAME = 'crm'
    BACKUP_PATH = '/bk/'

    FILE_NAME = time.strftime('%m%d%Y-%H%M%S')

    TODAYBACKUPPATH = BACKUP_PATH + time.strftime('%m%d%Y')

    print "creating backup folder"
    if not os.path.exists(TODAYBACKUPPATH):
        os.makedirs(TODAYBACKUPPATH)

    print "checking for databases names file."
    if os.path.exists(FILE_NAME):
        file1 = open(FILE_NAME)
        multi = 1
        print "Databases file found..."
        print "Starting backup of all dbs listed in file " + DB_NAME
    else:
        print "Databases file not found..."
        print "Starting backup of database " + DB_NAME
        multi = 0

    if multi:
        in_file = open(FILE_NAME, "r")
        flength = len(in_file.readlines())
        in_file.close()
        p = 1
        dbfile = open(FILE_NAME, "r")

        while p <= flength:
            db = dbfile.readline()   # reading database name from file
            db = db[:-1]         # deletes extra line
            dumpcmd = "mysqldump -u " + DB_USER + " -p" + DB_USER_PASSWORD + " -P" + DB_PORT + " " + \
                db + " > " + TODAYBACKUPPATH+"/"+FILE_NAME + "_" + db + ".sql"
            os.system(dumpcmd)
            p = p + 1
        dbfile.close()
    else:
        db = DB_NAME
        dumpcmd = "mysqldump -u " + DB_USER + " -p" + DB_USER_PASSWORD + " -P" + DB_PORT + " " + \
            db + " > " + TODAYBACKUPPATH+"/" + FILE_NAME + "_" + db + ".sql"
        os.system(dumpcmd)

    print "Backup script completed"
    print "Your backups has been created in '" + TODAYBACKUPPATH + "' directory"


auto_backup()
