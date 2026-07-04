package com.cognizant.employee.model;

import java.util.List;

public class Department {
    private int id;
    private String name;
    private List<Skill> skills;

    public Department() {
    }

    public Department(int id, String name, List<Skill> skills) {
        this.id = id;
        this.name = name;
        this.skills = skills;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Skill> getSkills() {
        return skills;
    }

    public void setSkills(List<Skill> skills) {
        this.skills = skills;
    }
}