import {Request,Response} from "express";
import { CreateCourseService } from "./CreateCourseService";
export function createCourse(request: Request,response: Response){
    const createCourseService = new CreateCourseService();
    const {name,duration,educator} = request.body;
    
    createCourseService.execute({name:"name",duration:123,educator:"educator"});
    return response.send();

}