package com.kosta268.eco_connect.repository.gifticon;

import com.kosta268.eco_connect.entity.gifticon.Gifticon;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GifticonRepository extends JpaRepository<Gifticon, Long> {
}
