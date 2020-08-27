const Data = {
  Todo: {
    "task-1": {
      task: "Learn JavaScript",
      id: "task-1",
    },

    "task-2": {
      task: "Learn React",
      id: "task-2",
    },

    "task-3": {
      task: "Learn HTML",
      id: "task-3",
    },

    "task-4": {
      task: "Learn Python",
      id: "task-4",
    },

    "task-5": {
      task: "Learn Java",
      id: "task-5",
    },

    "task-6": {
      task: "Learn CSS ",
      id: "task-6",
    },
  },

  cards: {
    "card-1": {
      title: "To do",
      id: "card-1",
      tasks: ["task-1", "task-2"],
    },

    "card-2": {
      title: "Running",
      id: "card-2",
      tasks: ["task-3", "task-4"],
    },

    "card-3": {
      title: "Completed",
      id: "card-3",
      tasks: ["task-5", "task-6"],
    },
  },

  cardOrder: ["card-1", "card-2", "card-3"],
};

export default Data;