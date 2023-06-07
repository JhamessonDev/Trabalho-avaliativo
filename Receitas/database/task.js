const prisma = require("./prisma");

const findAllTasks = (userId) => {
  return prisma.task.findMany({
    where: {
      userId,
    },
  });
};

const saveTask = (task, userId) => {
  return prisma.task.create({
    data: {
      recipe_name: task.recipe_name,
      description: task.description,
      recipe_time: task.recipe_time,
      //   userId: userId
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
};

module.exports = {
  findAllTasks,
  saveTask,
};
