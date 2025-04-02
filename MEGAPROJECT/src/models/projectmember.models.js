import mongoose, { Schema } from "mongoose";
import { availableUserRole, userRoleEnum } from "../utils/constants.js";

const projectMemberSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    project: {
      type: Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    role: {
      type: String,
      enum: availableUserRole,
      default: userRoleEnum.MEMBERS,
    },
  },
  { timestamps: true },
);

const ProjectMember = mongoose.model("ProjectMember", projectMemberSchema);

export default ProjectMember;
