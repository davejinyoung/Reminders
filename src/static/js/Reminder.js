class Reminder {
    constructor(text, severity, datetime) {
        this.text = text;
        this.severity = severity;
        this.datetime = datetime;
        this.checked = false;
    }

    getText(){
        return this.text;
    }

    getChecked(){
        return this.checked;
    }

    updateChecked(){
        this.checked = !this.checked;
    }

    updateCheckedTrue(){
        this.checked = true;
    }

    getDatetime(){
        return this.datetime;
    }

    getSeverity(){
        return this.severity;
    }
}