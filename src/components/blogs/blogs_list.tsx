import { revalidatePath } from "next/cache";
import { GetUser, GetUsers } from "@/server/users/users";
import { Typography } from "@mui/material";
import AddTaskForm from "../todo/add_task_form";
import { Delete } from "@mui/icons-material";
import { getAssignedTasks, getAssignedToTasks, getTasks } from "@/server/tasks/tasks";
import TaskTable from "../todo/task_table";

const blogsList = async () => {
  const users = await GetUsers();
  const user = await GetUser();
  const assignedTasks = await getAssignedTasks();
  const assignedToTasks = await getAssignedToTasks();
  const tasks = await getTasks(assignedTasks);
  return (
    <>
   
      <Typography
        component="h2"
        sx={{
          fontSize: 25,
          fontWeight: 500,
          padding: 2,
        }}
      >
        Assigned Tasks
      </Typography>

      <Typography
        component="h2"
        sx={{
          fontSize: 20,
          fontWeight: 500,
          padding: 2,
        }}
      >
        Assigned Tasks To Me
      </Typography>

      

      {user.userRole === "ADMIN" ? (
        <>
          <Typography
            component="h2"
            sx={{
              fontSize: 20,
              fontWeight: 500,
              padding: 2,
            }}
          >
            Assigned Tasks By Me
          </Typography>

        
        </>
      ) : null}

    </>
  );
};
export default blogsList;
