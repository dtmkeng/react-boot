package com.example.demo;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MusicalInstrumentRepository extends CrudRepository<MusicInstrument, Long> {
}