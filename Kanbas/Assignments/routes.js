import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  const findAssignmentByCourseId = async (req, res) => {
    const { cid } = req.params;
    const assignments = await dao.findAssignmentByCourseId(cid);
    res.json(assignments);
  };

  const deleteAssignment = async (req, res) => {
    const { aid } = req.params;
    const status = await dao.deleteAssignment(aid);
    res.json(status);
  };

  const findAssignmentById = async (req, res) => {
    const { aid } = req.params;
    const assignment = await dao.findAssignmentById(aid);
    if (!assignment) {
      res.status(404).send("Assignment not found");
      return;
    }
    res.json(assignment);
  };

  const updateAssignment = async (req, res) => {
    const { aid } = req.params;
    const status = await dao.updateAssignment(aid, req.body);
    res.json(status);
  };

  const createAssignment = async (req, res) => {
    req.body.course = req.params.cid;
    req.body.id = new Date().getTime().toString();
    const assignment = await dao.createAssignment(req.body);
    res.json(assignment);
  };

  app.get("/api/courses/:cid/assignments", findAssignmentByCourseId);
  app.put("/api/assignments/:aid", updateAssignment);
  app.delete("/api/assignments/:aid", deleteAssignment);
  app.post("/api/courses/:cid/assignments", createAssignment);
  app.get("/api/assignments/:aid", findAssignmentById);
}