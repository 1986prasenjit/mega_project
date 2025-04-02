export const userRoleEnum = {
  ADMIN: "admin",
  PROJECT_ADMIN: "project_admin",
  MEMBERS: "members",
};

export const availableUserRole = Object.values(userRoleEnum);

export const taskStatusEnum = {
  TODO: "todo",
  IN_PROGRESS: "in_progress",
  DONE: "done",
};

export const availableTaskStatus = Object.values(taskStatusEnum);
