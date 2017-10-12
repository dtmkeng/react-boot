package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class MusicInstrument {

	private @Id @GeneratedValue String id;
	private String name;
	private Double price;

	private  MusicInstrument () {}

	public MusicInstrument(String name, Double price) {
		this.name = name;
		this.price = price;
	}
}