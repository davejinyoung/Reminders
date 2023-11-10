from datetime import *


class ReminderDateTime:

    def __init__(self):
        self.year = 0
        self.month = 0
        self.day = 0
        self.hour = 0
        self.min = 0
        self.sec = 0

    def set_datetime(self, date, time):
        """
        setting the datetime for a new rem
        :param date: month, day, year
        :param time: hours, min, sec
        :return: None
        """
        pass

    def change_datetime(self, date, time):
        """
        changing the datetime for an existing rem
        :param date: month, day, year
        :param time: hours, min, sec
        :return: None
        """
        pass

    def remove_datetime(self):
        """
        removing the datetime for multipurpose uses
        :param date: month, day, year
        :param time: hours, min, sec
        :return: None
        """
        pass
