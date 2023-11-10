
class ReminderContent:

    def __init__(self):
        self.task_title = ""
        self.task_desc = ""
        self.priority = None

    def set_task_title(self, task_title):
        """
        setting the title of the task for new rem
        :param task_title: title of task
        :return: None
        """
        self.task_title = task_title

    def set_task_desc(self, task_desc):
        """
        setting the description of the task for new rem
        :param task_desc: description of task
        :return: None
        """
        self.task_desc = task_desc