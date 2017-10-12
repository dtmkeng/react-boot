package com.example.demo;

import lombok.Data;
import javax.persistence.Id;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.ManyToOne;




@Data
@Entity
public class RentBill {

	private @Id @GeneratedValue Long id;
	@ManyToOne
	private MusicInstrument Musicaltype;
    private int point;



	private RentBill() {}

	public RentBill(MusicInstrument Musicaltype,int point) {
		this.Musicaltype = Musicaltype;
		this.point = point;

	}
}