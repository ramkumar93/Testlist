package com.controller;

import java.io.IOException;
import java.util.List;

import javax.jdo.PersistenceManager;
import javax.jdo.Query;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.portlet.bind.annotation.RenderMapping;





import com.google.gson.Gson;
import com.google.gson.JsonObject;





@Controller
public class TestlistServlet {
	
	PersistenceManager p = null;
	
	
	@RequestMapping(value="/createTodo")
	public @ResponseBody String getDetails(@RequestBody String obj)
	{
		p = PMF.get().getPersistenceManager();
		Todo todo = new Todo();
		System.out.println("in server");
		System.out.println("title is "+obj);
		JSONParser parser = new JSONParser();
		JSONObject jsonObject = null;
		try {
			jsonObject = (JSONObject) parser.parse(obj);
			String title = (String) jsonObject.get("title");
			String ID = (String) jsonObject.get("ID");
			String status = (String) jsonObject.get("status");
			boolean completed = (boolean) jsonObject.get("completed");
		//	long l = Long.valueOf(ID);
			System.out.println(title);
			System.out.println(ID);
			System.out.println(status);
			System.out.println(completed);
			todo.setTitle(title);
			todo.setID(ID);
			todo.setStatus(status);
			System.out.println("1");
			todo.setCompleted(completed);
			System.out.println("1");
			p.makePersistent(todo);
			System.out.println("1");
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		finally{
			//p.close();
		}
		return obj;
	}
	
	
	@SuppressWarnings("unchecked")
	@RequestMapping(value="/retriveTodo")
	public @ResponseBody String giveDetails()
	{
	//	System.out.println("in retrive server");
		p = PMF.get().getPersistenceManager();
		String json = null;
		List<Todo> results = null;
		String status = "active";
	
		try{
	
		Query q = p.newQuery(Todo.class);
		q.setFilter(" status == '"+ status+"'");
	
		 results = (List<Todo>) q.execute();
		 System.out.println(results);
	
		}
		catch(Exception e){
			System.out.println(e);
		}
		Gson gson = new Gson();
	
		json = gson.toJson(results);
	
	    System.out.println(json);
	
		return json;
	}
	
//	@RequestMapping(value="/createTodo/{ID}")
//	public @ResponseBody String deleteTodo(@PathVariable("ID") String obj)
//	{
//		System.out.println("Delete Id = "+obj);
//		
//		return "xss";
//	}
	
	//	public void doGet(HttpServletRequest req, HttpServletResponse resp)
//			throws IOException {
//		resp.setContentType("text/plain");
//		resp.getWriter().println("Hello, world");
//}
}
