package ru.kinkl.spring_angular_test_app.controller;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import ru.kinkl.spring_angular_test_app.dto.PhoneDTO;

import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/")
public class HelloController {
    private Map<String, PhoneDTO> phones = new HashMap<String, PhoneDTO>() {{
        put("wildfire", new PhoneDTO("wildfire", "HTC Wildfire S", "Wild smartphone from HTC"));
        put("galaxy-tab", new PhoneDTO("galaxy-tab", "Samsung Galaxy Tab", "New age of electronic devices"));
        put("n9", new PhoneDTO("n9", "Nokia N9", "Nokia is not a cake now"));
    }};

	@RequestMapping(method = RequestMethod.GET)
	public String printWelcome(ModelMap model) {
		model.addAttribute("message", "Hello world!");
		return "hello";
	}

    @RequestMapping(value = "/smartphones", method = RequestMethod.GET, headers = {"Accept=application/json"})
    public @ResponseBody PhoneDTO[] getSmartphones() throws InterruptedException {
        Thread.sleep(1000); //Imitation of rough activity
        PhoneDTO[] phoneDTOs = phones.values().toArray(new PhoneDTO[phones.size()]);
        return phoneDTOs;
    }

    @RequestMapping(value = "/smartphones/{smartphoneId}", method = RequestMethod.GET, headers = {"Accept=application/json"})
    public @ResponseBody PhoneDTO getSmartphone(@PathVariable String smartphoneId) {
        PhoneDTO phoneDTO = phones.get(smartphoneId);
        return phoneDTO;
    }

    @RequestMapping(value = "/smartphones", method = RequestMethod.POST, headers = {"Content-Type=application/json"})
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void addSmartphone(@RequestBody PhoneDTO smartphone) {
        phones.put(smartphone.getId(), smartphone);
    }

    @RequestMapping(value = "/smartphones/{smartphoneId}", method = RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteSmartphone(@PathVariable("smartphoneId") String smartphoneId) {
        phones.remove(smartphoneId);
    }
}