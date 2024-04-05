import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  const findCourseById = async (req, res) => {
    const { id } = req.params;
    const course = await dao.findCourseById(id);
    if (!course) {
      res.status(404).send("Course not found");
      return;
    }
    res.json(course);
  };

  const updateCourse = async (req, res) => {
    const { id } = req.params;
    const status = await dao.updateCourse(id, req.body);
    res.json(status);
  };

  const deleteCourse = async (req, res) => {
    const { id } = req.params;
    const status = await dao.deleteCourse(id);
    res.json(status);
  };

  const createCourse = async (req, res) => {
    const course = await dao.createCourse(req.body);
    res.json(course);
  };

  const findAllCourses = async (req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
  };



  app.get("/api/courses/:id", findCourseById);
  app.put("/api/courses/:id", updateCourse);
  app.delete("/api/courses/:id", deleteCourse);
  app.post("/api/courses", createCourse);
  app.get("/api/courses", findAllCourses);
}
