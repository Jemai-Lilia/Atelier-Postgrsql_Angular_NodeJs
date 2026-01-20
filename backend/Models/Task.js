module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    "Task",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      titre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      etat: {
        type: DataTypes.ENUM("A_FAIRE", "EN_COURS", "DONE"),
        allowNull: false,
        defaultValue: "A_FAIRE",
      },
    },
    {
      tableName: "tasks",
      timestamps: false, // pas de createdAt / updatedAt
    }
  );

  return Task;
};
