const tasks = {
    tasks: [
        {
            text: 'grocery shopping',
            completed: true
        }, {
            text: 'clean yard',
            completed: false
        }, {
            text: 'clean table',
            completed: false
        }, {
            text: 'stop buy',
            completed: false
        },
    ],
    getTasksTodo: function() {
        return this.tasks
    }
}



console.log(tasks.getTasksTodo());