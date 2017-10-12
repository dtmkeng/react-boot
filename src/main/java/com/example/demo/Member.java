package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Member {

    private @Id @GeneratedValue Long memberID;
    private String name;
    private String tel;
    // private Data birthDay;
    // private String sex;

    private  Member () {}

    public Member(String name,String tel){
        this.name = name;
        this.tel = tel;
        // this.birthDay = birthDay;
        // this.sex = sex;
    }
}