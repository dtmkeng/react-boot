package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final MusicalInstrumentRepository musicalInstrumentRepository;
	private final MemberRepository memberRepository;

    @Autowired
	public DatabaseLoader(MusicalInstrumentRepository repository, MemberRepository memRepository ) {
		this.musicalInstrumentRepository = repository;
		this.memberRepository = memRepository;

	}


	@Override
	public void run(String... strings) throws Exception {
		this.musicalInstrumentRepository.save(new MusicInstrument("กลองชุด",500.0));
		this.musicalInstrumentRepository.save(new MusicInstrument("กีตาร์ไฟฟ้า",300.0));
		this.musicalInstrumentRepository.save(new MusicInstrument("กีตาร์โปร่ง",300.0));
		this.musicalInstrumentRepository.save(new MusicInstrument("เบส",300.0));
		this.musicalInstrumentRepository.save(new MusicInstrument("คีย์บอร์ด",300.0));

		this.memberRepository.save(new Member("Marut","093-443-8772"));
		this.memberRepository.save(new Member("Waranya","083-465-4378"));
		this.memberRepository.save(new Member("Napassorn","090-134-3451"));


	}
}