package ru.kinkl.spring_angular_test_app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import ru.kinkl.spring_angular_test_app.dto.PhoneDTO;

@Controller
@RequestMapping("/")
public class HelloController {
	@RequestMapping(method = RequestMethod.GET)
	public String printWelcome(ModelMap model) {
		model.addAttribute("message", "Hello world!");
		return "hello";
	}

    @RequestMapping(value = "/my_phone", method = RequestMethod.GET)
    public @ResponseBody PhoneDTO getSomeClassInfo() {
        return new PhoneDTO("HTC Wildfire S");
    }
}