package ru.kinkl.spring_angular_test_app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import ru.kinkl.spring_angular_test_app.dto.PhoneDTO;

@Controller
@RequestMapping("/")
public class HelloController {
	@RequestMapping(method = RequestMethod.GET)
	public String printWelcome(ModelMap model) {
		model.addAttribute("message", "Hello world!");
		return "hello";
	}

    @RequestMapping(value = "/smartphones", method = RequestMethod.GET)
    public @ResponseBody PhoneDTO[] getSmartphones() throws InterruptedException {
        Thread.sleep(1000); //Imitation of rough activity
        PhoneDTO[] phoneDTOs = {new PhoneDTO("HTC Wildfire S"), new PhoneDTO("Samsung Galaxy Tab")};
        return phoneDTOs;
    }

    @RequestMapping(value = "/smartphones/{smartphoneId}", method = RequestMethod.GET)
    public @ResponseBody PhoneDTO getSmartphone(@PathVariable String smartphoneId) {
        PhoneDTO phoneDTO = new PhoneDTO(smartphoneId);
        return phoneDTO;
    }
}