package com.fiec.voz_cidada.repository;

import com.fiec.voz_cidada.model.entity.HistoricoChamado;
import org.springframework.stereotype.Repository;

@Repository
public interface HistoricoRepository extends GenericRepository<HistoricoChamado, Long> {
}
