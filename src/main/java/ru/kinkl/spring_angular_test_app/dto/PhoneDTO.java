package ru.kinkl.spring_angular_test_app.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PhoneDTO {
    private String id;
    private String name;
    private String description;
}
